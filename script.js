// Add this to a new JavaScript file (e.g., script.js) and link it in your HTML

const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth scrolling for navigation links
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll to top for '#' link
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href.startsWith("#")) {
      // For other section links
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation after clicking a link
    if (link.classList.contains("nav-links")) {
      header.classList.remove("nav-open");
    }
  });
});