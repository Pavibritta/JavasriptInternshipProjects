const equalBtn = document.querySelector(".equalBtn");
let inputValue = document.querySelector(".inputValue");
const actionBtn = document.querySelectorAll(".actionBtn");
let sinBtn = document.querySelector(".sinBtn");
const inBtn = document.querySelector(".inBtn");
const logBtn = document.querySelector(".logBtn");
const cosBtn = document.querySelector(".cosBtn");
const rootBtn = document.querySelector(".rootBtn");
const capBtn = document.querySelector(".capBtn");
const tanBtn = document.querySelector(".tanBtn");
const degBtn = document.querySelector(".degBtn");
const factorialBtn = document.querySelector(".factorialBtn");
const expBtn = document.querySelector(".expBtn");
const eBtn = document.querySelector(".eBtn");
const resiprocalBtn = document.querySelector(".resiprocalBtn");

let isInverse = false;

//inverse function
const handleInverse = () => {
  isInverse = !isInverse;

  sinBtn.textContent = isInverse ? "sin⁻¹" : "sin";
  inBtn.textContent = isInverse ? "e^" : "In";
  logBtn.textContent = isInverse ? "10^" : "log";
  cosBtn.textContent = isInverse ? "cos⁻¹" : "cos";
  rootBtn.textContent = isInverse
    ? `x²
`
    : "√";
  capBtn.textContent = isInverse ? "y√x" : "^";
  tanBtn.textContent = isInverse ? "tan⁻¹" : "tan";
  degBtn.textContent = isInverse ? "RAD" : "DEG";
};

sinBtn.addEventListener("click", () => {
  if (isInverse) {
    sinBtn.dataset.value = `Math.asin(${inputValue.value})`;
    inputValue.value = sinBtn.dataset.value;
  } else {
    sinBtn.dataset.value = `Math.sin(${inputValue.value})`;
    inputValue.value = sinBtn.dataset.value;
  }
});

capBtn.addEventListener("click", () => {
  if (isInverse) {
    inputValue.value += "^(1/";
  } else {
    inputValue.value += "^";
  }
});

cosBtn.addEventListener("click", () => {
  if (isInverse) {
    cosBtn.dataset.value = `Math.acos(${inputValue.value})`;
    inputValue.value = cosBtn.dataset.value;
  } else {
    cosBtn.dataset.value = `Math.cos(${inputValue.value})`;
    inputValue.value = cosBtn.dataset.value;
  }
});

tanBtn.addEventListener("click", () => {
  if (isInverse) {
    tanBtn.dataset.value = `Math.atan(${inputValue.value})`;
    inputValue.value = tanBtn.dataset.value;
  } else {
    tanBtn.dataset.value = `Math.tan(${inputValue.value})`;
    inputValue.value = tanBtn.dataset.value;
  }
});

inBtn.addEventListener("click", () => {
  if (isInverse) {
    inBtn.dataset.value = `Math.exp(${inputValue.value})`;
    inputValue.value = inBtn.dataset.value;
  } else {
    inBtn.dataset.value = `Math.log(${inputValue.value})`;
    inputValue.value = inBtn.dataset.value;
  }
});

logBtn.addEventListener("click", () => {
  if (isInverse) {
    logBtn.dataset.value = `Math.pow(10,${inputValue.value})`;
    inputValue.value = logBtn.dataset.value;
  } else {
    logBtn.dataset.value = `Math.log10(${inputValue.value})`;
    inputValue.value = logBtn.dataset.value;
  }
});

degBtn.addEventListener("click", () => {
  if (isInverse) {
    degBtn.dataset.value = `${inputValue.value}*(Math.PI/180)`;
    inputValue.value = degBtn.dataset.value;
  } else {
    degBtn.dataset.value = `${inputValue.value}*(180/Math.PI)`;
    inputValue.value = degBtn.dataset.value;
  }
});

rootBtn.addEventListener("click", () => {
  if (isInverse) {
    rootBtn.dataset.value = `${inputValue.value}*${inputValue.value}`;
    inputValue.value = rootBtn.dataset.value;
  } else {
    rootBtn.dataset.value = `Math.sqrt(${inputValue.value})`;
    inputValue.value = rootBtn.dataset.value;
  }
});

expBtn.addEventListener("click", () => {
  if (!inputValue.value) return;
  inputValue.value += "e";
});

const factorialFunction = (number) => {
  if (number < 0) {
    return "NAN";
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;
  for (i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

console.log(factorialFunction(9));

factorialBtn.addEventListener("click", () => {
  inputValue.value += "!";
});
actionBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputValue.value += btn.dataset.value || btn.textContent;
  });
});

eBtn.addEventListener("click", () => {
  inputValue.value += "e";
});
resiprocalBtn.addEventListener("click", () => {
  inputValue.value = `1/${inputValue.value}`;
});
const handleResult = () => {
  try {
    inputValue.value = inputValue.value.replace(/\^/g, "**");
    console.log(inputValue.value);
    inputValue.value = inputValue.value.replace(/\d+!/g, (m) =>
      factorialFunction(Number(m.slice(0, -1))),
    );
    console.log(inputValue.value);
    inputValue.value = inputValue.value.replace(/e/g, Math.E);

    inputValue.value = eval(inputValue.value);
  } catch (error) {
    inputValue.value = "Error";
  }
};

const handleClear = () => {
  inputValue.value = "";
};
const handleStepclear = () => {
  inputValue.value = inputValue.value.slice(0, -1);
};
