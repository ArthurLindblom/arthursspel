
var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("startScreen");

var target = document.getElementById("target");



var scoreDisplay = document.getElementById("currentScore");
var timeDisplay = document.getElementById("time");¨

var score = 0;
var time = 30


startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    target.style.display = "block";


    setInterval(function timer() {
        time--;
        timeDisplay.textContent = "00:" + time;
        if (time <= 0){
        clearInterval(timer)
        location.reload()
        alert("Game Over!\n Your Score: " + score)
        }
    }, 1000)

});

target.addEventListener("click", () => {
    score++;
    scoreDisplay.innerText = score;

    target.style.left = Math.floor(Math.random() * 440) + "px"
    target.style.top = Math.floor(Math.random() * 340) + "px"
})



