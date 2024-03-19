'use strict';

//query selectors
const time = document.querySelector('.time');
const alarm = document.querySelector('.alarm')
const newAlarm = document.querySelector('.set-alarm');
const stopAlarm = document.querySelector('body');

let alarmTime = '';
const alarmSound = new Audio('./assets/media/alarm.mp3')
alarmSound.type = "audio/mp3"


//setting time
function setTime() {
  const timeNow = new Date();
  time.innerText = timeNow.toString().substring(16, 21);
  triggerAlarm();
}

//set alarm
function setAlarm() {
  const inputHour = document.querySelector('.hour');
  const inputMinute = document.querySelector('.minute');
  const hour = parseInt(inputHour.value);
  const minute = parseInt(inputMinute.value);

  if (isNaN(hour) || hour < 0 || hour > 23.9 ) {
    inputHour.style.border = '1px solid #e20000';
  } else if (isNaN(minute) || minute < 0 || minute > 59.9) {
    inputMinute.style.border = '1px solid #e20000';
  } else {
    inputHour.style.border = '';
    inputMinute.style.border = '';
    alarmTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    alarm.innerText = alarmTime;
  }
}

//triger and sto[ alarm
function triggerAlarm() {
  if (time.innerText === alarmTime) {
    alarmSound.play();
  }
}

function stopAlarmFunc() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  console.log('stop')
}

//event listeners
newAlarm.addEventListener('click', setAlarm);
stopAlarm.addEventListener('click', stopAlarmFunc)
window.addEventListener('load', setTime);
setInterval(setTime, 2000);

