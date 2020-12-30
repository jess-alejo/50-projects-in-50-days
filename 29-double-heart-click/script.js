const loveMe = document.querySelector(".love-me")
const times = document.querySelector("#times")

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener("click", e => {
  const currentTime = new Date().getTime()
  if (clickTime === 0) {
    clickTime = currentTime
  } else {
    if (currentTime - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = currentTime
    }
  }
})

function createHeart(e) {
  const heart = document.createElement("i")
  heart.classList.add("fas")
  heart.classList.add("fa-heart")

  const currentX = e.clientX - e.target.offsetLeft
  const currentY = e.clientY - e.target.offsetTop - 14

  heart.style.top = `${currentY}px`
  heart.style.left = `${currentX}px`

  loveMe.appendChild(heart)
  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 1000)
}
