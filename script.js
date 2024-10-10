document.addEventListener("DOMContentLoaded", function() {
  // Horizontal bar animation (existing logic)
  const horizontalBars = document.querySelectorAll('.horizontal-bar');

  // Intersection observer for horizontal bars
  const horizontalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger horizontal bar animations
        horizontalBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate');
          }, index * 200); // Staggering effect for horizontal bars
        });
        // Stop observing after the animation is triggered
        horizontalObserver.disconnect();
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is in view
  });

  // Start observing the section with horizontal bars
  const horizontalTarget = document.querySelector('.horizontal-bars-section');
  if (horizontalTarget) {
    horizontalObserver.observe(horizontalTarget);
  }

  // Vertical bar animation (new logic)
  const barContainers = document.querySelectorAll('.bar-container');

  // Intersection observer for vertical bars (.bar-container elements)
  const barContainerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger vertical bar animations
        const leftBars = entry.target.querySelectorAll('.bar-left');
        const rightBars = entry.target.querySelectorAll('.bar-right');

        // Stagger animations for left bars
        leftBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate');
          }, index * 200); // Staggering effect for left bars
        });

        // Stagger animations for right bars
        rightBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate');
          }, index * 200); // Staggering effect for right bars
        });

        // Stop observing after the animation is triggered
        barContainerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the .bar-container is in view

  // Start observing all bar-container elements
  barContainers.forEach(container => {
    barContainerObserver.observe(container);
  });
});

// Hide the mobile sidebar when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".links-container a");
  const sidebarCheckbox = document.getElementById("sidebar-active");

  links.forEach(link => {
      link.addEventListener("click", () => {
          // Uncheck the checkbox to close the sidebar
          sidebarCheckbox.checked = false;
      });
  });
});

