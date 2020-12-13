const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});
