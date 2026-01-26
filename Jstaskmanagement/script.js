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

const listContainer = document.querySelectorAll(".list-container li");
console.log(listContainer);

listContainer.forEach((list) => {
  list.addEventListener("click", () => {
    listContainer.forEach((list) => {
      list.classList.remove(
        "bg-green-300",
        "px-3",
        "py-2",
        "rounded",
        "shadow-sm",
      );
    });
    list.classList.add("bg-green-300", "px-3", "py-2", "rounded", "shadow-sm");
  });
});

let projects = [
  {
    taskNo: "Task 1",
    name: "Document Fragment",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/",
    date: "02/01/2026",
  },
  {
    taskNo: "Task 2",
    name: "Dynamic User Manager",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Dynamicusermanager/",
    date: "02/01/2026",
  },
  {
    taskNo: "Task 3",
    name: "Active State Navigator",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Activestatenavigator/",
    date: "02/01/2026",
  },
  {
    taskNo: "Task 4",
    name: "Greeting Bot",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Greetingbot/",
    date: "12/01/2026",
  },
  {
    taskNo: "Task 5",
    name: "Background color Switcher",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Backgroundswitcher/",
    date: "12/01/2026",
  },
  {
    taskNo: "Task 6",
    name: "Text Formatter",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Textformatter/",
    date: "17/01/2026",
  },
  {
    taskNo: "Task 7",
    name: "Show Hide Password",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Showhidepassword/",
    date: "17/01/2026",
  },
  {
    taskNo: "Task 8",
    name: "Dynamic Bullet Points",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Dynamicbulletpoints/",
    date: "19/01/2026",
  },
  {
    taskNo: "Task 9",
    name: "Simple Cart Counter",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Simplecartcounter/",
    date: "19/01/2026",
  },

  {
    taskNo: "Task 10",
    name: "Dark Mode Toggle & Live Character Counter",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Darkmodetoggle/",
    date: "20/01/2026",
  },
  {
    taskNo: "Task 11",
    name: "FAQ section",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/FAQsection/",
    date: "21/01/2026",
  },
  {
    taskNo: "Task 12",
    name: "Search/Filter List",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Searchfilterlist/",
    date: "23/01/2026",
  },
  {
    taskNo: "Task 13",
    name: "Random Quote Generator",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Randomquotegenerator/",
    date: "23/01/2026",
  },
  {
    taskNo: "Task 14",
    name: "Calculator App",
    link: "https://pavibritta.github.io/JavasriptInternshipProjects/Calculatorapp/",
    date: "27/01/2026",
  },
];
const container = document.querySelector(".container");
const displayCard = (data) => {
  container.innerHTML = "";
  data.forEach((item) => {
    console.log(container);
    const cardDiv = document.createElement("div");

    cardDiv.className = `border border-white rounded-xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer`;
    const heading3 = document.createElement("h3");
    heading3.className = `text-xl font-semibold mb-2`;
    heading3.textContent = `${item.taskNo}`;
    const heading1 = document.createElement("h1");
    heading1.className = `text-xl font-semibold mb-2`;
    heading1.textContent = `${item.name}`;
    const datePara = document.createElement("p");
    datePara.className = `text-lg font-medium mb-2`;
    datePara.textContent = `${item.date}`;
    const linkTag = document.createElement("a");
    linkTag.className = `inline-block bg-green-300 text-gray-800 mt-2 px-2 py-1 border border-white rounded shadow font-medium hover:bg-green-400 transition cursor-pointer`;
    linkTag.textContent = "View Task";
    linkTag.href = `${item.link}`;
    cardDiv.append(heading3);
    cardDiv.append(heading1);
    cardDiv.append(datePara);
    cardDiv.append(linkTag);
    container.append(cardDiv);
  });
};

displayCard(projects);
const input = document.getElementById("input-name");

input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase().trim();

  if (inputValue == "") {
    displayCard(projects);
    return;
  }

  const filteredProjects = projects.filter(
    (item) =>
      item.date == inputValue ||
      item.name.toLocaleLowerCase().includes(inputValue),
  );

  displayCard(filteredProjects);
});
