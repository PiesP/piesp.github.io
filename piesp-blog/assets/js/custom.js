// 유튜브 동영상 지연 로딩
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.lazy-youtube');
  
  containers.forEach(container => {
    container.addEventListener('click', function() {
      const youtubeId = this.dataset.youtubeId;
      
      // 인라인 프레임을 포함하는 완전히 새로운 div 생성
      const iframeContainer = document.createElement('div');
      iframeContainer.classList.add('loaded-youtube');
      iframeContainer.style.position = 'relative';
      iframeContainer.style.width = '100%';
      iframeContainer.style.paddingTop = '56.25%';
      
      // iframe 생성 및 설정
      const iframe = document.createElement('iframe');
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
  });
});