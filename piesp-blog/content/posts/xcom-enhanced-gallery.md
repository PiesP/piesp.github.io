---
title: "X.com 향상된 이미지 갤러리 유저 스크립트 소개"
date: 2025-03-12
draft: false
description: "X.com(구 트위터)에서 원본 크기 이미지를 확인하고 다운로드할 수 있는 고급 이미지 뷰어 스크립트"
tags: ["유저 스크립트", "브라우저 확장", "X.com", "트위터", "이미지 뷰어"]
categories: ["도구", "웹"]
---

## X.com 향상된 이미지 갤러리 소개

최근 X.com(구 트위터)의 이미지 뷰어는 많은 제한사항을 가지고 있습니다. 특히 여러 이미지가 포함된 게시물을 볼 때 원본 크기로 보기 어렵고, 이미지를 저장하려면 일일이 클릭해야 하는 번거로움이 있습니다. 이러한 불편함을 해소하기 위해 제작한 "X.com 향상된 이미지 갤러리" 유저 스크립트를 소개합니다.

## 주요 기능

이 스크립트는 X.com의 기본 이미지 뷰어를 완전히 대체하여 더 나은 사용자 경험을 제공합니다:

1. **원본 크기 이미지 표시**: X.com이 제공하는 압축된 이미지 대신 원본 크기의 이미지를 볼 수 있습니다.

2. **수직 스크롤 갤러리**: 여러 이미지를 수직으로 스크롤하며 볼 수 있어 더 편리한 탐색이 가능합니다.

3. **다양한 보기 모드**:
   - 너비에 맞춤
   - 높이에 맞춤
   - 창에 맞춤
   - 원본 크기

4. **편리한 이미지 탐색**:
   - 썸네일 네비게이션
   - 화면 컨트롤
   - 키보드 단축키

5. **다운로드 옵션**:
   - 현재 이미지 저장
   - 모든 이미지 ZIP 파일로 일괄 다운로드

6. **다국어 지원**: 한국어와 영어 인터페이스 제공

7. **X.com 테마 자동 적용**: 사이트의 현재 테마에 맞춰 UI가 자동으로 조정됩니다.

## 설치 방법

1. 먼저 유저 스크립트 관리자를 설치합니다:
   - [Tampermonkey](https://www.tampermonkey.net/) (권장)
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Greasemonkey](https://www.greasespot.net/)

2. 아래 링크를 클릭하여 스크립트를 설치합니다:
   - [X.com 향상된 이미지 갤러리 설치](https://github.com/PiesP/xcom-enhanced-gallery/raw/master/xcom-enhanced-gallery.user.js)

3. 유저 스크립트 관리자에서 설치를 확인합니다.

## 사용 방법

### 기본 사용법

1. X.com에서 아무 이미지나 클릭하면 자동으로 향상된 갤러리가 열립니다.
2. 상단 컨트롤을 사용하여 보기 모드를 변경하거나 이미지를 다운로드할 수 있습니다.
3. 수직으로 스크롤하여 여러 이미지를 탐색할 수 있습니다.
4. 이미지 영역 밖을 클릭하거나 ESC 키를 눌러 뷰어를 닫습니다.

### 키보드 단축키

- **왼쪽/위 화살표**: 이전 이미지
- **오른쪽/아래 화살표**: 다음 이미지
- **스페이스바**: 다음 이미지
- **Home/End**: 첫 번째/마지막 이미지
- **ESC**: 뷰어 닫기

## 동작 원리

이 스크립트는 X.com의 기본 이미지 뷰어를 가로채고 사용자 정의 갤러리 인터페이스로 대체합니다. 원본 크기 이미지 URL을 추출하고 사용자 정의 뷰어에서 표시합니다. 웹 페이지의 DOM을 수정하지만, X.com 서버와는 직접적인 상호작용이 없으므로 계정 보안에 영향을 주지 않습니다.

주요 기술적 특징:

1. **깨끗한 아키텍처**: 코드가 모듈화되어 있어 유지보수가 용이합니다.
2. **효율적인 이미지 처리**: 필요할 때만 이미지를 로드하여 메모리 사용량을 줄입니다.
3. **이벤트 처리**: 키보드와 마우스 이벤트를 정교하게 관리합니다.
4. **적응형 UI**: 다크 모드와 라이트 모드 모두에서 잘 작동합니다.

## 개발 배경

X.com은 최근 몇 년간 이미지 뷰어를 여러 번 변경했으며, 각 업데이트마다 사용자 경험이 저하되는 경향이 있었습니다. 특히 이미지가 압축되어 표시되고, 여러 이미지를 효율적으로 볼 수 있는 방법이 제한되는 문제가 있었습니다.

이 스크립트는 이러한 제한을 극복하고 사용자가 X.com에서 게시된 이미지를 최대한 활용할 수 있도록 개발되었습니다. 특히 사진 작가나 디자이너와 같이 고품질 이미지 확인이 필요한 사용자에게 유용합니다.

## 맺음말

X.com을 자주 사용하고 이미지를 많이 보는 사용자라면 이 유저 스크립트가 큰 도움이 될 것입니다. 원본 크기로 이미지를 확인하고, 편리하게 다운로드할 수 있어 X.com에서의 시각적 콘텐츠 경험이 크게 향상됩니다.

스크립트는 지속적으로 개선되고 있으며, 최신 버전과 업데이트는 [GitHub 저장소](https://github.com/PiesP/xcom-enhanced-gallery)에서 확인할 수 있습니다. 버그 신고나 기능 제안도 GitHub 이슈를 통해 해주시면 적극 반영하겠습니다.

이 프로젝트는 MIT 라이선스로 제공되어 자유롭게 사용, 수정, 배포가 가능합니다.
