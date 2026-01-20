const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".night-mode");
const html = document.documentElement;
lightMode.addEventListener("click", () => {
  html.classList.add("dark");
  darkMode.classList.remove("hidden");
  darkMode.classList.add("block");
  lightMode.classList.remove("block");
  lightMode.classList.add("hidden");
});

darkMode.addEventListener("click", () => {
  html.classList.remove("dark");
  darkMode.classList.remove("block");
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
  lightMode.classList.add("block");
});

const unlikeImage = document.querySelector(".unlikeImage");
const likeImage = document.querySelector(".likeImage");

unlikeImage.addEventListener("click", () => {
  unlikeImage.classList.remove("block");
  unlikeImage.classList.add("hidden");
  likeImage.classList.remove("hidden");
  likeImage.classList.add("block");
});

likeImage.addEventListener("click", () => {
  unlikeImage.classList.remove("hidden");
  unlikeImage.classList.add("block");
  likeImage.classList.remove("block");
  likeImage.classList.add("hidden");
});

const commentEl = document.querySelector(".comment");
const outputEl = document.querySelector(".output");
const textareaEl = document.querySelector(".textarea");
commentEl.addEventListener("click", () => {
  outputEl.classList.toggle("hidden");
  outputEl.classList.toggle("flex");
  textareaEl.classList.toggle("hidden");
  textareaEl.classList.toggle("flex");
});

const textContent = document.querySelector(".content");
let charCount = document.querySelector("#charCount");
let wordCount = document.querySelector("#wordCount");

textContent.addEventListener("input", () => {
  charCount.textContent = textContent.value.length;

  const wordContent = textContent.value.split(/\s/).length;

  wordCount.textContent = wordContent;
});
