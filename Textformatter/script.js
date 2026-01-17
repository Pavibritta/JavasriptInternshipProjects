const textInput = document.querySelector(".text-input");
const submitBtn = document.querySelector(".submit-btn");
console.log(textInput.value);
const inputContainer = document.querySelector(".input-container");
const smallEl = document.querySelector(".errormsg");

submitBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    smallEl.textContent = "Please enter text!";
    return;
  }
  inputContainer.classList.remove("flex");
  inputContainer.classList.add("hidden");
  console.log(inputContainer);
  const bodyEl = document.querySelector("body");
  console.log(bodyEl);
  const ouputDiv = document.createElement("div");
  ouputDiv.className =
    "bg-gray-100 flex flex-col justify-center items-center p-10 w-full max-w-xl mx-auto rounded shadow gap-3 mt-10 animate-fade-in-up";
  const outputContent = document.createElement("div");
  outputContent.className =
    "bg-gray-500 flex justify-center items-center p-10 w-full max-w-md mx-auto rounded shadow gap-3 mt-10 text-white animate-scale-in ";
  outputContent.textContent = textInput.value;

  const buttonDiv = document.createElement("div");
  buttonDiv.className =
    " flex justify-center items-center p-5 w-full max-w-md mx-auto rounded shadow gap-3 mt-5";

  const upperButton = document.createElement("button");
  upperButton.className =
    "bg-blue-300  text-white text-lg p-3 font-bold rounded cursor-pointer transition hover:scale-110 active:scale-95";
  upperButton.innerHTML = `<i class="fa-solid fa-arrow-up-a-z"></i>`;

  const lowerButton = document.createElement("button");
  lowerButton.className =
    "bg-blue-300  text-white text-lg p-3 font-bold rounded cursor-pointer transition hover:scale-110 active:scale-95";
  lowerButton.innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
  const clearButton = document.createElement("button");
  clearButton.className =
    "bg-blue-300 text-white text-lg p-3 font-bold rounded cursor-pointer transition hover:scale-110 sctive:scale-95";
  clearButton.innerHTML = `<i class="fa-solid fa-eraser"></i>`;

  buttonDiv.append(upperButton, lowerButton, clearButton);
  ouputDiv.append(outputContent, buttonDiv);

  bodyEl.append(ouputDiv);

  upperButton.addEventListener("click", () => {
    outputContent.textContent = textInput.value.toUpperCase();
  });

  lowerButton.addEventListener("click", () => {
    outputContent.textContent = textInput.value.toLowerCase();
  });

  clearButton.addEventListener("click", () => {
    outputContent.textContent = "";
    ouputDiv.classList.remove("flex");
    ouputDiv.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    inputContainer.classList.add("flex");
    textInput.value = "";
    smallEl.textContent = "";
  });
});
