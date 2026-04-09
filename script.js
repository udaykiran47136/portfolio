// ── SCROLL: HIGHLIGHT ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Show/hide scroll-to-top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    scrollBtn.classList.toggle('show', window.scrollY > 400);
  }
});

// ── SCROLL REVEAL: CARDS ANIMATE IN ──
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// ── SCROLL REVEAL: SKILLS ANIMATE IN ──
const skillItems = document.querySelectorAll('.skills div');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

skillItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(15px)';
  item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  skillObserver.observe(item);
});

// ── SCROLL TO TOP BUTTON ──
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollTop';
scrollBtn.innerHTML = '↑';
scrollBtn.title = 'Back to top';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── CONTACT FORM: SUCCESS FEEDBACK ──
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message ✉️';
      btn.disabled = false;
    }, 3000);
  });
}

// ── SMOOTH SCROLL FOR NAV LINKS ──
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});