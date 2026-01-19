const cartBtn = document.querySelectorAll(".cart-btn");
const removeBtn = document.querySelectorAll(".remove-btn");
let cartCount = document.querySelector(".cart-count");
let count = 0;
const body = document.querySelector("body");
console.log(cartBtn);
cartBtn.forEach((data) => {
  data.addEventListener("click", () => {
    const alertMsg = document.createElement("div");
    alertMsg.className =
      "bg-green-600 text-white font-bold absolute right-50 top-1 p-2";
    alertMsg.textContent = "Product added to cart";
    body.append(alertMsg);
    count++;
    cartCount.textContent = count;
    if (count > 0) {
      cartCount.classList.remove("bg-red-700");
      cartCount.classList.add("bg-green-700");
    } else {
      cartCount.classList.remove("bg-green-700");
      cartCount.classList.add("bg-red-700");
    }
    setTimeout(() => {
      alertMsg.remove();
    }, 1000);
  });
});

removeBtn.forEach((data) => {
  data.addEventListener("click", () => {
    const alertMsg = document.createElement("div");
    alertMsg.className =
      "bg-red-600 text-white font-bold absolute right-50 top-1 p-2";
    alertMsg.textContent = "Product removed from cart";
    body.append(alertMsg);
    count--;
    cartCount.textContent = count;
    if (count > 0) {
      cartCount.classList.remove("bg-red-700");
      cartCount.classList.add("bg-green-700");
    } else {
      cartCount.classList.remove("bg-green-700");
      cartCount.classList.add("bg-red-700");
    }
    setTimeout(() => {
      alertMsg.remove();
    }, 1000);
  });
});
