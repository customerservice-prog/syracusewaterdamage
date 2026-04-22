// Syracuse Water Damage Restoration - script.js
(function() {
  // Year stamp
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Hide sticky call bar near footer
  const stickyCall = document.querySelector('.sticky-call');
  if (stickyCall) {
    const footer = document.querySelector('footer');
    window.addEventListener('scroll', () => {
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top;
      stickyCall.style.display = footerTop < window.innerHeight ? 'none' : '';
    }, { passive: true });
  }

  // Form handling
  const form = document.querySelector('.estimate-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const success = form.querySelector('.form-success');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      try {
        const data = new FormData(form);
        await fetch('/api/lead', { method: 'POST', body: data });
        form.querySelectorAll('input, textarea, button').forEach(el => el.style.display = 'none');
        if (success) success.removeAttribute('hidden');
      } catch(err) {
        btn.disabled = false;
        btn.textContent = "Send — we'll call you in 15 minutes";
        alert('Something went wrong. Please call us directly at (315) XXX-XXXX.');
      }
    });
  }

  // Track phone clicks for analytics
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_click', { event_category: 'engagement', event_label: 'call_cta' });
      }
    });
  });
})();
