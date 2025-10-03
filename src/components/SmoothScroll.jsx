import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scroll with easing
    let scrolling = false;
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;

    const smoothScrollTo = (target) => {
      targetScroll = target;
      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(animate);
      }
    };

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = () => {
      const diff = targetScroll - currentScroll;
      const delta = Math.abs(diff) > 0.5 ? diff * 0.1 : diff;
      
      if (Math.abs(delta) > 0.5) {
        currentScroll += delta;
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(animate);
      } else {
        currentScroll = targetScroll;
        window.scrollTo(0, currentScroll);
        scrolling = false;
      }
    };

    // Handle wheel events for smooth scrolling
    const handleWheel = (e) => {
      if (e.ctrlKey) return; // Allow zoom
      
      // Smooth scroll on wheel
      const delta = e.deltaY;
      targetScroll = Math.max(0, Math.min(
        document.documentElement.scrollHeight - window.innerHeight,
        targetScroll + delta
      ));
      
      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(animate);
      }
    };

    // Add smooth scroll to anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          const targetPosition = element.offsetTop;
          smoothScrollTo(targetPosition);
        }
      }
    };

    // Passive event listeners for better performance
    document.addEventListener('click', handleAnchorClick);
    
    // Update current scroll on manual scroll
    const handleScroll = () => {
      if (!scrolling) {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;

