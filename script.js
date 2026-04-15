// Little Market LLC Website JavaScript
// Description: Simple interactive features for the Little Market LLC website

document.addEventListener('DOMContentLoaded', function() {
  initializeCurrentYear();
  initializeEmailTracking();
  initializeAccessibility();
  initializeMascot();
  initializeReveal();
  initializeSplash();
});

function initializeSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  setTimeout(() => splash.remove(), 1400);
}

function initializeReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

function showBadge(text) {
  const b = document.createElement('div');
  b.className = 'badge-toast';
  b.textContent = text;
  document.body.appendChild(b);
  requestAnimationFrame(() => b.classList.add('show'));
  setTimeout(() => {
    b.classList.remove('show');
    setTimeout(() => b.remove(), 600);
  }, 3000);
}

function initializeMascot() {
  const mascot = document.getElementById('mascot');
  const counter = document.getElementById('pet-counter');
  if (!mascot || !counter) return;

  let count = parseInt(localStorage.getItem('lm_pets') || '0', 10);
  const messages = [
    'say hi!', 'hehe', 'again?', 'so sweet',
    'yay!', 'more!', 'berry nice!', 'eeee!'
  ];

  const render = () => {
    if (count === 0) {
      counter.textContent = 'say hi!';
    } else {
      const msg = messages[count % messages.length];
      counter.textContent = `${msg}  ·  ${count} pet${count === 1 ? '' : 's'}`;
    }
    counter.classList.add('visible');
  };
  render();

  const milestones = {
    10:  'new friend unlocked!',
    25:  'berry buddy!',
    50:  'regular customer!',
    100: 'market legend!',
    250: 'honorary strawberry!'
  };

  mascot.addEventListener('click', () => {
    count += 1;
    localStorage.setItem('lm_pets', String(count));
    mascot.classList.remove('bounce');
    void mascot.offsetWidth;
    mascot.classList.add('bounce');
    render();
    if (milestones[count]) showBadge(milestones[count]);
  });
}

/**
 * Update current year in footer
 */
function initializeCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Email link interaction
 */
function initializeEmailTracking() {
  const emailLink = document.querySelector('.email-link');
  
  if (emailLink) {
    emailLink.addEventListener('click', function() {
      // Add a subtle visual feedback
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  }
}

/**
 * Accessibility enhancements
 */
function initializeAccessibility() {
  // Improved focus management
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });

  // Add focus styles for keyboard navigation
  const style = document.createElement('style');
  style.textContent = `
    .keyboard-navigation *:focus {
      outline: 2px solid #1e1e1e;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Error handling and fallbacks
 */
window.addEventListener('error', function(e) {
  console.warn('Little Market LLC Website: Non-critical error occurred', e.error);
  // Graceful degradation - ensure core functionality works
});