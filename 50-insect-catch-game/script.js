const screens = document.querySelectorAll(".screen")
const chooseInsectButtons = document.querySelectorAll(".choose-insect-btn")

const startButton = document.getElementById("start-btn")
const gameContainer = document.querySelector(".game-container")

const timeBox = document.getElementById("time")
const scoreBox = document.getElementById("score")
const messageBox = document.getElementById("message")

let seconds = 0
let score = 0
let selectedInsect = {}

startButton.addEventListener("click", () => screens[0].classList.add("up"))

chooseInsectButtons.forEach((selectedButton) => {
  selectedButton.addEventListener("click", () => {
    const img = selectedButton.querySelector("img")
    const src = img.getAttribute("src")
    const alt = img.getAttribute("src")
    selectedInsect = { src, alt }
    screens[1].classList.add("up")

    setTimeout(createInsect, 1000)
    startGame()
  })
})

function createInsect() {
  const insectBox = document.createElement("div")
  insectBox.classList.add("insect")
  const { x, y } = getRandomLocation()

  insectBox.style.top = `${y}px`
  insectBox.style.left = `${x}px`

  const insectImage = document.createElement("img")
  insectImage.src = selectedInsect.src
  insectImage.alt = selectedInsect.alt
  insectImage.style = `transform: rotate(${Math.random() * 360}deg)`

  insectBox.appendChild(insectImage)
  insectBox.addEventListener("click", catchInsect)

  gameContainer.appendChild(insectBox)
}

function startGame() {
  setInterval(increaseTime, 1000)
}

function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  timeBox.innerHTML = `Time: ${m}:${s}`
  seconds++
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight

  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100

  return { x, y }
}

function catchInsect() {
  increaseScore()
  this.classList.add("caught")
  setTimeout(() => this.remove(), 2000)
  addInsects()
}

function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

function increaseScore() {
  score++

  if (score % 20 === 0) {
    messageBox.classList.add("visible")
  }

  scoreBox.innerHTML = `Score: ${score}`
}
