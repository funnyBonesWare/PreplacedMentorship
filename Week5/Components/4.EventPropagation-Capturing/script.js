const outerDiv = document.getElementById('outerDiv');
const form = document.getElementById('myForm');
const button = document.getElementById('myButton');

outerDiv.addEventListener('click', function(event) {
    alert(`Div captured!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
}, true); 

form.addEventListener('click', function(event) {
    alert(`Form captured!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
}, true);

button.addEventListener('click', function(event) {
    alert(`Button captured!\nEvent target: ${event.target.tagName}\nCurrent target: ${event.currentTarget.tagName}\nThis target: ${this.tagName}`);
}, true);