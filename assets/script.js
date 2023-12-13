var start = document.getElementById("start-button");
var questionBox = document.getElementById('question-box');
var questionElement = document.getElementById('questions');
var answerButtonsElement = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

start.addEventListener('click', startGame);


function startGame() {
console.log("start");
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
setNextQuestion();
setTime();
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }


function setNextQuestion() {
    
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innertext = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}



 function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');   
    }
 }















const questions = [
    {
        question:"what does HTML stand for",
        answers: [
            {text: "Hyper Text Monster Link", correct: false},
            {text: "Huge Text Markup Link", correct: false},
            {text: "Hyper Text Markup Link", correct: true},
            {text: "I dont know", correct: false}
        ]
    }
]

const question = [
    {
        question:"what does CSS stand for",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Corresponding Style Sheets", correct: false},
            {text: "Cascading Sheet Styles", correct: false},
            {text: "I dont know", correct: false}
        ]
    }
]


setTime();





