const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector(".final")
const replay = document.querySelector("#replay")

replay.addEventListener("click", () => {
  resetDOM()
  runAnimation()
})

runAnimation()

function resetDOM() {
  counter.classList.remove("hide")
  finalMessage.classList.remove("show")

  nums.forEach(num => {
    num.classList.value = ""
  })
  nums[0].classList.add("in")
}

function runAnimation() {
  const lastIndex = nums.length - 1

  nums.forEach((num, index) => {
    num.addEventListener("animationend", e => {
      if (e.animationName === "slide-in" && index !== lastIndex) {
        num.classList.remove("in")
        num.classList.add("out")
      } else if (e.animationName === "slide-out" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in")
      } else {
        counter.classList.add("hide")
        finalMessage.classList.add("show")
      }
    })
  })
}
