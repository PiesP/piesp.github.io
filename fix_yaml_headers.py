import os
import re

# _posts 디렉터리 경로
posts_dir = "./_posts"

# YAML 헤더 수정 함수
def fix_yaml_header(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # `title` 필드의 대괄호 제거
        fixed_content = re.sub(
            r"title:\s*\[(.*?)\]",
            r'title: "\1"',
            content
        )

        # 수정이 발생하면 파일에 다시 저장
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(fixed_content)
            print(f"Fixed: {file_path}")
    except UnicodeDecodeError as e:
        print(f"Error reading {file_path}: {e}")

# _posts 디렉터리의 모든 Markdown 파일 수정
for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file.endswith('.md'):
            fix_yaml_header(os.path.join(root, file))
