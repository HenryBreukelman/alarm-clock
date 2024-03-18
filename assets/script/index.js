'use strict';

//query selectors
const time = document.querySelector('.time');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const newAlarm = document.querySelector('.set-alarm');

const timeNow = new Date();

//setting time
const setTime = () => {
  time.innerText = timeNow.toString().substring(16, 21)
}

//event listeners
newAlarm.addEventListener('click', () => {
  console.log(newAlarm)
});

window.addEventListener('load', setTime);
setInterval(setTime, 10000);