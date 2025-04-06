// 검색 기능 객체를 전역 스코프에 노출
window.search = {
  index: null,
  results: [],
  
  async init() {
    // Lunr.js 라이브러리가 로드되었는지 확인
    if (typeof lunr === 'undefined') {
      console.error('Lunr.js 라이브러리가 로드되지 않았습니다.');
      return;
    }

    try {
      const response = await fetch('/index.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.index = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('tags', { boost: 5 });
        
        data.forEach((doc, idx) => {
          doc.id = idx;
          this.add(doc);
        });
      });
    } catch (error) {
      console.error('검색 인덱스를 초기화하는 중 오류가 발생했습니다:', error);
    }
  },
  
  search(query) {
    if (!this.index) {
      console.warn('검색 인덱스가 초기화되지 않았습니다.');
      return [];
    }
    return this.index.search(query);
  }
};

// 페이지 로드 시 자동 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 필요한 라이브러리가 로드되었는지 확인
  if (!window.lunr) {
    // lunr.js 스크립트 동적 로드
    const lunrScript = document.createElement('script');
    lunrScript.src = 'https://unpkg.com/lunr/lunr.js';
    lunrScript.onload = () => window.search.init().catch(console.error);
    document.head.appendChild(lunrScript);
  } else {
    window.search.init().catch(console.error);
  }
});