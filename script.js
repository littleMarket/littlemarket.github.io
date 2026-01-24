// Little Market LLC Website JavaScript
// Author: AI Assistant
// Description: Interactive features and animations for the Little Market LLC website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initializeNavigation();
  initializeAnimations();
  initializeScrollEffects();
  initializeCurrentYear();
  initializeEmailTracking();
  initializeAccessibility();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');

  // Mobile navigation toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
      navToggle.classList.toggle('active');
      
      // Update ARIA attributes for accessibility
      const isOpen = nav.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Header scroll effect
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide/show header on scroll
    if (scrollY > lastScrollY && scrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function requestHeaderUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
}

/**
 * Scroll-triggered animations
 */
function initializeAnimations() {
  // Create intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Add stagger effect for cards
        if (entry.target.classList.contains('about-card')) {
          const cards = document.querySelectorAll('.about-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.animationDelay = `${index * 0.2}s`;
              card.classList.add('stagger-in');
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.about-card, .contact-content');
  animatedElements.forEach(el => observer.observe(el));

  // Add CSS classes for animations
  addAnimationStyles();
}

/**
 * Add dynamic animation styles
 */
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .stagger-in {
      animation: slideInScale 0.6s ease-out forwards;
    }
    
    @keyframes slideInScale {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    .nav-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Smooth scroll effects
 */
function initializeScrollEffects() {
  // Parallax effect for hero background
  const hero = document.querySelector('.hero');
  let heroTicking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
    
    heroTicking = false;
  }

  function requestParallaxUpdate() {
    if (!heroTicking) {
      requestAnimationFrame(updateParallax);
      heroTicking = true;
    }
  }

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
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
 * Email interaction tracking (privacy-friendly)
 */
function initializeEmailTracking() {
  const emailLink = document.querySelector('.contact-email');
  
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
  // Add skip to main content link
  addSkipLink();
  
  // Keyboard navigation for cards
  const cards = document.querySelectorAll('.about-card');
  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Improved focus management
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
}

/**
 * Add skip to main content link for accessibility
 */
function addSkipLink() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  
  // Add styles for skip link
  const style = document.createElement('style');
  style.textContent = `
    .skip-link {
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--color-primary);
      color: white;
      padding: 8px 12px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 10000;
      font-weight: 600;
      transition: top 0.2s ease;
    }
    
    .skip-link:focus {
      top: 6px;
    }
    
    .keyboard-navigation *:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  `;
  
  document.head.appendChild(style);
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add id to main element
  const main = document.querySelector('.main');
  if (main) {
    main.id = 'main';
  }
}

/**
 * Performance optimizations
 */
function optimizePerformance() {
  // Preload critical resources
  const preloadLinks = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];
  
  preloadLinks.forEach(link => {
    const linkElement = document.createElement('link');
    Object.assign(linkElement, link);
    document.head.appendChild(linkElement);
  });
}

/**
 * Error handling and fallbacks
 */
window.addEventListener('error', function(e) {
  console.warn('Little Market LLC Website: Non-critical error occurred', e.error);
  // Graceful degradation - ensure core functionality works
});

// Initialize performance optimizations
optimizePerformance();

/**
 * Easter egg - Konami Code
 */
(function() {
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  let currentSequence = [];
  
  document.addEventListener('keydown', function(e) {
    currentSequence.push(e.code);
    
    if (currentSequence.length > konamiCode.length) {
      currentSequence.shift();
    }
    
    if (JSON.stringify(currentSequence) === JSON.stringify(konamiCode)) {
      activateEasterEgg();
      currentSequence = [];
    }
  });
  
  function activateEasterEgg() {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)';
      hero.style.backgroundSize = '400% 400%';
      hero.style.animation = 'rainbowGradient 3s ease infinite';
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes rainbowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
      
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  }
})();