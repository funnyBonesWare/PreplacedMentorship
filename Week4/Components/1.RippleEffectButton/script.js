// Function to create and animate ripple effect
function createRippleEffect(e) {
  const button = e.currentTarget;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;

  // Calculate position relative to the button
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

// Add click event listener to the button
const button = document.querySelector(".ripple-button");
button.addEventListener("click", createRippleEffect);
