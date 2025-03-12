import os
import re
import datetime
import pytz
import yaml
import frontmatter
from pathlib import Path
from googleapiclient.discovery import build

# YouTube API 설정
API_KEY = os.environ.get('YOUTUBE_API_KEY')
CHANNEL_ID = os.environ.get('CHANNEL_ID')
youtube = build('youtube', 'v3', developerKey=API_KEY)

# 한국 시간대 설정
KST = pytz.timezone('Asia/Seoul')

# 콘텐츠 디렉토리 설정
CONTENT_DIR = Path('piesp-blog/content')
VIDEOS_DIR = CONTENT_DIR / 'videos'
VIDEOS_DIR.mkdir(exist_ok=True, parents=True)

def sanitize_filename(title):
    """파일 이름으로 사용할 수 있도록 제목 변환"""
    # 특수 문자 제거 및 공백을 하이픈으로 변경
    filename = re.sub(r'[^\w\s-]', '', title.lower())
    filename = re.sub(r'[\s]+', '-', filename)
    return filename

def get_channel_uploads():
    """채널의 업로드 재생목록 ID 가져오기"""
    channel_response = youtube.channels().list(
        part='contentDetails',
        id=CHANNEL_ID
    ).execute()
    
    if 'items' in channel_response and channel_response['items']:
        return channel_response['items'][0]['contentDetails']['relatedPlaylists']['uploads']
    return None

def get_video_details(video_id):
    """영상의 세부 정보 가져오기"""
    video_response = youtube.videos().list(
        part='snippet,contentDetails',
        id=video_id
    ).execute()
    
    if 'items' in video_response and video_response['items']:
        return video_response['items'][0]
    return None

def get_all_videos():
    """채널의 모든 동영상 정보 가져오기"""
    uploads_playlist_id = get_channel_uploads()
    if not uploads_playlist_id:
        return []
    
    videos = []
    next_page_token = None
    
    while True:
        # 업로드 플레이리스트에서 영상 목록 가져오기
        playlist_response = youtube.playlistItems().list(
            part='snippet',
            playlistId=uploads_playlist_id,
            maxResults=50,
            pageToken=next_page_token
        ).execute()
        
        for item in playlist_response.get('items', []):
            snippet = item['snippet']
            video_id = snippet['resourceId']['videoId']
            
            # 영상 세부 정보 가져오기
            video_details = get_video_details(video_id)
            if video_details:
                video_snippet = video_details['snippet']
                videos.append({
                    'id': video_id,
                    'title': video_snippet['title'],
                    'description': video_snippet['description'],
                    'publishedAt': video_snippet['publishedAt'],
                    'tags': video_snippet.get('tags', [])
                })
        
        # 다음 페이지 토큰 확인
        next_page_token = playlist_response.get('nextPageToken')
        if not next_page_token:
            break
    
    return videos

def update_video_post(filepath, video, existing_post):
    """기존 영상 포스트 업데이트"""
    # 업데이트 필요 여부 확인
    needs_update = False
    
    # 프론트매터 업데이트 점검
    if existing_post.get('title') != video['title']:
        existing_post['title'] = video['title']
        needs_update = True
    
    if existing_post.get('tags') != video['tags']:
        existing_post['tags'] = video['tags']
        needs_update = True
    
    # 설명 변경 확인 (첫 줄만 비교)
    old_desc = existing_post.get('description', '')
    new_desc = video['description'].split('\n')[0] if video['description'] else ''
    if old_desc != new_desc:
        existing_post['description'] = new_desc
        needs_update = True
    
    # 본문 콘텐츠 업데이트 (영상 설명)
    new_content = f"""
{{{{< youtube {video['id']} >}}}}

{video['description']}
"""
    
    if existing_post.content.strip() != new_content.strip():
        existing_post.content = new_content
        needs_update = True
    
    # 변경사항이 있으면 파일 저장
    if needs_update:
        with open(filepath, 'wb') as f:
            frontmatter.dump(existing_post, f)
        print(f"Updated post: {filepath.name}")
        return True
    
    print(f"No updates needed for: {filepath.name}")
    return False

def create_or_update_video_post(video):
    """영상 정보를 마크다운 포스트로 생성하거나 업데이트"""
    # 게시일 파싱
    published_date = datetime.datetime.fromisoformat(video['publishedAt'].replace('Z', '+00:00'))
    published_date_kst = published_date.astimezone(KST)
    date_str = published_date_kst.strftime('%Y-%m-%d')
    
    # 파일명 생성 (영상 ID 기반)
    filename = f"{date_str}-{video['id']}.md"
    filepath = VIDEOS_DIR / filename
    
    # ID 기반 파일명이 없는지 확인 (이전 버전과의 호환성)
    if not filepath.exists():
        # 제목 기반 파일명도 확인
        legacy_filename = f"{date_str}-{sanitize_filename(video['title'])}.md"
        legacy_filepath = VIDEOS_DIR / legacy_filename
        
        if legacy_filepath.exists():
            # 기존 파일이 있으면 ID 기반 파일명으로 마이그레이션
            existing_post = frontmatter.load(legacy_filepath)
            if existing_post.get('youtube_id') == video['id']:
                # 파일 이름 변경 (마이그레이션)
                os.rename(legacy_filepath, filepath)
                print(f"Migrated post filename to ID-based: {filename}")
    
    # 파일 존재 여부 확인
    if filepath.exists():
        # 기존 파일 업데이트
        existing_post = frontmatter.load(filepath)
        return update_video_post(filepath, video, existing_post)
    else:
        # 새 파일 생성
        post_data = {
            'title': video['title'],
            'date': published_date_kst.strftime('%Y-%m-%d'),
            'draft': False,
            'youtube_id': video['id'],
            'tags': video['tags'],
            'categories': ['videos'],
            'description': video['description'].split('\n')[0] if video['description'] else ''
        }
        
        # 본문 작성
        content = f"""
{{{{< youtube {video['id']} >}}}}

{video['description']}
"""
        
        # 마크다운 파일 생성
        post = frontmatter.Post(content, **post_data)
        with open(filepath, 'wb') as f:
            frontmatter.dump(post, f)
        
        print(f"Created new post: {filename}")
        return True

def main():
    # 비디오 디렉토리 생성
    VIDEOS_DIR.mkdir(exist_ok=True, parents=True)
    
    # 영상 목록 가져오기
    videos = get_all_videos()
    print(f"Found {len(videos)} videos")
    
    # 각 영상에 대해 포스트 생성 또는 업데이트
    for video in videos:
        create_or_update_video_post(video)

if __name__ == '__main__':
    main()
