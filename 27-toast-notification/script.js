const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = ["Message One", "Message Two", "Message Three", "Message Four"]

button.addEventListener("click", () => createNotification())

function createNotification(message = null, type = null) {
  const div = document.createElement("div")
  div.classList.add("toast")
  div.classList.add(type ? type : getRandomType())
  div.innerText = message ? message : getRandomMessage()

  toasts.appendChild(div)

  setTimeout(() => {
    div.remove()
  }, 5000)
}

function getRandomMessage() {
  return randomPick(messages)
}

function getRandomType() {
  return randomPick(["info", "success", "warning", "danger"])
}

function randomPick(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
