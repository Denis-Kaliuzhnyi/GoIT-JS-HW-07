function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector(".input");
const bxContainer = document.getElementById("boxes");

function createBoxes(amount) {
  bxContainer.innerHTML = "";

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    bxContainer.appendChild(box);
    size += 10;
  }
}
function destroyBoxes() {
  bxContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const number = parseInt(inputEl.value);
  if (number >= 1 && number <= 100) {
    createBoxes(number);
    inputEl.value = "";
  } else {
    alert ("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

