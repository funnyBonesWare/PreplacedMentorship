/**
 * Key Identifier with Speech Synthesis
 * This script handles keyboard events and provides audio feedback by speaking the pressed keys
 */

// Get references to DOM elements that we'll need to interact with
const keyIdentifierElement = document.getElementById("key-identifier");
const keyValueElement = document.getElementById("key-value");
const keyValueButton = document.getElementById("key-value-button");

// Initialize the Web Speech API's speech synthesis interface
// This is used to convert text to speech
const speechSynthesis = window.speechSynthesis;

/**
 * Speaks the provided key using text-to-speech
 * @param {string} key - The key to be spoken
 */
const speakKey = (key) => {
  // Create a new utterance with the key as the text to speak
  const utterance = new SpeechSynthesisUtterance(key);

  // Configure speech properties
  utterance.rate = 1.0; // Speech speed (1.0 is normal speed)
  utterance.pitch = 1.0; // Voice pitch (1.0 is normal pitch)
  utterance.volume = 1.0; // Speech volume (1.0 is maximum)

  // Trigger the speech synthesis
  speechSynthesis.speak(utterance);
};

/**
 * Handles keyboard events
 * Displays the pressed key and speaks it out loud
 * @param {KeyboardEvent} event - The keyboard event object
 */
const handleKeyPress = (event) => {
  // Get the key that was pressed
  let keyIdentifier = event.key;

  // Special handling for the space key since it's invisible
  if (keyIdentifier === " ") {
    keyIdentifier = "Space";
  }

  // Update the display to show the pressed key
  keyValueElement.style.display = "block";
  keyValueElement.textContent = `Key Value: ${keyIdentifier}`;
  keyIdentifierElement.appendChild(keyValueElement);

  // Speak the pressed key using text-to-speech
  speakKey(keyIdentifier);
};

/**
 * Resets the key value display
 * Called when the reset button is clicked
 */
const hideKeyValue = () => {
  keyValueElement.style.display = "none";
};

// Set up event listeners
document.addEventListener("keydown", handleKeyPress); // Listen for keyboard events
keyValueButton.addEventListener("click", hideKeyValue); // Listen for reset button clicks
