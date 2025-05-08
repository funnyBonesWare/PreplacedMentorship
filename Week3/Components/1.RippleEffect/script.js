// Function to create and animate ripple effect
function createRippleEffect(e) {
  // Create a new div element for the ripple effect
  const ripple = document.createElement("div");
  // Add the 'ripple' class which contains the animation styles
  ripple.classList.add("ripple");

  // Set the size and position
  const size = 50; // Initial size in pixels
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  // Center the ripple at the click position by offsetting it by half its size
  ripple.style.left = `${e.clientX - size / 2}px`;
  ripple.style.top = `${e.clientY - size / 2}px`;

  // Add the ripple element to the document body
  document.body.appendChild(ripple);

  // Clean up: Remove the ripple element once its animation completes
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

// Add click event listener to the entire document
document.addEventListener("click", createRippleEffect);
