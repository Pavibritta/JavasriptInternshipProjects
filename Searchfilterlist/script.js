const programmingList = [
  "JAVASCRIPT",
  "PYTHON",
  "JAVA",
  "C",
  "C++",
  "PHP",
  "Go (Golang)",
  "SWIFT",
  "KOTLIN",
];
const listItem = document.querySelector(".listItem");
const displayList = (programmingList) => {
  listItem.innerHTML = "";
  programmingList.forEach((item) => {
    listItem.innerHTML += `
<li  class="bg-linear-to-bl from-violet-500 to-fuchsia-500 w-full text-gray-300 p-2 rounded shadow mx-auto my-3 cursor-pointer hover:scale-95 transition-all duration-500 font-medium">${item}</li>
`;
  });
};
displayList(programmingList);
const searchInput = document.querySelector(".search-input");
// console.log("searchInput", searchInput);

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toUpperCase();

  if (searchValue === "") {
    displayList(programmingList);
    return;
  }

  const matched = programmingList.filter((item) => {
    return item.includes(searchValue);
  });
  console.log(matched);

  displayList(matched);
});

