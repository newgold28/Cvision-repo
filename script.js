// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
   
  // Add WhatsApp button styles
  const whatsappStyles = `
    .whatsapp-float {
      animation: whatsapp-pulse 2s infinite;
    }
    
    @keyframes whatsapp-pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      }
    }
    
    .whatsapp-float:hover {
      transform: scale(1.1);
    }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.textContent = whatsappStyles;
  document.head.appendChild(styleElement);
  
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // View More/Less functionality for cameras
  const viewMoreBtn = document.getElementById('view-more-btn');
  const viewLessBtn = document.getElementById('view-less-btn');
  const additionalCameras = document.querySelectorAll('.additional-camera');
  
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      additionalCameras.forEach(camera => {
        camera.classList.remove('hidden');
      });
      viewMoreBtn.classList.add('hidden');
      viewLessBtn.classList.remove('hidden');
    });
  }
  
  if (viewLessBtn) {
    viewLessBtn.addEventListener('click', () => {
      additionalCameras.forEach(camera => {
        camera.classList.add('hidden');
      });
      viewLessBtn.classList.add('hidden');
      viewMoreBtn.classList.remove('hidden');
      // Scroll back to camera section
      document.querySelector('#camera-catalog').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Learn More button functionality (now Request Quote)
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      // Scroll to contact section
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
      
      // Pre-fill the message with product interest
      setTimeout(() => {
        const messageTextarea = document.querySelector('#contact textarea');
        if (messageTextarea && product) {
          messageTextarea.value = `I'm interested in learning more about your ${product} solutions. Please provide detailed information and pricing.`;
          messageTextarea.focus();
        }
      }, 1000);
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Simple form validation
      if (!data.firstName || !data.lastName || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Close mobile menu when clicking on links
  const mobileMenuLinks = document.querySelectorAll('[data-mobile-menu-content] a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const mobileMenu = document.querySelector('[data-mobile-menu-content]');
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Add scroll effect to header
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
    
    lastScrollY = currentScrollY;
  });

  // Add hover effects to product cards
  const productCards = document.querySelectorAll('.group');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add click handlers for testimonial interaction
  const testimonialCards = document.querySelectorAll('.bg-gray-50');
  testimonialCards.forEach(card => {
    card.addEventListener('click', function() {
      // Add a subtle click effect
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Add click handlers for CTA buttons
  const ctaButtons = document.querySelectorAll('button');
  ctaButtons.forEach(button => {
    if (button.textContent.includes('Explore Products')) {
      button.addEventListener('click', () => {
        document.querySelector('#camera-catalog').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    
    if (button.textContent.includes('Request Consultation') || button.textContent.includes('Get Quote') || button.textContent.includes('Call for Consultation') || button.textContent.includes('Schedule Visit')) {
      button.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    
    if (button.textContent.includes('Learn More')) {
      button.addEventListener('click', () => {
        // Show product details modal or scroll to contact for more info
        document.querySelector('#contact').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
    
    if (button.textContent.includes('Download Catalog')) {
      button.addEventListener('click', () => {
        // Simulate catalog download
        alert('Catalog download will be available soon. Please contact us for detailed specifications.');
      });
    }
  });

  // Add click handlers for mobile menu toggle (if needed)
  const mobileMenuButton = document.querySelector('[data-mobile-menu]');
  const mobileMenu = document.querySelector('[data-mobile-menu-content]');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Add animation on scroll for stats
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe stats section
  const statsSection = document.querySelector('#home .grid.grid-cols-2');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
)

document.addEventListener("DOMContentLoaded", () => {
  // Your other JS (like menu toggle)
  
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
