/**
 * Creates and animates a ripple effect when a button is clicked
 * @param {MouseEvent} e - The click event object containing mouse coordinates
 */
function createRippleEffect(e) {
  // Get the button element that was clicked
  const button = e.currentTarget;

  // Create a new div element for the ripple effect
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  // Get the button's dimensions and position
  const rect = button.getBoundingClientRect();
  // Use the larger dimension to ensure the ripple covers the entire button
  const size = Math.max(rect.width, rect.height);

  // Set the ripple's size to be a square
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;

  // Calculate the ripple's position to be centered on the click point
  // Subtract half the size to center the ripple on the click coordinates
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  // Position the ripple element
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Add the ripple element to the button
  button.appendChild(ripple);

  // Remove the ripple element after the animation completes
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

// Initialize the ripple effect on the button
const button = document.querySelector(".ripple-button");
button.addEventListener("click", createRippleEffect);
