[![Deploy Jekyll site to Pages](https://github.com/PiesP/piesp.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/PiesP/piesp.github.io/actions/workflows/jekyll.yml)  
[![Update YouTube Videos](https://github.com/PiesP/piesp.github.io/actions/workflows/update-videos-posts.yml/badge.svg)](https://github.com/PiesP/piesp.github.io/actions/workflows/update-videos-posts.yml)

# piesp.github.io

이 GitHub 저장소는 GitHub Actions와 Jekyll을 사용하여 웹페이지를 빌드하고 <https://piesp.github.io/>에 게시하는 것을 목적으로 합니다. 웹페이지의 내용은 주로 유희왕 카드 게임에 초점을 맞추고 있습니다.

## 프로젝트 구조

이 GitHub 저장소에는 Jekyll 사이트 빌드와 GitHub Actions 워크플로우에 필요한 여러 디렉토리와 파일이 포함되어 있습니다. 주요 구성 요소에 대한 간략한 개요는 다음과 같습니다:

- `.github/workflows`: 이 디렉토리에는 GitHub Actions의 워크플로우 파일이 포함되어 있습니다.
- `_includes`, `_layouts`, `_posts`, `_sass`: 이 디렉토리들에는 Jekyll 사이트의 구조, 스타일링, 그리고 컨텐츠에 대한 다양한 리소스가 포함되어 있습니다.
- `_site`: 이 디렉토리에는 Jekyll 빌드 프로세스에서 자동으로 생성되는 파일이 포함되어 있습니다.
- `assets`: 이 디렉토리에는 이미지, 스크립트, 스타일시트와 같은 정적 파일이 포함되어 있습니다.
- `scripts`: 이 디렉토리에는 GitHub Actions의 워크플로우에서 사용되는 스크립트 파일이 포함되어 있습니다.
- `_config.yml`: 이 파일은 Jekyll 사이트의 주 설정 파일입니다.
- `404.html`: 이 파일은 사이트의 사용자 정의 404 오류 페이지입니다.
- `favicon.ico`: 이 파일은 웹 페이지의 아이콘입니다.
- `Gemfile`, `Gemfile.lock`: 이 파일들은 Ruby의 패키지 관리자인 Bundler가 프로젝트의 Ruby 의존성을 추적하는 데 사용됩니다.
- `index.html`: 이 파일은 사이트의 메인 페이지입니다.
- `README.md`: 이 GitHub 저장소에 대한 설명이 담긴 문서입니다.

## 기여 방법

사이트를 개선하거나 유희왕 카드 게임에 관련된 더 많은 컨텐츠를 추가하는 기여는 항상 환영입니다. 이슈를 열거나 풀 리퀘스트를 제출해 주시기 바랍니다.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 오픈소스로 제공됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
