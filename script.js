// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('[data-mobile-menu]');
  const mobileMenu = document.querySelector('[data-mobile-menu-content]');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Product quote buttons
  document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const product = this.getAttribute('data-product');
      // Scroll to contact form with product info
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });
});