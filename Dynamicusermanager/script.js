let submittedData = [];
const validateForm = () => {
  let isValid = true;

  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  let inputName = document.getElementById("input-name").value.trim();
  let inputJob = document.getElementById("input-job").value.trim();

  if (inputName == "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  if (inputJob == "") {
    document.getElementById("jobError").textContent = "Job is required";
    isValid = false;
  }
  return isValid;
};

const submitBtn = document.getElementById("submit-btn");

console.log(submitBtn);

submitBtn.addEventListener("click", () => {
  if (!validateForm()) {
    return;
  }

  let inputName = document.getElementById("input-name");
  let inputJob = document.getElementById("input-job");

  const userDetails = { inputName: inputName.value, inputJob: inputJob.value };
  console.log(userDetails);

  submittedData = [...submittedData, userDetails];
  console.log(submittedData);
  displayUser();
  inputName.value = "";
  inputJob.value = "";
});

const displayUser = () => {
  const outputDiv = document.getElementById("output-div");
  outputDiv.className =
    "bg-white w-full flex justify-around items-center mx-auto flex-wrap md:w-2xl gap-2 p-3";
  outputDiv.innerHTML = "";

  submittedData.forEach((data, index) => {
    const userDiv = document.createElement("div");

    const jobClass =
      data.inputJob.toLowerCase() === "developer"
        ? "bg-green-600 text-white"
        : "bg-white text-gray-800";

    userDiv.className = ` border border-gray-200 rounded shadow-md hover:shadow-lg transition-all p-4 mb-3 ${jobClass}`;
    userDiv.innerHTML = `<h3 class="text-lg font-semibold text-blue-800 mb-2">${
      index + 1
    } - ${data.inputName.toUpperCase()}</h3>
    <div class="flex justify-between items-center">
    <p class="mb-1 font-medium"> ${data.inputJob.toUpperCase()}</p>
      <button class="bg-red-700 text-white rounded shadow p-2 m-2 delete-btn">Delete</button>
    </div>

      `;

    userDiv.querySelector(".delete-btn").addEventListener("click", () => {
      userDiv.remove();
    });

    outputDiv.append(userDiv);
  });
};
