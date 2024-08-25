function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]")
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
};

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

function destroyBoxes() {
  boxesContainer.innerHTML = '';
};

destroyBtn.addEventListener('click', destroyBoxes);

