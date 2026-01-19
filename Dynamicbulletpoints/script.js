const productName = document.querySelector("#product-name");
const productImage = document.querySelector("#productImage");
const productPrice = document.querySelector("#productPrice");
const submitBtn = document.querySelector("#submit-btn");

console.log(productImage);
let submittedData = [];

const validateForm = () => {
  let isValid = true;

  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  if (productName.value == "") {
    document.getElementById("nameError").textContent =
      "Product Name is required";
    isValid = false;
  }
  if (productImage.value == "") {
    document.getElementById("imageError").textContent = "Image is required";
    isValid = false;
  }

  if (productPrice.value == "") {
    document.getElementById("priceError").textContent = "Price is required";
    isValid = false;
  }
  return isValid;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const userDetails = {
    productName: productName.value,
    productImage: productImage.files[0], // ✅ FIX
    productPrice: productPrice.value, // ✅ FIX
  };

  submittedData.push(userDetails);
  displayUser();

  productName.value = "";
  productImage.value = "";
  productPrice.value = "";
});

const displayUser = () => {
  const outputDiv = document.querySelector("#output-div");
  outputDiv.innerHTML = "";

  submittedData.forEach((data) => {
    const productDiv = document.createElement("div");
    productDiv.className =
      "border border-gray-200 rounded shadow-md hover:shadow-lg transition-all p-4 mb-3 w-64";

    const imageURL = URL.createObjectURL(data.productImage); // ✅ FIX

    productDiv.innerHTML = `
  <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    
    <!-- Product Image -->
    <div class="overflow-hidden">
      <img 
        src="${imageURL}" 
        class="w-full h-44 object-cover transform hover:scale-105 transition duration-300"
      />
    </div>

    <!-- Product Details -->
    <div class="p-4 space-y-3">
      <h3 class="text-lg font-semibold text-gray-800 text-center">
        ${data.productName}
      </h3>

      <div class="flex items-center justify-center">
        <p class="text-xl font-bold text-green-600">
          ₹ ${data.productPrice}
        </p>

        
      </div>
    </div>

  </div>
`;

    outputDiv.appendChild(productDiv); // ✅ FIX
  });
};
