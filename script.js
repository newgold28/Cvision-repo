document.addEventListener("DOMContentLoaded", () => {
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    } else {
      setTimeout(initIcons, 100); // retry until Lucide is ready
    }
  }
  initIcons();

  // --- Smooth scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
    mobileMenu.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
