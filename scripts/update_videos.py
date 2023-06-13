import os
import requests
import json
from datetime import datetime

def get_video_info(api_key, channel_id):
    url = f"https://www.googleapis.com/youtube/v3/search?key={api_key}&channelId={channel_id}&part=snippet,id&order=date&maxResults=50"
    videos = []

    while True:
        response = requests.get(url)
        data = json.loads(response.text)

        for item in data['items']:
            if item['id']['kind'] == "youtube#video":
                title = item['snippet']['title']
                video_id = item['id']['videoId']
                publish_time = item['snippet']['publishTime']
                description = item['snippet']['description']
                videos.append((title, video_id, publish_time, description))

        if 'nextPageToken' in data:
            next_page_token = data['nextPageToken']
            url = f"{url}&pageToken={next_page_token}"
        else:
            break

    return videos

def create_post(title, video_id, publish_time, description):
    date = datetime.strptime(publish_time, "%Y-%m-%dT%H:%M:%SZ").date()
    filename = f"_posts/{date}-my-video-{video_id}.md"

    existing_posts = [post for post in os.listdir("_posts") if post.endswith(f"my-video-{video_id}.md")]
    if existing_posts:
        print(f"Post for video {video_id} already exists. Skipping...")
        return

    with open(filename, "w") as f:
        f.write(f"""---
layout: default
title: {title}
date: {date}
categories: videos
---

# {title}
<iframe width="560" height="315" src="https://www.youtube.com/embed/{video_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{description}
""")
    print(f"Created post: {filename}")

api_key = os.environ["YOUTUBE_API_KEY"]
channel_id = "UCOt8sKxnjgZAM02Lc89Ijkw"
videos = get_video_info(api_key, channel_id)

for video in videos:
    create_post(*video)
