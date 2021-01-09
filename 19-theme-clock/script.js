const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

toggle.addEventListener("click", e => {
  const html = document.querySelector("html")
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    e.target.innerHtml = "Dark mode"
  } else {
    html.classList.add("dark")
    e.target.innerHtml = "Light mode"
  }
})

function padLeft(value) {
  if (value < 10) {
    return `0${value}`
  }

  return value
}

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? "PM" : "AM"

  const hourDeg = hours * 30 + minutes / 2
  const minuteDeg = minutes * 6
  const secondsDeg = seconds * 6

  hourEl.style.transform = `translate(-50%, -100%) rotateZ(${hourDeg}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotateZ(${minuteDeg}deg)`
  secondEl.style.transform = `translate(-50%, -80%) rotateZ(${secondsDeg}deg)`

  timeEl.innerText = `${padLeft(hours % 12)}:${padLeft(minutes)} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime()

setInterval(() => {
  setTime()
}, 500)
