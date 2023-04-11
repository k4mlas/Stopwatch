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
			clock.textContent = `${minutes}:0${socond}`;
		}
	}, 100);
};

const timePause = () => {
	clearInterval(countTime);
};

const timeStop = () => {
	if (clock.textContent !== '0:00') {
		lastTime.style.visibility = 'visible';
		lastTime.innerHTML = `Twój ostatni czas to: ${clock.textContent}`;
		timeArr.push(clock.textContent);
		console.log(timeArr);
	}
	minutes = 0;
	second = 0;
	clock.textContent = `${minutes}:0${second}`;
	clearInterval(countTime);
};

const timeReset = () => {
	minutes = 0;
	second = 0;
	clock.textContent = `${minutes}:0${second}`;
	lastTime.textContent = '';
	timeArr.splice(0, timeArr.length);
	clearInterval(countTime);
	console.log(timeArr);
};

const timeHistory = () => {};

playBtn.addEventListener('click', timePlay);
pauseBtn.addEventListener('click', timePause);
stopBtn.addEventListener('click', timeStop);
resetBtn.addEventListener('click', timeReset);
historyBtn.addEventListener('click', timeHistory);
