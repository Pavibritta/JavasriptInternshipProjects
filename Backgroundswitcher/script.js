// const button = document.getElementById("submit-btn");
const changeBtn = document.getElementById("change-btn");
const redBtn = document.getElementById("red-btn");
const greenBtn = document.getElementById("green-btn");
const yellowBtn = document.getElementById("yellow-btn");
const blackBtn = document.getElementById("black-btn");
const blueBtn = document.getElementById("blue-btn");

changeBtn.addEventListener("click", () => {
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "black",
    "gray",
    "pink",
    "skyblue",
    "maroon",
  ];
  console.log(Math.floor(Math.random() * colors.length));
  const randomIndex = Math.floor(Math.random() * colors.length);
  randomColor = colors[randomIndex];
  console.log(randomColor);

  const body = document.querySelector("body");
  body.style.backgroundColor = randomColor;
});

greenBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";
});

redBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "red";
});

yellowBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
});

blackBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "black";
});

blueBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "blue";
});
