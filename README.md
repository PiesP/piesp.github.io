# PiesP의 블로그

이 저장소는 Hugo를 사용하여 제작된 개인 블로그입니다. GitHub Pages를 통해 배포됩니다.

## 방문하기
[블로그 방문하기](https://piesp.github.io/)

## 사용 기술
- **프레임워크**: [Hugo](https://gohugo.io/)
- **테마**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **배포**: GitHub Pages와 GitHub Actions

## 로컬 개발 환경 설정하기

### 사전 요구사항
- [Hugo 설치](https://gohugo.io/installation/) (v0.123.6 이상 권장)
- Git

### 로컬에서 실행하기

```bash
# 저장소 클론
git clone https://github.com/PiesP/piesp.github.io.git
cd piesp.github.io

# 서브모듈 초기화
git submodule update --init --recursive

# Hugo 서버 실행
cd piesp-blog
hugo server -D
```

## 새 글 작성하기

```bash
cd piesp-blog
hugo new content posts/새-글-제목.md
```

## 배포 방법
master 브랜치에 변경사항을 푸시하면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포합니다.
