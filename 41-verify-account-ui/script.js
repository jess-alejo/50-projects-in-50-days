const codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ""
      setFocusOnCode(idx + 1)
    } else if (e.key === "Backspace") {
      setFocusOnCode(idx - 1)
    }
  })
})

const setFocusOnCode = (index) => {
  if (index >= 0 && index < codes.length) {
    setTimeout(() => codes[index].focus(), 10)
  }
}
