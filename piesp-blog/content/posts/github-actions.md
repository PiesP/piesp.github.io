---
title: "GitHub Actions로 Hugo 블로그 자동 배포하기"
date: 2025-03-12
draft: false
description: "GitHub Actions를 사용하여 Hugo 블로그를 GitHub Pages에 자동으로 배포하는 방법"
tags: ["github", "actions", "자동화", "배포"]
categories: ["웹", "도구"]
---

## GitHub Actions 소개

GitHub Actions는 GitHub 저장소에서 직접 워크플로우를 자동화할 수 있는 CI/CD(지속적 통합/지속적 배포) 도구입니다. 코드를 작성하고 푸시하면 자동으로 빌드, 테스트, 배포까지 이어지는 과정을 구현할 수 있습니다.

## Hugo 블로그와 GitHub Actions

Hugo로 만든 정적 블로그를 GitHub Pages에 배포하는 과정은 다음과 같은 단계로 이루어집니다:

1. Hugo로 정적 파일 생성
2. 생성된 파일을 GitHub Pages 브랜치에 푸시
3. GitHub Pages에서 웹사이트 제공

이 모든 과정을 GitHub Actions를 사용하여 자동화할 수 있습니다.

## 자동 배포 워크플로우 설정하기

### 1. 워크플로우 파일 생성

저장소의 `.github/workflows` 디렉토리에 `deploy.yml` 파일을 생성합니다. 이 파일에 워크플로우 설정을 작성합니다.

```yaml
name: Deploy Hugo Blog

on:
  push:
    branches:
      - master  # 또는 main 브랜치

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        
      - name: Setup Git Submodules
        run: |
          git submodule update --init --recursive
          
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.123.6'
          
      - name: Build Hugo Site
        run: |
          cd piesp-blog
          hugo --minify
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./piesp-blog/public
```

### 2. 워크플로우 작동 원리

위 워크플로우는 다음과 같은 순서로 동작합니다:

1. **Checkout Repository**: 저장소의 코드를 가져옵니다.
2. **Setup Git Submodules**: Hugo 테마와 같은 서브모듈을 초기화합니다.
3. **Setup Hugo**: 지정된 버전의 Hugo를 설치합니다.
4. **Build Hugo Site**: Hugo를 사용하여 정적 사이트를 생성합니다.
5. **Deploy to GitHub Pages**: 생성된 파일을 GitHub Pages에 배포합니다.

## 워크플로우 최적화 팁

### 1. 캐싱 활용

빌드 시간을 단축하기 위해 Hugo 모듈과 같은 의존성을 캐싱할 수 있습니다:

```yaml
- name: Cache Hugo modules
  uses: actions/cache@v2
  with:
    path: /tmp/hugo_cache
    key: ${{ runner.os }}-hugo-${{ hashFiles('**/go.sum') }}
    restore-keys: |
      ${{ runner.os }}-hugo-
```

### 2. 특정 파일 변경 시에만 실행

모든 푸시에 대해 워크플로우를 실행하지 않고, 콘텐츠나 설정이 변경된 경우에만 실행하도록 설정할 수 있습니다:

```yaml
on:
  push:
    branches:
      - master
    paths:
      - 'piesp-blog/**'
      - '.github/workflows/**'
```

## 결론

GitHub Actions를 활용하면 Hugo 블로그의 배포 과정을 완전히 자동화할 수 있습니다. 이를 통해 콘텐츠 작성에만 집중하고, 배포 과정에 소요되는 시간과 노력을 절약할 수 있습니다. 더 복잡한 워크플로우도 필요에 따라 구성할 수 있으니, GitHub Actions 문서를 참고하여 자신만의 워크플로우를 만들어보세요.