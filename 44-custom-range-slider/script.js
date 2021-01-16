const range = document.getElementById("range")

range.addEventListener("input", (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const rangeWidth = +getComputedStyle(e.target)
    .getPropertyValue("width")
    .replace("px", "")
  const labelWidth = +getComputedStyle(label)
    .getPropertyValue("width")
    .replace("px", "")

  const max = +e.target.max
  const min = +e.target.min
  const left =
    value * (rangeWidth / max) -
    labelWidth / 2 +
    scale(value, min, max, 10, -14)

  label.style.left = `${left}px`
  label.innerHTML = value
})

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
