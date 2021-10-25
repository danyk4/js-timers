'use strict';

class Timer {

  constructor(selector, time, speed = 1000, reverse = false) {
    this.box = document.querySelector(selector);
    this.time = time;
    this.speed = speed;
    this.reverse = reverse;
    this.timer = 0;
    this.interval;
  }

  start() {
    this.interval = setInterval(() => {
      this.tick();
    }, this.speed);
  }

  tick() {
    if (!this.reverse) {
      this.time--;
      this.box.innerHTML = this.time;

      if (this.time <= 0) {
        this.stop();
      }
    } else {
      this.timer++;
      this.box.innerHTML = this.timer;

      if (this.timer >= this.time) {
        this.stop();
      }
    }

  }

  stop() {
    clearInterval(this.interval);
  }
}


window.addEventListener('load', () => {

  const timer1 = new Timer('.timer1', 10);

  timer1.start();

  const timerReverse = new Timer('.timer2', 30, 50, true);

  timerReverse.start();

});
