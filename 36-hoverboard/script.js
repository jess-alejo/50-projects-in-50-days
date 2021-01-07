const container = document.getElementById("container")
const colors = ["#79e576", "#e28583", "#dde85e", "#42c8e2", "#3f84b8"]
const SQUARE_COUNT = 500

for (let index = 0; index < SQUARE_COUNT; index++) {
  const square = document.createElement("div")
  square.classList.add("square")

  square.addEventListener("mouseover", () => applyColor(square))
  square.addEventListener("mouseout", () => removeColor(square))

  container.appendChild(square)
}

function applyColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = "#1d1d1d"
  element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
