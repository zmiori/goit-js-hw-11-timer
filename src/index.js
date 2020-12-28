import './styles.css';

const refs = {
  daysCountdown: document.querySelector("[data-value='days']"),
  hoursCountdown: document.querySelector("[data-value='hours']"),
  minsCountdown: document.querySelector("[data-value='mins']"),
  secsCountdown: document.querySelector("[data-value='secs']"),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  countdownStart() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;

    updateDays(time);
    updateHours(time);
    updateMins(time);
    updateSecs(time);
  }

  countdown() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;

      updateDays(time);
      updateHours(time);
      updateMins(time);
      updateSecs(time);
    }, 1000);
  }
}

function updateDays(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  refs.daysCountdown.textContent = `${days}`;
}

function updateHours(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  refs.hoursCountdown.textContent = `${hours}`;
}

function updateMins(time) {
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  refs.minsCountdown.textContent = `${mins}`;
}

function updateSecs(time) {
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.secsCountdown.textContent = `${secs}`;
}

const myTimer = new CountdownTimer('#timer-1', new Date('Jan 1, 2021'));
myTimer.countdownStart();
myTimer.countdown();
