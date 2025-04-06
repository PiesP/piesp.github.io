document.addEventListener('DOMContentLoaded', function() {
  // 모든 지연 로딩 이미지 선택
  var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  
  // 네이티브 로딩 지원 확인
  if ('loading' in HTMLImageElement.prototype) {
    // 네이티브 lazy loading 사용
    lazyImages.forEach(function(img) {
      img.setAttribute('loading', 'lazy');
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.remove('lazy');
    });
  } else if ('IntersectionObserver' in window) {
    // 네이티브 지원이 없으면 IntersectionObserver 사용
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          lazyImage.classList.remove('lazy');
          observer.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // 대체 구현
    let lazyLoadThrottleTimeout;
    
    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        lazyImages.forEach(function(lazyImage) {
          if (lazyImage.offsetTop < (window.innerHeight + scrollTop)) {
            lazyImage.src = lazyImage.dataset.src;
            if (lazyImage.dataset.srcset) {
              lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImage.classList.remove('lazy');
            
            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });
            
            if (lazyImages.length === 0) {
              document.removeEventListener('scroll', lazyLoad);
              window.removeEventListener('resize', lazyLoad);
              window.removeEventListener('orientationChange', lazyLoad);
            }
          }
        });
      }, 20);
    }

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationChange', lazyLoad);
    lazyLoad(); // 초기 로드
  }
});