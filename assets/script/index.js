'use strict';

//query selectors
const time = document.querySelector('.time');
const alarm = document.querySelector('.alarm')
const newAlarm = document.querySelector('.set-alarm');

let alarmTime = '15:08';


//setting time
function setTime() {
  const timeNow = new Date();
  time.innerText = timeNow.toString().substring(16, 21);
  trigerAlarm;
}

//set alarm
function setAlarm() {
  const hour = document.querySelector(('.hour').value);
  const minute = document.querySelector(('.minute').value);
  if (true) {
    alarmTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    console.log(hour);
    console.log(minute);
    alarm.innerText = alarmTime;
  } else {
    alert('Invalid time! Please enter valid hour (0-23) and minute (0-59).');
  }
}

//triger alarm
function trigerAlarm() {
  if (time.innerText === alarmTime) {
    console.log(hi);
  }
}

//event listeners
newAlarm.addEventListener('click', setAlarm);

window.addEventListener('load', setTime);
setInterval(setTime, 2000);