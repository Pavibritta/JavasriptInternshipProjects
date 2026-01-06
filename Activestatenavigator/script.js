const listContainer = document.querySelectorAll(".listContainer li");

console.log(listContainer);

listContainer.forEach((li) => {
  console.log(li);
  li.addEventListener("click", () => {
    listContainer.forEach((li) => {
      li.classList.remove("bg-white", "text-black", "p-1", "rounded");
    });
    li.classList.add("bg-white", "text-black", "p-1", "rounded");
  });
});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  const mobileList = document.querySelector(".mobileList");
  console.log("mobileList", mobileList);
  mobileList.classList.remove("hidden");
  mobileList.classList.add("block");
  menuBtn.classList.remove("block");
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
});

closeBtn.addEventListener("click", () => {
  const mobileList = document.querySelector(".mobileList");
  console.log("mobileList", mobileList);
  mobileList.classList.remove("block");
  mobileList.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  menuBtn.classList.add("block");
  closeBtn.classList.remove("block");
  closeBtn.classList.add("hidden");
});
