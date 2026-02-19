// Basic interaction script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Web Highlighter Landing Page Loaded');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Skip if href is just "#" or empty
      if (href === '#' || href === '') return;

      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } catch (error) {
        console.warn('Invalid selector:', href);
      }
    });
  });

  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => revealOnScroll.observe(reveal));

  // Waitlist button handler
  const waitlistBtn = document.getElementById('waitlist-btn');
  if (waitlistBtn) {
    waitlistBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Coming Soon! Join our waitlist to be notified when we launch.');
    });
  }
});
