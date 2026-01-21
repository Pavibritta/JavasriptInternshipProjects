const upArrow = document.querySelectorAll(".upArrow");
const downArrow = document.querySelectorAll(".downArrow");
const contentEl = document.querySelectorAll(".content");
console.log(contentEl);

upArrow.forEach((upArrow, index) => {
  upArrow.addEventListener("click", () => {
    upArrow.classList.remove("block");
    upArrow.classList.add("hidden");

    downArrow[index].classList.remove("hidden");
    downArrow[index].classList.add("block");

    contentEl[index].classList.remove("hidden");
    contentEl[index].classList.add("block");
  });
});
downArrow.forEach((downArrow, index) => {
  downArrow.addEventListener("click", () => {
    downArrow.classList.remove("block");
    downArrow.classList.add("hidden");

    upArrow[index].classList.remove("hidden");
    upArrow[index].classList.add("block");

    contentEl[index].classList.remove("block");
    contentEl[index].classList.add("hidden");
  });
});
