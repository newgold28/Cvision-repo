document.addEventListener("DOMContentLoaded", () => {
  // --- WhatsApp pulse styles ---
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

  // --- Ensure Lucide is ready ---
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    } else {
      setTimeout(initIcons, 100);
    }
  }
  initIcons();

  // --- Smooth scrolling ---
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // --- Mobile menu toggle ---
  const mobileMenuButton = document.querySelector("[data-mobile-menu]");
  const mobileMenu = document.querySelector("[data-mobile-menu-content]");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // close menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
