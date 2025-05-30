const outerDiv = document.getElementById('outerDiv');
const form = document.getElementById('myForm');
const button = document.getElementById('myButton');

outerDiv.addEventListener('click', function(event) {
    alert(`Div clicked!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
});

form.addEventListener('click', function(event) {
    alert(`Form clicked!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
});

button.addEventListener('click', function(event) {
    alert(`Button clicked!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
}); 