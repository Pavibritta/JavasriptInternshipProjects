const products = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Smartwatch",
  "Headphones",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Printer",
  "Router",
  "Camera",
  "Tripod",
  "Speaker",
  "Microphone",
  "Charger",
  "USB Cable",
  "External Hard Drive",
  "Flash Drive",
  "Power Bank",
  "Projector",
  "Drone",
  "VR Headset",
  "Graphics Tablet",
  "Webcam",
  "Gaming Console",
  "Controller",
  "Memory Card",
  "Smart Home Hub",
  "Light Bulb",
  "Thermostat",
  "Security Camera",
  "Door Lock",
  "Robot Vacuum",
  "Electric Scooter",
  "3D Printer",
  "Monitor Stand",
  "Laptop Bag",
  "Tablet Case",
  "Phone Case",
  "Screen Protector",
  "Wireless Charger",
  "Bluetooth Speaker",
  "Gaming Chair",
  "Gaming Desk",
  "Smart Scale",
  "Fitness Tracker",
  "E-Reader",
  "Projector Screen",
  "Noise Cancelling Headphones",
  "Stylus Pen",
];

console.log(products.length);

products.forEach((item) => {
  const productList = document.getElementById("product-list");

  const createLi = document.createElement("li");
  createLi.className =
    "bg-gray-50 rounded shadow-sm mb-2 p-2 hover:bg-blue-500 hover:text-white";
  createLi.textContent = item;

  productList.append(createLi);
});
