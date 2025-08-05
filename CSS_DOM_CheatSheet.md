# CSS & DOM Cheat Sheet

_Comprehensive reference for all CSS and DOM concepts used in this codebase_

---

## 📋 Table of Contents

1. [CSS Layout & Positioning](#css-layout--positioning)
2. [CSS Flexbox](#css-flexbox)
3. [CSS Grid](#css-grid)
4. [CSS Box Model](#css-box-model)
5. [CSS Units & Values](#css-units--values)
6. [CSS Animations & Transitions](#css-animations--transitions)
7. [CSS Selectors](#css-selectors)
8. [DOM Selection & Manipulation](#dom-selection--manipulation)
9. [Event Handling](#event-handling)
10. [DOM Methods & Properties](#dom-methods--properties)
11. [Event Propagation](#event-propagation)
12. [CSS Best Practices](#css-best-practices)

---

## 🎯 CSS Layout & Positioning

### Position Properties

```css
position: static; /* Default positioning */
position: relative; /* Positioned relative to normal position */
position: absolute; /* Positioned relative to nearest positioned ancestor */
position: fixed; /* Positioned relative to viewport */
position: sticky; /* Hybrid of relative and fixed */
```

### Positioning Examples from Codebase

```css
/* Ripple effect positioning */
.ripple {
  position: absolute;
  left: 50px;
  top: 30px;
}

/* Water glass container */
.glass {
  position: relative;
  overflow: hidden;
}

/* FAQ answer positioning */
.Faq-Answer {
  position: relative;
  max-height: 0;
  overflow: hidden;
}
```

### Z-Index & Stacking Context

```css
z-index: 1; /* Higher values appear on top */
z-index: -1; /* Lower values appear behind */
z-index: auto; /* Default stacking order */
```

---

## 🔄 CSS Flexbox

### Container Properties

```css
display: flex; /* Enable flexbox */
flex-direction: row; /* Main axis direction */
flex-direction: column; /* Cross axis direction */
flex-direction: row-reverse; /* Reverse main axis */
flex-direction: column-reverse; /* Reverse cross axis */

justify-content: flex-start; /* Align along main axis */
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

align-items: stretch; /* Align along cross axis */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;

flex-wrap: nowrap; /* Wrap behavior */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

gap: 10px; /* Space between items */
gap: 10px 20px; /* Row gap, column gap */
```

### Item Properties

```css
flex-grow: 0; /* Growth factor */
flex-shrink: 1; /* Shrink factor */
flex-basis: auto; /* Initial main size */
flex: 1; /* Shorthand: grow shrink basis */
flex: 1 1 auto; /* Equivalent to above */

align-self: auto; /* Override container alignment */
order: 0; /* Visual order */
```

### Common Flexbox Patterns from Codebase

```css
/* Center content both axes */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Vertical centering */
.vertical-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Space between items */
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## 📐 CSS Grid

### Container Properties

```css
display: grid; /* Enable CSS Grid */
grid-template-columns: 1fr 1fr; /* Column sizes */
grid-template-rows: auto 1fr; /* Row sizes */
grid-template-areas: "header header" "sidebar main"; /* Named areas */

grid-gap: 10px; /* Gap between grid items */
grid-column-gap: 10px; /* Column gap only */
grid-row-gap: 10px; /* Row gap only */

justify-items: start; /* Align items horizontally */
justify-items: center;
justify-items: end;
justify-items: stretch;

align-items: start; /* Align items vertically */
align-items: center;
align-items: end;
align-items: stretch;
```

---

## 📦 CSS Box Model

### Box Sizing

```css
box-sizing: content-box; /* Default: width/height = content only */
box-sizing: border-box; /* width/height includes padding & border */
```

### Margin, Padding, Border

```css
margin: 10px; /* All sides */
margin: 10px 20px; /* Vertical, horizontal */
margin: 10px 20px 15px 25px; /* Top, right, bottom, left */

padding: 10px; /* All sides */
padding: 10px 20px; /* Vertical, horizontal */
padding: 10px 20px 15px 25px; /* Top, right, bottom, left */

border: 1px solid #000; /* Width, style, color */
border-radius: 4px; /* Corner radius */
border-radius: 50%; /* Perfect circle */
```

### Examples from Codebase

```css
/* Reset box model */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Button styling */
.ripple-button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
}
```

---

## 📏 CSS Units & Values

### Absolute Units

```css
width: 100px; /* Pixels */
width: 1in; /* Inches */
width: 2.54cm; /* Centimeters */
width: 25.4mm; /* Millimeters */
width: 6pt; /* Points */
width: 0.5pc; /* Picas */
```

### Relative Units

```css
width: 50%; /* Percentage of parent */
width: 100vw; /* Viewport width */
width: 100vh; /* Viewport height */
width: 100dvh; /* Dynamic viewport height (mobile-friendly) */
width: 1em; /* Relative to font-size */
width: 1rem; /* Relative to root font-size */
width: 1ch; /* Width of "0" character */
width: 1ex; /* Height of "x" character */
```

### Examples from Codebase

```css
/* Full viewport */
body {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
}

/* Responsive sizing */
.outerBox {
  width: 50%;
  height: 50%;
}

/* Dynamic viewport for mobile */
.parentEnclosureDiv {
  height: 100dvh;
}
```

---

## 🎬 CSS Animations & Transitions

### Transitions

```css
transition: all 0.3s ease; /* Property, duration, timing-function */
transition: background-color 0.3s ease;
transition: transform 0.3s ease, opacity 0.3s ease;

/* Timing functions */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animations

```css
@keyframes rippleEffect {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  animation: rippleEffect 0.6s linear;
}
```

### Transform Properties

```css
transform: scale(1.02); /* Scale element */
transform: rotate(45deg); /* Rotate element */
transform: translate(-50%, -50%); /* Move element */
transform: translateX(10px); /* Move horizontally */
transform: translateY(10px); /* Move vertically */
transform: skew(10deg); /* Skew element */
```

### Examples from Codebase

```css
/* FAQ animations */
.Faq-Item.active {
  transform: scale(1.02);
}

.Faq-Item.active .Toggle-Btn {
  transform: rotate(45deg);
}

/* Water glass transitions */
.remained {
  transition: height 0.3s ease;
}

.filled {
  transition: height 0.3s ease;
}
```

---

## 🎯 CSS Selectors

### Basic Selectors

```css
* {
} /* Universal selector */
div {
} /* Element selector */
.class-name {
} /* Class selector */
#id-name {
} /* ID selector */
[attribute] {
} /* Attribute selector */
[attribute="value"] {
} /* Attribute value selector */
```

### Combinators

```css
div p {
} /* Descendant selector */
div > p {
} /* Child selector */
div + p {
} /* Adjacent sibling */
div ~ p {
} /* General sibling */
```

### Pseudo-classes

```css
:hover {
} /* Mouse over */
:focus {
} /* Focused element */
:active {
} /* Active/clicked */
:first-child {
} /* First child */
:last-child {
} /* Last child */
:nth-child(n) {
} /* Nth child */
:not(.class) {
} /* Not selector */
```

### Pseudo-elements

```css
::before {
} /* Before content */
::after {
} /* After content */
::first-line {
} /* First line */
::first-letter {
} /* First letter */
```

### Examples from Codebase

```css
/* Button hover effects */
.ripple-button:hover {
  background-color: #1976d2;
}

/* Active FAQ styling */
.Faq-Item.active .Faq-Answer {
  max-height: 200px;
}

/* Filled glass styling */
.glass-small.full {
  background-color: deepskyblue;
  color: white;
}
```

---

## 🔍 DOM Selection & Manipulation

### Element Selection

```javascript
// Single element
const element = document.querySelector(".class-name");
const element = document.getElementById("id-name");

// Multiple elements
const elements = document.querySelectorAll(".class-name");
const elements = document.getElementsByClassName("class-name");
const elements = document.getElementsByTagName("div");

// Specific selectors
const button = document.querySelector(".ripple-button");
const faqItems = document.querySelectorAll(".Faq-Item");
const smallGlasses = document.querySelectorAll(".glass-small");
```

### Element Creation & Manipulation

```javascript
// Create element
const div = document.createElement("div");
const ripple = document.createElement("div");

// Add classes
element.classList.add("class-name");
element.classList.remove("class-name");
element.classList.toggle("class-name");
element.classList.contains("class-name");

// Set attributes
element.setAttribute("data-id", "value");
element.getAttribute("data-id");
element.removeAttribute("data-id");

// Set styles
element.style.width = "100px";
element.style.backgroundColor = "blue";
element.style.cssText = "width: 100px; height: 100px;";

// Add/remove elements
parent.appendChild(child);
parent.insertBefore(newChild, referenceChild);
parent.removeChild(child);
child.remove(); // Modern method
```

### Examples from Codebase

```javascript
// Ripple effect creation
const ripple = document.createElement("div");
ripple.classList.add("ripple");
ripple.style.width = `${size}px`;
ripple.style.height = `${size}px`;
button.appendChild(ripple);

// FAQ toggle
const question = item.querySelector(".Faq-Question");
question.addEventListener("click", () => {
  item.classList.toggle("active");
});
```

---

## 🎪 Event Handling

### Event Listeners

```javascript
// Add event listener
element.addEventListener("click", function (event) {
  // Event handler code
});

// Remove event listener
element.removeEventListener("click", handlerFunction);

// Event listener with options
element.addEventListener("click", handler, {
  capture: true, // Event capturing phase
  once: true, // Remove after first execution
  passive: true, // Promise not to call preventDefault()
});
```

### Common Events

```javascript
// Mouse events
"click"; // Click
"dblclick"; // Double click
"mousedown"; // Mouse button pressed
"mouseup"; // Mouse button released
"mousemove"; // Mouse movement
"mouseenter"; // Mouse enters element
"mouseleave"; // Mouse leaves element
"mouseover"; // Mouse over element
"mouseout"; // Mouse out of element

// Keyboard events
"keydown"; // Key pressed
"keyup"; // Key released
"keypress"; // Key pressed (character)

// Form events
"submit"; // Form submission
"change"; // Input value changed
"input"; // Input value changing
"focus"; // Element focused
"blur"; // Element lost focus

// Document events
"DOMContentLoaded"; // DOM fully loaded
"load"; // Page fully loaded
"resize"; // Window resized
"scroll"; // Element scrolled

// Animation events
"animationend"; // CSS animation ended
"transitionend"; // CSS transition ended
```

### Examples from Codebase

```javascript
// DOM ready event
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".Faq-Item");
  // Initialize FAQ functionality
});

// Click event with event delegation
buttonContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("action-btn")) {
    // Handle button click
  }
});

// Animation end event
ripple.addEventListener("animationend", () => {
  ripple.remove();
});

// Keyboard events
document.addEventListener("keydown", handleKeyPress);
```

---

## 🛠️ DOM Methods & Properties

### Element Properties

```javascript
// Content
element.textContent = "Text content";
element.innerHTML = "<span>HTML content</span>";
element.innerText = "Visible text";

// Attributes
element.id = "new-id";
element.className = "class1 class2";
element.href = "https://example.com";
element.src = "image.jpg";

// Dimensions & Position
const rect = element.getBoundingClientRect();
rect.width, rect.height, rect.left, rect.top;
rect.right, rect.bottom, rect.x, rect.y;

// Parent/Child relationships
element.parentElement;
element.parentNode;
element.children;
element.childNodes;
element.firstChild;
element.lastChild;
element.nextSibling;
element.previousSibling;
```

### Element Methods

```javascript
// Query methods
element.querySelector(".class");
element.querySelectorAll(".class");
element.matches(".selector");
element.closest(".selector");

// Position methods
element.getBoundingClientRect();
element.offsetTop;
element.offsetLeft;
element.offsetWidth;
element.offsetHeight;
element.clientWidth;
element.clientHeight;
element.scrollTop;
element.scrollLeft;

// Focus methods
element.focus();
element.blur();
element.click();
```

### Examples from Codebase

```javascript
// Get button dimensions for ripple
const rect = button.getBoundingClientRect();
const size = Math.max(rect.width, rect.height);

// Calculate click position
const x = e.clientX - rect.left - size / 2;
const y = e.clientY - rect.top - size / 2;

// Check element classes
if (event.target.classList.contains("action-btn")) {
  // Handle action button
}
```

---

## 🌊 Event Propagation

### Event Phases

```javascript
// Event capturing (Phase 1)
element.addEventListener("click", handler, { capture: true });

// Event bubbling (Phase 3) - Default
element.addEventListener("click", handler);

// Event target (Phase 2)
// Event is at the target element
```

### Event Object Properties

```javascript
event.target; // Element that triggered the event
event.currentTarget; // Element that the listener is attached to
event.eventPhase; // 1=capturing, 2=target, 3=bubbling
event.bubbles; // Whether event bubbles
event.cancelable; // Whether event can be cancelled
```

### Event Control Methods

```javascript
event.preventDefault(); // Prevent default behavior
event.stopPropagation(); // Stop event bubbling/capturing
event.stopImmediatePropagation(); // Stop all handlers
```

### Examples from Codebase

```javascript
// Event delegation (bubbling)
buttonContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("action-btn")) {
    const buttonText = event.target.textContent;
    console.log(`${buttonText} button clicked`);
  }
});

// Event capturing example
outerDiv.addEventListener(
  "click",
  function (event) {
    console.log("Outer div clicked (capturing)");
  },
  { capture: true }
);

// Event bubbling example
outerDiv.addEventListener("click", function (event) {
  console.log("Outer div clicked (bubbling)");
});
```

---

## 💡 CSS Best Practices

### Reset & Normalize

```css
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Modern box model */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Responsive Design

```css
/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
```

### Performance Tips

```css
/* Use transform instead of position for animations */
.element {
  transform: translateX(100px); /* GPU accelerated */
}

/* Avoid layout thrashing */
.element {
  will-change: transform; /* Hint to browser */
}

/* Use CSS variables for maintainability */
:root {
  --primary-color: #2196f3;
  --spacing-unit: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
}
```

### Accessibility

```css
/* Focus indicators */
.button:focus {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
}
```

---

## 📚 Common Patterns from Codebase

### Centering Elements

```css
/* Flexbox centering */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Absolute positioning centering */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Modal/Overlay

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
```

### Responsive Images

```css
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Card Layout

```css
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
```

---

## 🎯 Quick Reference

### CSS Flexbox Cheat Sheet

```css
/* Container */
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | flex-end | space-between | space-around;
align-items: stretch | flex-start | center | flex-end | baseline;
flex-wrap: nowrap | wrap | wrap-reverse;
gap: 10px;

/* Items */
flex: 1; /* grow: 1, shrink: 1, basis: 0% */
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
align-self: auto | flex-start | center | flex-end | stretch;
order: 0;
```

### DOM Event Cheat Sheet

```javascript
// Add event listener
element.addEventListener("event", handler, options);

// Remove event listener
element.removeEventListener("event", handler);

// Event delegation
parent.addEventListener("click", (e) => {
  if (e.target.matches(".child-selector")) {
    // Handle child element click
  }
});

// Prevent default
e.preventDefault();

// Stop propagation
e.stopPropagation();
```

### CSS Units Quick Reference

```css
/* Viewport units */
100vw, 100vh, 100dvh, 100dvw

/* Relative units */
%, em, rem, ch, ex

/* Absolute units */
px, pt, pc, in, cm, mm
```

---

_This cheat sheet covers all CSS and DOM concepts used throughout your codebase. Use it as a quick reference for your development work!_
