const menuBtn = document.getElementById("menu-btn");
const listContainer = document.querySelectorAll(".list-Container li");

menuBtn.addEventListener("click", () => {
  const mobileNav = document.querySelector(".mobileNav");

  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
});

console.log(listContainer);
listContainer.forEach((li) => {
  // console.log(li);
  li.addEventListener("click", () => {
    listContainer.forEach((li) => {
      li.classList.remove(
        "bg-gradient-to-br",
        "from-sky-500",
        "via-emerald-500",
        "to-lime-600",
      );
    });
    li.classList.add(
      "bg-gradient-to-br",
      "from-sky-500",
      "via-emerald-500",
      "to-lime-600",
    );
  });
});

const submitBtn = document.querySelector(".submit-btn");
const userName = document.querySelector(".user-Name");
const projectName = document.querySelector(".project-name");
const userEmail = document.querySelector(".user-email");
const userPhone = document.querySelector(".user-phone");
const typeofPlan = document.querySelector(".typeof-plan");
const typeofService = document.querySelector(".typeof-service");
const formDiv = document.querySelector(".formdiv");
const priceDetails = [
  { service: "Static Website", type: "Basic", price: "5000" },
  { service: "Dynamic Website", type: "Standard", price: "12000" },
  { service: "Dynamic Website", type: "Advanced", price: "40000" },
  { service: "E-commerce Website", type: "Basic", price: "40000" },
  { service: "E-commerce Website", type: "Standard", price: "50000" },
  { service: "E-commerce Website", type: "Advanced", price: "80000" },
  { service: "Mobile App Development", type: "Basic", price: "50000" },
  { service: "Mobile App Development", type: "Standard", price: "90000" },
  { service: "Mobile App Development", type: "Advanced", price: "100000" },
  { service: "Web App Development", type: "Basic", price: "20000" },
  { service: "Web App Development", type: "Standard", price: "50000" },
  { service: "Web App Development", type: "Advanced", price: "80000" },
];

let submittedData = [];
submitBtn.addEventListener("click", () => {
  const formDiv = document.querySelector(".formdiv");
  console.log(formDiv);
  if (!validateForm()) {
    return;
  }
  let price;

  priceDetails.forEach((data) => {
    if (
      data.service.toLowerCase().trim() ===
        typeofService.value.toLowerCase().trim() &&
      data.type.toLowerCase().trim() === typeofPlan.value.toLowerCase().trim()
    ) {
      price = data.price;
    }
  });

  // console.log(result);

  newData = {
    name: userName.value,
    projectName: projectName.value,
    email: userEmail.value,
    phone: userPhone.value,
    plan: typeofPlan.value,
    service: typeofService.value,
    price: price,
  };
  submittedData.push(newData);
  console.log(submittedData);
  displayEstimation(submittedData);
  formDiv.style.display = "none";
  userName.value = "";
  userEmail.value = "";
  projectName.value = "";
  userPhone.value = "";
  typeofPlan.value = "";
  typeofService.value = "";
});

const validateForm = () => {
  let isValid = true;
  const errorEl = document.querySelectorAll(".error");
  errorEl.forEach((el) => (el.textContent = ""));

  if (userName.value == "" || userName.value.length <= 3) {
    const nameError = document.querySelector(".nameError");
    nameError.textContent = "Enter your valid name";
    isValid = false;
  }
  if (userEmail.value == "") {
    document.querySelector(".emailError").textContent = "Enter Your Email";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    document.querySelector(".emailError").textContent =
      "Enter Your Valid Email";
    isValid = false;
  }
  if (projectName.value == "") {
    document.querySelector(".projectError").textContent =
      "Enter Your Project Name";
    isValid = false;
  }
  if (userPhone.value == "") {
    document.querySelector(".phoneError").textContent = "Enter Your phone Name";
    isValid = false;
  }

  if (typeofPlan.value == "") {
    document.querySelector(".planError").textContent = "Select Your Plan";
    isValid = false;
  }

  if (typeofService.value == "") {
    document.querySelector(".serviceError").textContent = "Select Your Service";
    isValid = false;
  }

  return isValid;
};

const displayEstimation = (submittedData) => {
  const estimationDiv = document.querySelector(".estimationDiv");
  estimationDiv.innerHTML = "";

  submittedData.forEach((data) => {
    const estimationCard = document.createElement("div");

    estimationCard.innerHTML += `<div>
        <div class="flex justify-end px-70">
          <button
            class="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-3 rounded text-white text-sm cursor-pointer  font-bold back-btn"
          >
            Back
          </button>
        </div>

        <div
          class="max-w-3xl w-full mx-auto mt-5 bg-white text-black p-10 overflow-x-auto estimationDiv"
        >
          <h2 class="text-xl font-bold mb-3">Client & Project Details</h2>
          <table class="border border-black min-w-full mb-2">
            <thead class="px-5 py-2 border">
              <tr class="text-center px-3 py-2 font-bold">
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Project</td>
              </tr>
            </thead>
            <tbody class="px-3 py-2">
              <tr class="text-center px-3 py-2">
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.email}</td>
                <td>${data.projectName}</td>
              </tr>
            </tbody>
          </table>
          <h2 class="text-xl font-bold mt-8 mb-3">
            Project Estimation Details
          </h2>
          <table class="border border-black min-w-full">
            <thead class="px-5 py-2 border">
              <tr class="text-center px-3 py-2 font-bold">
                <td>Plan</td>
                <td>Features</td>
                <td>Project</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody class="px-3 py-2">
              <tr class="text-center px-3 py-2 border border-black">
                <td>${data.plan}</td>
                <td>${data.service}</td>
                <td>${data.projectName}</td>
                <td>${data.price}</td>
              </tr>
              <tr>
                <td colspan="4">
                  <div class="flex justify-end font-semibold p-3">
                    Net Price: ${data.price}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;
    estimationDiv.append(estimationCard);
    const backBtn = document.querySelector(".back-btn");
    console.log(backBtn);
    backBtn.addEventListener("click", () => {
      const estimationDiv = document.querySelector(".estimationDiv");
      formDiv.style.display = "block";
      estimationDiv.style.display = "none";
      backBtn.style.display = "none";
      submittedData.length = 0;
    });
  });
};
