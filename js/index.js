const quotes = [
  `“Be yourself; everyone else is already taken.”
 -- Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.”
-- Marilyn Monroe`,
  `“A room without books is like a body without a soul.”
-- Marcus Tullius Cicero`,
  `“You only live once, but if you do it right, once is enough.”
-- Mae West`,
  `“Without music, life would be a mistake.”
-- Friedrich Nietzsche, Twilight of the Idols`,
];

document.getElementById("quoteBtn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quotes").innerText = randomQuote;
});
