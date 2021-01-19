const testimonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

let recordId = 1

function updateTestimonial() {
  const { name, photo, position, text } = testimonialsData[recordId]
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  recordId++

  if (recordId > testimonialsData.length - 1) {
    recordId = 0
  }
}

setInterval(updateTestimonial, 10000)
