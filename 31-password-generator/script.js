const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText
  if (!password) return

  const textarea = document.createElement("textarea")
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
  alert("Password copied to clipboard")
})

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value

  const typesArray = [
    { lower: lowercaseEl.checked },
    { upper: uppercaseEl.checked },
    { number: numbersEl.checked },
    { symbol: symbolsEl.checked },
  ].filter(setting => Object.values(setting)[0])

  resultEl.innerText = generatePassword(typesArray, length)
})

function generatePassword(settings, length) {
  if (settings.length === 0) return ""

  let generatedPassword = ""

  for (let index = 0; index < length; index++) {
    const index = Math.floor(Math.random() * settings.length)
    const setting = settings[index]
    generatedPassword += randomFunc[Object.keys(setting)]()
  }

  return generatedPassword
}

function getRandomLower() {
  const charCode = Math.floor(Math.random() * 26) + 97
  return String.fromCharCode(charCode)
}

function getRandomUpper() {
  const charCode = Math.floor(Math.random() * 26) + 65
  return String.fromCharCode(charCode)
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,."
  const index = Math.floor(Math.random() * symbols.length)
  return symbols[index]
}
