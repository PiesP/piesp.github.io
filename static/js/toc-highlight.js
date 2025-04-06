document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
  const tocLinks = document.querySelectorAll('.toc a');

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: '-100px 0px -66%'
  });

  headers.forEach(header => observer.observe(header));
});