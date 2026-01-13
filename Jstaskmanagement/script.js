const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  const mobileList = document.querySelector(".mobileList");
  console.log(mobileList);
  mobileList.classList.remove("hidden");
  mobileList.classList.add("block");
  menuBtn.classList.remove("block");
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
});
closeBtn.addEventListener("click", () => {
  const mobileList = document.querySelector(".mobileList");
  console.log(mobileList);
  mobileList.classList.remove("block");
  mobileList.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  menuBtn.classList.add("block");
  closeBtn.classList.remove("block");
  closeBtn.classList.add("hidden");
});
