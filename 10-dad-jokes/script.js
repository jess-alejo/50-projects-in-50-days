const jokeContainer = document.getElementById("joke");
const jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();

  jokeContainer.innerHTML = data.joke;
}

// function generateJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: { Accept: "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => (jokeContainer.innerText = data.joke));
// }
