const houresCount = document.querySelector('.houres');
const minutesCount = document.querySelector('.minutes');
const secondsCount = document.querySelector('.seconds');

const dayName = document.querySelector('.day-name');
const dayCount = document.querySelector('.day-count');
const monthCount = document.querySelector('.month-count');
const yearCount = document.querySelector('.year-count');

const clockFace = document.querySelector('.clock-face');
const number12 = document.querySelector('.number12');
const number3 = document.querySelector('.number3');
const number6 = document.querySelector('.number6');
const number9 = document.querySelector('.number9');

const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');

const middleDot = document.querySelector('.middle-dot');

// display clock
const renderNumeralClock = setInterval(()=> {
  
  // getting actual time
  const houres = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  if(houres < 10) {
    houresCount.textContent = `0${houres} :`;
  } else {
    houresCount.textContent = `${houres} :`;
  }

  if(minutes < 10) {
    minutesCount.textContent = `0${minutes} :`;
  } else {
    minutesCount.textContent = `${minutes} :`;
  }

  if(seconds < 10) {
    secondsCount.textContent = `0${seconds}`;
  } else {
    secondsCount.textContent = `${seconds}`;
  }

}, 1000);
  
// display day's name
switch (new Date().getDay()){
  case 1:
    dayName.textContent = "Monday,";
    break;
  case 2:
    dayName.textContent = "Tuesday,";
    break;
  case 3:
    dayName.textContent = "Wednesday,";
    break;
  case 4:
    dayName.textContent = "Thursday,";
    break;
  case 5:
    dayName.textContent = "Friday,";
    break;
  case 6:
    dayName.textContent = "Saturday,";
    break;
  case 7:
    dayName.textContent = "Sunday,";
    break;
  default:
    dayName.textContent = "Sorry, we can't display day's name";
}

// display date in a date's panel
dayCount.textContent = `${new Date().getDate()}.`;
monthCount.textContent = `${(new Date().getMonth()) + 1}.`;
yearCount.textContent = `${(new Date().getFullYear())}`;

// clock animation
// I. face clock
clockFace.style.width = 200 + 'px';
clockFace.style.height = 200 + 'px';
clockFace.style.backgroundColor = '#eee';
clockFace.style.border = '2px solid black';
clockFace.style.borderRadius = 50 + '%';
clockFace.style.position = 'absolute';
clockFace.style.left = 50 + '%';
clockFace.style.top = 50 + '%';
clockFace.style.transform = `translate(${-50}%, ${-50}%)`;

middleDot.style.width = 10 + 'px';
middleDot.style.height = 10 + 'px';
middleDot.style.backgroundColor = '#fff';
middleDot.style.border = '1px solid black';
middleDot.style.borderRadius = 50 + '%';
middleDot.style.position = 'absolute';
middleDot.style.left = 50 + '%';
middleDot.style.top = 50 + '%';
middleDot.style.transform = `translate(${-50}%, ${-50}%)`;
middleDot.style.zIndex = 4;

// II. clock's numbers
number12.style.position = 'absolute';
number12.style.left = 50 + '%';
number12.style.top = 0;
number12.style.transform = `translate(${-50}%, ${25}%)`;

number3.style.position = 'absolute';
number3.style.left = 100 + '%';
number3.style.top = 50 + '%';
number3.style.transform = `translate(${-200}%, ${-50}%)`;

number6.style.position = 'absolute';
number6.style.left = 50 + '%';
number6.style.top = 100 + '%';
number6.style.transform = `translate(${-50}%, ${-125}%)`;

number9.style.position = 'absolute';
number9.style.left = 0;
number9.style.top = 50 + '%';
number9.style.transform = `translate(${100}%, ${-50}%)`;

// III. hands of a Clock
// 1. hour hand
hoursHand.style.width = 50 + 'px';
hoursHand.style.height = 8 + 'px';
hoursHand.style.backgroundColor = '#000';
hoursHand.style.borderRadius = 40 + '%';
hoursHand.style.marginTop = 0;
hoursHand.style.position = 'absolute';
hoursHand.style.left = 50 + '%';
hoursHand.style.top = 50 + '%';
hoursHand.style.transform = 'translate(-100%, -50%)';
hoursHand.style.transformOrigin = 0 + '%', 50 + '%';
hoursHand.style.transform = `rotate(${-90}deg)`;
hoursHand.style.zIndex = 1;

// 2. minutes hand
minutesHand.style.width = 65 + 'px';
minutesHand.style.height = 5 + 'px';
minutesHand.style.backgroundColor = 'royalblue';
minutesHand.style.borderRadius = 35 + '%';
minutesHand.style.marginTop = 0;
minutesHand.style.position = 'absolute';
minutesHand.style.left = 50 + '%';
minutesHand.style.top = 50 + '%';
minutesHand.style.transform = 'translate(-100%, -50%)';
minutesHand.style.transformOrigin = 0 + '%', 50 + '%';
minutesHand.style.transform = `rotate(${-90}deg)`;
minutesHand.style.zIndex = 2;

// 3. seconds hand
secondsHand.style.width = 80 + 'px';
secondsHand.style.height = 2 + 'px';
secondsHand.style.backgroundColor = 'red';
secondsHand.style.borderRadius = 15 + '%';
secondsHand.style.marginTop = 0;
secondsHand.style.position = 'absolute';
secondsHand.style.left = 50 + '%';
secondsHand.style.top = 50 + '%';
secondsHand.style.transform = 'translate(-100%, -50%)';
secondsHand.style.transformOrigin = 0 + '%', 50 + '%';
secondsHand.style.transform = `rotate(${270}deg)`;
secondsHand.style.zIndex = 3;

// IV. Show rotation of clock's hands
function rotateHands() {
  hoursHand.style.transform = `rotate(${hoursRotation -90}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotation -90}deg)`;
  secondsHand.style.transform = `rotate(${secondsRotation -90}deg)`;
}

function actualHandsRotation() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  // deg for seconds = 360deg / 60sec = 6deg
  secondsRotation = seconds * 6;
  // deg for minutes = 360deg / 600 = 0.6deg
  minutesRotation = minutes * 6;
  // deg for houres = 360deg / 3600sec = 0.1deg 
  hoursRotation = hours * 0.1;

  if(hours > 12) {
    hoursRotation = (hours - 12) * 30;
  } else {
    hoursRotation = hours * 30;
  }

  rotateHands();
};

window.onload = function() {
  actualHandsRotation();
  setInterval(() => {
    actualHandsRotation();
  }, 1000);
};