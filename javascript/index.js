const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconde = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  minDecElement.textContent = min[0];
  minUniElement.textContent = min[1];
  secDecElement.textContent = seconde[0];
  secUniElement.textContent = seconde[1];
}
// printTime();
function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const list = document.createElement('li');
  list.classList.add('list-item');
  list.innerHTML = chronometer.split();
  splitsElement.append(list);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  // console.log(btnLeftElement.classList.contains('start'));
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    printSplit();
  }
  if (btnLeftElement.classList.contains('start')) {
    chronometer.reset();
  }
});
