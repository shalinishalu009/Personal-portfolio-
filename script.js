document.getElementById("year").textContent = new Date().getFullYear();

// Small reveal effect without a framework.
const items = document.querySelectorAll(".edu-card, .photo, .intro-text");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          {
            opacity: 0,
            transform: "translateY(18px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 650,
          easing: "cubic-bezier(.2,.8,.2,1)",
          fill: "forwards"
        }
      );

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

items.forEach((item) => observer.observe(item));
