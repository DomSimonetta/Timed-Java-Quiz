var question = document.querySelector(".question");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var scoreboard;
var isWin = false;
var timer;
var timerCount = 60;

function startGame() {
    timerCount = 60;
}

function startTimer() {
    timer - setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            sendMessage("game over");
        }
    }, 1000);
}
startTimer();