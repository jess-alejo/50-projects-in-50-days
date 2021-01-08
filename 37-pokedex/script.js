const pokemonContainer = document.getElementById("poke-container")
const pokemonCount = 150
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5df5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
}

const fetchPokemons = async () => {
  for (let id = 1; id <= pokemonCount; id++) {
    await getPokemon(id)
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()

  createPokemonCard(data)
}

const createPokemonCard = pokemon => {
  const pokemonCard = document.createElement("div")
  pokemonCard.classList.add("pokemon")

  const number = pokemon.id.toString().padStart(3, "0")
  const type = pokemon.types.map(type => type.type.name)[0]
  const color = colors[type]

  pokemonCard.style.backgroundColor = color

  const template = `
    <div class="image-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${number}</span>
      <h3 class="name">${pokemon.name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `

  pokemonCard.innerHTML = template
  pokemonContainer.appendChild(pokemonCard)
}

fetchPokemons()
