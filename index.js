let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let timerCD = document.getElementById("timerCD")

function incHomebyOne() {
    let homeScoreV = parseFloat(homeScore.innerText)
    homeScore.textContent = homeScoreV+1
    checkTopper()
}

function incHomebyTwo() {
    let homeScoreV = parseFloat(homeScore.innerText)
    homeScore.textContent = homeScoreV+2
    checkTopper()
}

function incHomebyThree() {
    let homeScoreV = parseFloat(homeScore.innerText)
    homeScore.textContent = homeScoreV+3
    checkTopper()
}

function incAwaybyOne() {
    let awayScoreV = parseFloat(awayScore.innerText)
    awayScore.textContent = awayScoreV+1
    checkTopper()
}

function incAwaybyTwo() {
    let awayScoreV = parseFloat(awayScore.innerText)
    awayScore.textContent = awayScoreV+2
    checkTopper()
}

function incAwaybyThree() {
    let awayScoreV = parseFloat(awayScore.innerText)
    awayScore.textContent = awayScoreV+3
    checkTopper()
}

function checkTopper() {
    if(homeScore.textContent>awayScore.textContent) {
        document.getElementById("home-team").style.backgroundColor="#66b2b2"
        document.getElementById("away-team").style.backgroundColor="#1B244A"
    } else {
        document.getElementById("away-team").style.backgroundColor="#66b2b2"
        document.getElementById("home-team").style.backgroundColor="#1B244A"    
    }
}

function startTimer(duration) {
    var timer = duration, minutes, seconds
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        if (minutes < 10) {
           minutes = "0" + minutes
        }

        if (seconds < 10) {
            seconds = "0" + seconds
        }

        timerCD.textContent = minutes + ":" + seconds
        
        if (--timer < 0) {
            timerCD.textContent = "GAME OVER"
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1
    startTimer(oneMinute)
}