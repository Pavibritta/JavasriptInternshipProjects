const passwordEl = document.querySelector("#password");
const eyeopenEl = document.querySelector("#eyeOpen");
const eyecloseEl = document.querySelector("#eyeClose");
const submitBtn = document.querySelector(".submit-btn");
const nameEl = document.querySelector("#name");

eyeopenEl.addEventListener("click", () => {
  passwordEl.type = "password";
  eyecloseEl.classList.remove("hidden");
  eyecloseEl.classList.add("block");
  eyeopenEl.classList.add("hidden");
});

eyecloseEl.addEventListener("click", () => {
  passwordEl.type = "text";
  eyeopenEl.classList.remove("hidden");
  eyeopenEl.classList.add("block");
  eyecloseEl.classList.add("hidden");
});

submitBtn.addEventListener("click", () => {
  if (!validateForm()) {
    return;
  }

  alert("Login successfully");

  nameEl.value = "";
  passwordEl.value = "";
});

const validateForm = () => {
  let isValid = true;

  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  if (nameEl.value == "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  if (passwordEl.value == "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    isValid = false;
  }
  return isValid;
};
