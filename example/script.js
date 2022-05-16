const form = document.querySelector("form");
const factParagraph = document.getElementById("fact");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const year = e.target[0].value;
  const response = await fetch(`http://numbersapi.com/${year}/year`);
  const fact = await response.text();
  factParagraph.textContent = fact;
});
