// 유튜브 동영상 지연 로딩
document.addEventListener('DOMContentLoaded', function() {
    const lazyYoutubeContainers = document.querySelectorAll('.lazy-youtube');
    
    lazyYoutubeContainers.forEach(container => {
        const videoId = container.dataset.youtubeId;
        const thumbnail = container.querySelector('.video-thumbnail');
        const playButton = container.querySelector('.play-button');
        
        if (playButton) {
            playButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const iframe = document.createElement('iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allowfullscreen', '1');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
                
                // 기존 콘텐츠 제거
                thumbnail.innerHTML = '';
                // iframe 추가
                thumbnail.appendChild(iframe);
                
                // 플레이어가 로드된 후 z-index 조정
                setTimeout(() => {
                    iframe.style.zIndex = '2';
                    container.style.zIndex = '1';
                }, 100);
            });
        }
    });
});