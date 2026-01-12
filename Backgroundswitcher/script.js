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

  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = randomColor;
    outputDiv.style.color = "white";
    if (randomColor == "yellow") {
      outputDiv.style.color = "black";
    } else if (randomColor == "pink") {
      outputDiv.style.color = "black";
    }

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});

greenBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.color = "white";

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});

redBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = "red";
    outputDiv.style.color = "white";

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});

yellowBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = "yellow";
    outputDiv.style.color = "black";

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});

blackBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = "black";
    outputDiv.style.color = "white";

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});

blueBtn.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center p-2`;
    outputDiv.style.backgroundColor = "blue";
    outputDiv.style.color = "white";

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});
