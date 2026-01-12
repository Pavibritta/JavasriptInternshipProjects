const button = document.getElementById("submit-btn");

console.log(button);
button.addEventListener("click", () => {
  const inputName = document.getElementById("name-input");
  const error = document.getElementById("error");
  const body = document.querySelector("body");

  if (inputName.value === "") {
    error.innerText = "enter your name !";
  } else {
    const outputDiv = document.createElement("div");

    outputDiv.className = ` shadow rounded w-lg mt-10 mx-auto text-center bg-green-500 text-white p-2`;

    outputDiv.textContent = `Hello ${inputName.value.toUpperCase()}, Welcome to CyberDude!`;
    body.append(outputDiv);
    error.innerText = "";
  }
});
