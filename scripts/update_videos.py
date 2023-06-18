import os
import requests
import json
import logging
from datetime import datetime
from string import Template

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def load_config():
    """Load configuration from a JSON file."""
    with open('scripts/config_update_videos.json', 'r') as f:
        config = json.load(f)
    api_key = os.getenv("YOUTUBE_API_KEY")
    if api_key:
        config["YOUTUBE_API_KEY"] = api_key
    return config

def fetch_data_from_youtube_api(url):
    """Fetch data from YouTube API."""
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        logging.error(f"Failed to fetch data from YouTube API: {e}")
        return None
    return response.json()

def get_video_info(api_key, channel_id):
    """Fetch video information from YouTube API."""
    url = f"https://www.googleapis.com/youtube/v3/search?key={api_key}&channelId={channel_id}&part=snippet,id&order=date&maxResults=50"
    videos = []
    while True:
        data = fetch_data_from_youtube_api(url)
        if not data:
            break
        for item in data.get('items', []):
            if item.get('id', {}).get('kind') == "youtube#video":
                title = item['snippet']['title']
                video_id = item['id']['videoId']
                publish_time = item['snippet']['publishTime']
                description = item['snippet']['description']
                videos.append((title, video_id, publish_time, description))
        next_page_token = data.get('nextPageToken')
        if next_page_token:
            url = f"{url}&pageToken={next_page_token}"
        else:
            break
    return videos

def create_post(title, video_id, publish_time, description):
    """Create or update a blog post for a video."""
    date = datetime.strptime(publish_time, "%Y-%m-%dT%H:%M:%SZ").date().strftime("%Y-%m-%d")
    filename = f"_posts/{date}-my-video-{video_id}.md"
    existing_posts = [post for post in os.listdir("_posts") if post.endswith(f"my-video-{video_id}.md")]
    if existing_posts:
        logging.info(f"Post for video {video_id} already exists. Updating...")
    else:
        logging.info(f"Creating post for video {video_id}...")
    with open('scripts/post.template', 'r') as f:
        template = Template(f.read())
    post_content = template.substitute(title=title, date=date, video_id=video_id, description=description)
    with open(filename, "w") as f:
        f.write(post_content)
    logging.info(f"Created/Updated post: {filename}")

    def main():
    """Main function."""
    config = load_config()
    videos = get_video_info(config['YOUTUBE_API_KEY'], config['CHANNEL_ID'])
    for title, video_id, publish_time, description in videos:
        create_post(title, video_id, publish_time, description)

if __name__ == '__main__':
    main()
