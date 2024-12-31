import os
import yaml

# _posts 디렉터리 경로
posts_dir = "./_posts"

# 결과를 저장할 파일 경로
output_file = "yaml_check_results.txt"

# YAML 구문 검사 함수
def validate_yaml(file_path, results):
    with open(file_path, 'r', encoding='utf-8') as file:
        try:
            # YAML 헤더 부분만 읽기
            content = file.read()
            yaml_content = content.split('---')[1]
            yaml.safe_load(yaml_content)
            results.append(f"Valid YAML: {file_path}")
        except yaml.YAMLError as e:
            results.append(f"YAML Error in {file_path}: {e}")

# 결과 저장
def save_results(results):
    with open(output_file, 'w', encoding='utf-8') as file:
        for line in results:
            file.write(line + "\n")
    print(f"Results saved to {output_file}")

# _posts 디렉터리의 모든 Markdown 파일 점검
results = []
for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file.endswith('.md'):
            validate_yaml(os.path.join(root, file), results)

# 결과 저장
save_results(results)
