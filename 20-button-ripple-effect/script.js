const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement("span")
    circle.classList.add("circle")

    circle.style.top = yInside + "px"
    circle.style.left = xInside + "px"
    circle.style.backgroundColor = generateRandomColor()

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
}
