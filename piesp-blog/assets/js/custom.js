// 유튜브 동영상 지연 로딩
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.lazy-youtube');
  
  // IntersectionObserver를 사용하여 뷰포트에 들어올 때만 이벤트 리스너 추가
  if ('IntersectionObserver' in window) {
    const lazyYoutubeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target;
          // 컨테이너가 화면에 보이면 클릭 이벤트 리스너 추가
          setupYoutubeClickListener(container);
          // 한 번 설정했으면 더 이상 관찰할 필요 없음
          observer.unobserve(container);
        }
      });
    });
    
    containers.forEach(container => {
      lazyYoutubeObserver.observe(container);
    });
  } else {
    // IntersectionObserver 미지원 브라우저에서는 모든 컨테이너에 바로 이벤트 리스너 추가
    containers.forEach(container => {
      setupYoutubeClickListener(container);
    });
  }
  
  function setupYoutubeClickListener(container) {
    container.addEventListener('click', function() {
      const youtubeId = this.dataset.youtubeId;
      
      if (!youtubeId) {
        console.error('유튜브 ID가 없습니다.');
        return;
      }
      
      // 인라인 프레임을 포함하는 완전히 새로운 div 생성
      const iframeContainer = document.createElement('div');
      iframeContainer.classList.add('loaded-youtube');
      iframeContainer.style.position = 'relative';
      iframeContainer.style.width = '100%';
      iframeContainer.style.paddingTop = '56.25%';
      
      // iframe 생성 및 설정
      const iframe = document.createElement('iframe');
      iframe.setAttribute('loading', 'lazy'); // 네이티브 지연 로딩 추가
      iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      
      // 새로운 컨테이너에 iframe 추가
      iframeContainer.appendChild(iframe);
      
      // 기존 요소와 교체
      this.parentNode.replaceChild(iframeContainer, this);
    });
    
    // 접근성 향상을 위해 키보드 접근성 추가
    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'button');
    container.setAttribute('aria-label', '유튜브 동영상 재생');
    
    container.addEventListener('keydown', function(e) {
      // Enter나 Space 키를 누르면 클릭 이벤트 트리거
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
});