// Get DOM elements
const keyIdentifierElement = document.getElementById("key-identifier");
const keyValueElement = document.getElementById("key-value");
const keyValueButton = document.getElementById("key-value-button");

// Handler function for keypress events
// Displays the pressed key value on the screen
const handleKeyPress = (event) => {
  let keyIdentifier = event.key;
  if (keyIdentifier === " ") {
    keyIdentifier = "Space";
  }
  keyValueElement.style.display = "block";
  keyValueElement.textContent = `Key Value: ${keyIdentifier}`;
  keyIdentifierElement.appendChild(keyValueElement);
};

// Handler function to hide the key value display
// Triggered when the reset button is clicked
const hideKeyValue = () => {
  keyValueElement.style.display = "none";
};

// Add event listeners
// Listen for any key press on the document
document.addEventListener("keydown", handleKeyPress);
// Listen for click on the reset button
keyValueButton.addEventListener("click", hideKeyValue);
