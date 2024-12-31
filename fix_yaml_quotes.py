import os
import re

# _posts 디렉터리 경로
posts_dir = "./_posts"

# YAML 수정 함수
def fix_yaml_quotes(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # `title` 필드의 큰따옴표 이스케이프 처리
    fixed_content = re.sub(
        r'title: "(.*?)(?<!\\)"',
        r'title: "\1\\"',
        content
    )

    # 수정이 발생하면 파일에 다시 저장
    if fixed_content != content:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(fixed_content)
        print(f"Fixed: {file_path}")

# _posts 디렉터리의 모든 Markdown 파일 수정
for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file.endswith('.md'):
            fix_yaml_quotes(os.path.join(root, file))
