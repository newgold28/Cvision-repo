document.addEventListener("DOMContentLoaded", () => {
  // WhatsApp pulse styles
  const whatsappStyles = `
    .whatsapp-float {
      animation: whatsapp-pulse 2s infinite;
    }
    @keyframes whatsapp-pulse {
      0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
      100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }
    .whatsapp-float:hover { transform: scale(1.1); }
  `;
  const styleElement = document.createElement("style");
  styleElement.textContent = whatsappStyles;
  document.head.appendChild(styleElement);

  // 🔥 Ensure Lucide initializes AFTER it’s loaded
  function initIcons() {
    if (window.lucide && typeof lucide.createIcons === "function") {
      lucide.createIcons();
      // console.log("✅ Lucide icons initialized");
    } else {
      console.warn("⏳ Lucide not ready, retrying...");
      setTimeout(initIcons, 100); // keep trying until ready
    }
  }
  initIcons();

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector("[data-mobile-menu]");
  const mobileMenu = document.querySelector("[data-mobile-menu-content]");
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close mobile menu on link click
  const mobileMenuLinks = document.querySelectorAll("[data-mobile-menu-content] a");
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // (other features like contact form, hover effects, etc.)
});
