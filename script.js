let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  if (isRunning) {
    return; // Don't do anything if it's already running
  }

  timer = setInterval(updateTime, 1000);
  isRunning = true;
  document.getElementById('start').disabled = true; // Disable Start button when running
  document.getElementById('stop').disabled = false; // Enable Stop button
}

function stop() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('start').disabled = false; // Enable Start button
  document.getElementById('stop').disabled = true; // Disable Stop button
}

function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Format time as HH:MM:SS
  document.getElementById('time').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('time').textContent = "00:00:00";
  document.getElementById('start').disabled = false; // Enable Start button
  document.getElementById('stop').disabled = true; // Disable Stop button
}
