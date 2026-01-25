// Little Market LLC Website JavaScript
// Description: Simple interactive features for the Little Market LLC website

document.addEventListener('DOMContentLoaded', function() {
  initializeCurrentYear();
  initializeEmailTracking();
  initializeAccessibility();
});

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