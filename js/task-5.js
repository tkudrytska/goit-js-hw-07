function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector("body");
const widget = body.querySelector(".widget");
const button = widget.querySelector(".change-color");
const text = widget.querySelector(".color");
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
});
