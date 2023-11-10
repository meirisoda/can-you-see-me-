// Set initial glass color and background color
let currentGlassColor = "#F6B4B3";
let currentBackgroundColor = "#FFFFFF";

// Select the glass element and add event listeners
const glass = document.getElementById("glass");

// Add event listener to update position of glass based on mouse movement
const glass = document.getElementById("glass");
		document.addEventListener("mousemove", function(event) {
			glass.style.left = event.pageX - (glass.offsetWidth / 2) + "px";

// Select the sidebar and add event listener to change glass color on click
const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("color-preview")) {
    const newGlassColor = target.getAttribute("data-color");
    if (newGlassColor !== currentGlassColor) {
      currentGlassColor = newGlassColor;
      updateGlassColor();
    }
  }
});

// Update the color of the glass lens
function updateGlassColor() {
  glass.style.backgroundColor = currentGlassColor;
  const textElements = document.querySelectorAll(".text-element");
  textElements.forEach((element) => {
    const allowedColors = element.getAttribute("data-colors").split(",");
    if (allowedColors.includes(currentGlassColor)) {
      element.classList.add("text-visible");
    } else {
      element.classList.remove("text-visible");
    }
  });
}

// Update the background color with a transition
function updateBackgroundColor(color) {
  currentBackgroundColor = color;
  const body = document.querySelector("body");
  body.style.transition = "background-color 2s ease-in-out";
  body.style.backgroundColor = currentBackgroundColor;
}

// Set timeout for each available color combination
setTimeout(() => {
  const orangePreview = document.createElement("div");
  orangePreview.classList.add("color-preview");
  orangePreview.setAttribute("data-color", "#FFBC80");
  orangePreview.style.backgroundColor = "#FFBC80";
  orangePreview.style.border = "2px solid #000000";
  sidebar.appendChild(orangePreview);
}, 30000);

setTimeout(() => {
  const redPreview = document.createElement("div");
  redPreview.classList.add("color-preview");
  redPreview.setAttribute("data-color", "#EE2416");
  redPreview.style.backgroundColor = "#EE2416";
  redPreview.style.border = "2px solid #000000";
  sidebar.appendChild(redPreview);
}, 50000);

setTimeout(() => {
  const bluePreview = document.createElement("div");
  bluePreview.classList.add("color-preview");
  bluePreview.setAttribute("data-color", "#2C4BE5");
  bluePreview.style.backgroundColor = "#2C4BE5";
  bluePreview.style.border = "2px solid #000000";
  sidebar.appendChild(bluePreview);
}, 65000);

setTimeout(() => {
  const yellowPreview = document.createElement("div");
  yellowPreview.classList.add("color-preview");
  yellowPreview.setAttribute("data-color", "#FFEE57");
  yellowPreview.style.backgroundColor = "#FFEE57";
  yellowPreview.style.border = "2px solid #000000";
  sidebar.appendChild(yellowPreview);
}, 90000);

setTimeout(() => {
  const blackPreview = document.createElement("div");
  blackPreview.classList.add("color-preview");
  blackPreview.setAttribute("data-color", "#000000");
  blackPreview.style.backgroundColor = "#000000";
  blackPreview.style.border = "2px solid #000000";
  sidebar.appendChild(blackPreview);
}, 110000);

setTimeout(() => {
  const grayPreview = document.createElement("div");
  grayPreview
