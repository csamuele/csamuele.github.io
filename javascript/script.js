document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.gradient-overlay');
    let isScrolledDown = false;
    
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !isScrolledDown) {
        // Scroll down
        overlay.style.animationName = 'fadeOutRight';
        overlay.style.animationDuration = '0.5s';
        isScrolledDown = true;
      } else if (scrollPosition === 0 && isScrolledDown) {
        // Scroll back up
        overlay.style.animationName = 'fadeInRight';
        overlay.style.animationDuration = '0.5s';
        isScrolledDown = false;
      }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
  });
  