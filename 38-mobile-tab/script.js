const listItems = document.querySelectorAll("nav ul li")
const contents = document.querySelectorAll(".content")

for (let index = 0; index < listItems.length; index++) {
  const tab = listItems[index]
  tab.addEventListener("click", () => {
    setActive(index)
  })
}

function setActive(current) {
  for (let index = 0; index < listItems.length; index++) {
    const tab = listItems[index]
    const img = contents[index]

    if (index === current) {
      tab.classList.add("active")
      img.classList.add("show")
    } else {
      tab.classList.remove("active")
      img.classList.remove("show")
    }
  }
}
