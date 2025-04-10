document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul a");
  const sections = document.querySelectorAll(".section");

  // Nav click handling
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      sections.forEach(section => {
        section.classList.remove("active");
      });

      document.getElementById(targetId).classList.add("active");

      // Re-run progress animation if Skills or Languages section
      if (targetId === "skills" || targetId === "languages") {
        animateProgress();
      }
    });
  });

  function animateProgress() {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
      const percent = circle.getAttribute("data-percent");
      const span = circle.querySelector("span");
      let current = 0;

      const interval = setInterval(() => {
        if (current >= percent) {
          clearInterval(interval);
        } else {
          current++;
          span.innerText = `${current}%`;
          circle.style.background = `conic-gradient(#00ffd5 ${current * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;
        }
      }, 20);
    });
  }

  // Trigger initial progress for default active section
  animateProgress();
});
