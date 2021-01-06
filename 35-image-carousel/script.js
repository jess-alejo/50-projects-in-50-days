const imagesContainer = document.getElementById("images")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const images = imagesContainer.querySelectorAll("img")

let index = 0
let interval = setInterval(() => {
  index++
  changeImage()
}, 3000)

function changeImage() {
  if (index > images.length - 1) {
    index = 0
  } else if (index < 0) {
    index = images.length - 1
  }

  imagesContainer.style.transform = `translateX(${-index * 500}px)`
}

next.addEventListener("click", () => {
  index++
  changeImage()
  resetInterval()
})

previous.addEventListener("click", () => {
  index--
  changeImage()
  resetInterval()
})

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 3000)
}
