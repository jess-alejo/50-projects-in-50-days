const quiz = document.getElementById("quiz")
const answers = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const choiceA = document.getElementById("a_text")
const choiceB = document.getElementById("b_text")
const choiceC = document.getElementById("c_text")
const choiceD = document.getElementById("d_text")
const submit = document.getElementById("submit")

let currentIndex = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuiz = quizData[currentIndex]
  question.innerText = currentQuiz.question

  choiceA.innerText = currentQuiz.a
  choiceB.innerText = currentQuiz.b
  choiceC.innerText = currentQuiz.c
  choiceD.innerText = currentQuiz.d
}

submit.addEventListener("click", () => {
  const answer = getAnswer()

  if (answer) {
    console.log(answer, quizData[currentIndex].correct)
    if (answer === quizData[currentIndex].correct) {
      score++
    }
  }

  currentIndex++

  if (currentIndex < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions</h2>

    <button onclick="location.reload()">Reload</button>
    `
  }
})

function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false))
}

function getAnswer() {
  let selected

  answers.forEach((answer) => {
    if (answer.checked) {
      selected = answer.id
    }
  })

  return selected
}
