// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu toggle
  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveNavLink);

  // Animate skill bars when they come into view

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".project-card, .skill-category, .education-card, .award-card, .highlight-card"
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible && !element.classList.contains("fade-in-up")) {
        element.classList.add("fade-in-up");
      }
    });
  }

  // Scroll event listener
  window.addEventListener("scroll", function () {
    animateOnScroll();
  });

  // Initial call to animate visible elements
  animateOnScroll();
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add smooth hover effects
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effect to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effect to skill categories
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    category.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effect to highlight cards
  const highlightCards = document.querySelectorAll(".highlight-card");
  highlightCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Intersection Observer for better performance
if ("IntersectionObserver" in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");

        // Animate skill bars if they're in a skill category
        if (entry.target.classList.contains("skill-category")) {
          const skillBars = entry.target.querySelectorAll(".skill-progress");
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              const width = bar.style.width;
              bar.style.width = "0%";
              setTimeout(() => {
                bar.style.width = width;
              }, 100);
            }, index * 200);
          });
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const elementsToObserve = document.querySelectorAll(
    ".project-card, .skill-category, .education-card, .award-card, .highlight-card"
  );
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Prevent form submission on Enter key in input fields (except textarea)
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const form = this.closest("form");
        const inputs = Array.from(form.querySelectorAll("input, textarea"));
        const currentIndex = inputs.indexOf(this);
        const nextInput = inputs[currentIndex + 1];

        if (nextInput) {
          nextInput.focus();
        } else {
          form.querySelector('button[type="submit"]').click();
        }
      }
    });
  });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Uncomment the following lines if you want a typing effect on the hero title
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero h1');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

const ordenamientoImages = [
  "img/ordernamiento_1.png",
  "img/ordernamiento_2.png",
  "img/ordernamiento_3.png",
  "img/ordernamiento_4.png",
  "img/ordernamiento_5.png",
];
let ordenamientoIndex = 0;

function openOrdenamientoModal() {
  document.getElementById("ordenamientoModal").style.display = "flex";
  showOrdenamientoSlide(ordenamientoIndex);
}

function closeOrdenamientoModal() {
  document.getElementById("ordenamientoModal").style.display = "none";
}

function changeOrdenamientoSlide(n) {
  ordenamientoIndex += n;
  if (ordenamientoIndex >= ordenamientoImages.length) ordenamientoIndex = 0;
  if (ordenamientoIndex < 0) ordenamientoIndex = ordenamientoImages.length - 1;
  showOrdenamientoSlide(ordenamientoIndex);
}

function showOrdenamientoSlide(index) {
  const sliderImage = document.getElementById("ordenamientoSlider");
  sliderImage.src = ordenamientoImages[index];
}

const mitsImages = [
  "img/mits_1.png",
  "img/mits_2.png",
  "img/mits_3.png",
  "img/mits_4.png",
  "img/mits_5.png",
  "img/mits_6.png",
  "img/mits_7.png",
  "img/mits_8.png",
];
let mitsIndex = 0;

function openMitsModal() {
  document.getElementById("mitsModal").style.display = "flex";
  showMitsSlide(mitsIndex);
}

function closeMitsModal() {
  document.getElementById("mitsModal").style.display = "none";
}

function changeMitsSlide(n) {
  mitsIndex += n;
  if (mitsIndex >= mitsImages.length) mitsIndex = 0;
  if (mitsIndex < 0) mitsIndex = mitsImages.length - 1;
  showMitsSlide(mitsIndex);
}

function showMitsSlide(index) {
  const sliderImage = document.getElementById("mitsSlider");
  sliderImage.src = mitsImages[index];
}

const juegosImages = [
  "img/juegos_1.png",
  "img/juegos_2.png",
  "img/juegos_3.png",
  "img/juegos_4.png",
  "img/juegos_5.png",
  "img/juegos_6.png",
  "img/juegos_7.png",
  "img/juegos_8.png",
  "img/juegos_9.png",
  "img/juegos_10.png",
  "img/juegos_11.png",
  "img/juegos_12.png",
  "img/juegos_13.png",
];
let juegosIndex = 0;

function openJuegosModal() {
  document.getElementById("juegosModal").style.display = "flex";
  showJuegosSlide(juegosIndex);
}

function closeJuegosModal() {
  document.getElementById("juegosModal").style.display = "none";
}

function changeJuegosSlide(n) {
  juegosIndex += n;
  if (juegosIndex >= juegosImages.length) juegosIndex = 0;
  if (juegosIndex < 0) juegosIndex = juegosImages.length - 1;
  showJuegosSlide(juegosIndex);
}

function showJuegosSlide(index) {
  const sliderImage = document.getElementById("juegosSlider");
  sliderImage.src = juegosImages[index];
}