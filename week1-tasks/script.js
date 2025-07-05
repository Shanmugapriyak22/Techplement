const quotes = [
  { q: "The important thing is not to stop questioning.", a: "Albert Einstein" },
  { q: "Science is a way of thinking much more than it is a body of knowledge.", a: "Carl Sagan" },
  { q: "The unexamined life is not worth living.", a: "Socrates" },
  { q: "I think, therefore I am.", a: "René Descartes" },
  { q: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a: "Aristotle" },
  { q: "What we know is a drop, what we don't know is an ocean.", a: "Isaac Newton" },
  { q: "Nothing in life is to be feared, it is only to be understood.", a: "Marie Curie" },
  { q: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", a: "Stephen Hawking" },
  { q: "Truth is ever to be found in simplicity.", a: "Isaac Newton" },
  { q: "The good life is one inspired by love and guided by knowledge.", a: "Bertrand Russell" }
];

function getRandomQuote() {
  console.log("Generate Quote button clicked!");
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  document.getElementById("quote").innerText = `${quote.q}`;
  document.getElementById("author").innerText = `— ${quote.a} ✨`;
}

function searchByAuthor() {
  const author = document.getElementById("authorName").value.trim().toLowerCase();
  const found = quotes.find(q => q.a.toLowerCase().includes(author));

  if (found) {
    document.getElementById("quote").innerText = `${found.q}`;
    document.getElementById("author").innerText = `— ${found.a} 🔍`;
  } else {
    document.getElementById("quote").innerText = "Oops! That author doesn’t exist. Maybe you should become one 💡";
    document.getElementById("author").innerText = "";
  }
}
