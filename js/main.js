const playBtn = document.querySelector('.stopwatch__btn__option--start');
const pauseBtn = document.querySelector('.stopwatch__btn__option--pause');
const stopBtn = document.querySelector('.stopwatch__btn__option--stop');
const resetBtn = document.querySelector('.stopwatch__btn__option--reset');
const historyBtn = document.querySelector('.stopwatch__btn__option--history');
const clock = document.querySelector('.stopwatch__time');
const lastTime = document.querySelector('.stopwatch__result');
const timeList = document.querySelector('.stopwatch__list');
const infoBtn = document.querySelector('.stopwatch__info');
const modalShadow = document.querySelector('.modal');
const modalBtn = document.querySelector('.close');

let countTime;
let second = 0;
let minutes = 0;

const timeArr = [];
const timePlay = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (second < 9) {
			second++;
			clock.textContent = `${minutes}:0${second}`;
		} else if (second >= 9 && second < 59) {
			second++;
			clock.textContent = `${minutes}:${second}`;
		} else {
			minutes++;
			second = 0;
			clock.textContent = `${minutes}:${second}`;
		}
	}, 100);
};

const timePause = () => {
	clearInterval(countTime);
};

const timeStop = () => {
	if (clock.textContent !== '0:00') {
		lastTime.innerHTML = `Twój ostatni czas to: ${clock.textContent}`;
		lastTime.style.visibility = 'visible';
		timeArr.push(clock.textContent);
		console.log(timeArr);
	}
	let minutes = 0;
	let second = 0;
	clock.textContent = `${minutes}:0${second}`;
	clearInterval(countTime);
};

playBtn.addEventListener('click', timePlay);
pauseBtn.addEventListener('click', timePause);
stopBtn.addEventListener('click', timeStop);
