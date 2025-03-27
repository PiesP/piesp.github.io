// 유튜브 동영상 지연 로딩
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.lazy-youtube');
  
  containers.forEach(container => {
    container.addEventListener('click', function() {
      const youtubeId = this.dataset.youtubeId;
      const iframe = document.createElement('iframe');
      
      iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      
      this.innerHTML = '';
      this.appendChild(iframe);
      this.classList.remove('lazy-youtube');
      this.classList.add('loaded-youtube');
    });
  });
});