const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secEl = document.getElementById('sec')

const newYears = "31 Dec 2023"

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate)
    const days = Math.floor(totalSeconds/ 1000 / 3600 / 24  )
    const hours = Math.floor(totalSeconds / 1000/ 3600) % 24
    const min = Math.floor(totalSeconds / 1000 / 60) % 60
    const seconds = Math.floor(totalSeconds/1000) % 60

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minEl.innerHTML = formatTime(min)
    secEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

// initial call
countdown()
setInterval(countdown,1000)