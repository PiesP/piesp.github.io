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
                
                // iframe 크기 설정
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                
                // 기존 콘텐츠 제거 전에 컨테이너 크기 저장
                const containerWidth = thumbnail.offsetWidth;
                const containerHeight = thumbnail.offsetHeight;
                
                // 기존 콘텐츠 제거
                thumbnail.innerHTML = '';
                
                // iframe 추가
                thumbnail.appendChild(iframe);
                
                // 컨테이너 크기 유지
                thumbnail.style.width = containerWidth + 'px';
                thumbnail.style.height = containerHeight + 'px';
            });
        }
    });
});