let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        displayTime();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    displayTime();
}

function displayTime() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    document.querySelector('.timer').textContent = formattedTime;
}

function pad(val) {
    return val < 10 ? '0' + val : val;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Start the timer automatically when the page loads
startTimer();
