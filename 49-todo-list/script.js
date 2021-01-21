const form = document.getElementById("form")
const input = document.getElementById("input")
const todos = document.getElementById("todos")

const todosDb = JSON.parse(localStorage.getItem("todos"))

if (todosDb) {
  todosDb.forEach((todo) => addTodo(todo))
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement("li")

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed")
      updateLocalStorage()
    })

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLocalStorage()
    })

    if (todo && todo.completed) {
      todoEl.classList.add("completed")
    }

    todoEl.innerText = todoText
    todos.appendChild(todoEl)

    input.value = ""

    updateLocalStorage()
  }
}

function updateLocalStorage() {
  const todos = []
  const todosEl = document.querySelectorAll("li")
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    })
  })

  localStorage.setItem("todos", JSON.stringify(todos))
}
