const buttonContainer = document.getElementById('buttonContainer');
const output = document.getElementById('output');

buttonContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a button
    if (event.target.classList.contains('action-btn')) {
        const buttonText = event.target.textContent;
        
        // Display information about the clicked button
        output.innerHTML = `
            <p><strong>Event Delegation in Action:</strong></p>
            <p>Button clicked: ${buttonText}</p>
            <p>Event target: ${event.target.tagName}</p>
            <p>Current target: ${event.currentTarget.tagName}</p>
        `;

        console.log(`${buttonText} button clicked`);
    }
}); 