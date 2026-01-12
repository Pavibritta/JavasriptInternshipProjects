const button = document.getElementById("submit-btn");
const regex = /^[^\d]*$/;
console.log(regex);

console.log(button);
button.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");
  const inputContainer = document.querySelector(".input-container");
  console.log(inputContainer);

  if (inputName.value === "") {
    error.innerText = "please enter your name !";
  } else if (!regex.test(inputName.value)) {
    error.innerText = "please enter valid name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mx-auto text-center bg-green-800 text-white p-2 mt-50`;

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.prepend(outputDiv);
    error.innerText = "";
    inputContainer.style.display = "none";
  }
});
