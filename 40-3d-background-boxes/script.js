const boxContainer = document.getElementById("boxes")
const boxes = document.querySelectorAll(".box")
const btn = document.getElementById("btn")

function createBoxes() {
  for (let row = 0; row < 4; row++) {
    for (let column = 0; column < 4; column++) {
      const box = document.createElement("div")
      box.classList.add("box")
      box.style.backgroundPosition = `${column * -125}px ${row * -125}px`

      boxContainer.appendChild(box)
    }
  }
}

btn.addEventListener("click", () => boxContainer.classList.toggle("big"))

createBoxes()
