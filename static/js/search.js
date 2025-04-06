const search = {
  index: null,
  results: [],
  
  async init() {
    const response = await fetch('/index.json');
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
  },
  
  search(query) {
    return this.index.search(query);
  }
};

// 페이지 로드 시 자동 초기화
document.addEventListener('DOMContentLoaded', () => {
  search.init().catch(console.error);
});