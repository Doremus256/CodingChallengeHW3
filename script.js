const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const btn1 = document.getElementById("Q1")
const btn2 = document.getElementById("Q2")
const btn3 = document.getElementById("Q3")
const btn4 = document.getElementById("Q4")
const correctAnswer = document.getElementById("Correct")
const nextButton = document.getElementById("next-btn")
const saveDiv = document.getElementById("saveDiv")
const userInitials = document.getElementById("userInitials")
const saveUserInitialsButton = document.getElementById("saveUserInitialsButton")
const yourScore = document.getElementById("yourScore")

saveDiv.style.display = "none"

let currentQuestion = 0
let userScore = 0

let questions = [
    {
        question: "What color is the sky?",
        answers: ["red", "blue", "green", "kaleidoscope"],
        answer: 1

    },

    {
        question: "How many weeks long is Bootcamp?",
        answers: ["1000", "5", "15", "12"],
        answer: 3
    },

    {
        question: "Which is NOT one of the internet's 3 main languages?",
        answers: ["JavaScript", "HTML", "Spanish", "CSS"],
        answer: 2
    },

    {
        question: "At what number do Array Indexes begin?",
        answers: ["0", "3", "1", "2"],
        answer: 0
    },
]

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", nextQuestion)
saveUserInitialsButton.addEventListener("click", saveUser)

btn1.addEventListener("click", selectAnswer)
btn2.addEventListener("click", selectAnswer)
btn3.addEventListener("click", selectAnswer)
btn4.addEventListener("click", selectAnswer)

function startGame() {
    console.log("this works")
    startButton.style.display = "none"
    nextQuestion()
}

function nextQuestion() {
    if (currentQuestion == questions.length - 1) {
        alert("Your Score Is " + userScore)
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"
        questionElement.innerText = "Your Score Is " + userScore
        nextButton.style.display = "none"
        saveDiv.style.display = "block"
        correctAnswer.innerText = ""
    }
    else {
        questionElement.innerText = questions[currentQuestion].question
        btn1.innerText = questions[currentQuestion].answers[0]
        btn2.innerText = questions[currentQuestion].answers[1]
        btn3.innerText = questions[currentQuestion].answers[2]
        btn4.innerText = questions[currentQuestion].answers[3]
        correctAnswer.innerText = ""
    }
}
function selectAnswer() {
    var userChoice = this.getAttribute("data-value")
    console.group(userChoice)
    if (questions[currentQuestion].answer == userChoice) {
        userScore++
        correctAnswer.innerText = "Correct!"
    }
    else {
        correctAnswer.innerText = "Try Again!"
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++
    }
}

function saveUser() {
    var savedInitials = userInitials.value
    var previousScore = localStorage.getItem("userScore") || 0
    if (userScore > previousScore) {
        localStorage.setItem("userName", savedInitials)
        localStorage.setItem("userScore", userScore)
        displayLocalStorage()
    }

}

function displayLocalStorage() {
    var user = localStorage.getItem("userName") || "Good Luck!"
    var score = localStorage.getItem("userScore") || "0"
    yourScore.innerText = user + score
}

displayLocalStorage()