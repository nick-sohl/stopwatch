// Variables for buttons

const startStopBtn = document.querySelector('#start-stop-btn')
const resetBtn = document.querySelector('#reset-btn')

// Variables for time values

let seconds = 0
let minutes = 0
let hours = 0

// Variables for leading zero

let leadingSecond = 0
let leadingMinuits = 0
let leadingHours = 0

// Variables for set interval & timerstatus

let timerInterval = null
let timerStatus = "stopped"


// Stop Watch Funtion

function stopWatch() {

    seconds++
    if(seconds / 60 === 1) {
        seconds = 0
        minutes++
    }
    if(minutes / 60 === 1) {
        minutes = 0
        hours++
    }

    if(seconds < 10) {
        leadingSecond = "0" + seconds.toString()
    } else {
        leadingSecond = seconds
    }
    if(minutes < 10) {
        leadingMinuits = "0" + minutes.toString()
    } else {
        leadingMinuits = minutes
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString()
    } else {
        leadingHours = hours
    }


    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinuits + ":" + leadingSecond
}

startStopBtn.addEventListener('click', function() {
    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('start-stop-btn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = "started"
    } else {
        window.clearInterval(timerInterval)
        document.getElementById('start-stop-btn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0

    document.getElementById('timer').innerHTML = "00:00:00"

})

// function startCount() {
//     setInterval(stopWatch, 1000)
// }
// window.setInterval(stopWatch, 1000)