
document.addEventListener("DOMContentLoaded", () => {
  // Fade-in scroll effect
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  // Typewriter animation
  const text = "Gold & Silver (Building Services)";
  const target = document.getElementById("typewriter");
  let index = 0;
  function typeLetter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100);
    } else {
      target.style.borderRight = "none";
    }
  }
  typeLetter();

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll("#navbarMenu a").forEach(link => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
      });
    });
  }
});
