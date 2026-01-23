const newQuoteButton = document.querySelector(".newQuote-button");
const quoteContainer = document.querySelector(".quoteContainer");

const QuotesArray = [
  {
    quotes:
      "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "Eleanor Roosevelt",
    meaning:
      "Meaning: If you trust your dreams and work for them, you can shape your future.",
  },
  {
    quotes: "“In the middle of every difficulty lies opportunity.”",
    author: "Albert Einstein",
    meaning: "Meaning: Problems often bring chances to grow and succeed.",
  },
  {
    quotes:
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "Winston Churchill",
    meaning:
      "Meaning: What matters most is not winning or losing, but continuing with courage.",
  },
  {
    quotes: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
    meaning: "Meaning: Start improving the world by changing yourself first.",
  },
  {
    quotes:
      "“Education is the most powerful weapon which you can use to change the world.”",
    author: "Nelson Mandela",
    meaning:
      "Meaning: Learning and education have the power to transform lives and society.",
  },
];

newQuoteButton.addEventListener("click", () => {
  quoteContainer.innerHTML = "";
  const randomIndex = Math.floor(Math.random() * QuotesArray.length);

  const randomQuotes = QuotesArray[randomIndex];
  console.log("randomQuotes", randomQuotes);

  quoteContainer.innerHTML += `<div
      class="bg-linear-60 from-pink-600 to-pink-500 px-5 py-3 my-5 mx-auto w-full max-w-xl text-white rounded-lg shadow-gray-400 text-center cursor-pointer"
    >
      <p class="font-['Lobster_Two',sans-serif] font-bold text-lg">
        ${randomQuotes.quotes}
        <span class="font-bold">-${randomQuotes.author}</span>
      </p>

      <p class="my-3">
        ${randomQuotes.meaning}
      </p>
    </div>`;
});

