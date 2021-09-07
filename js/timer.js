let timeWindow = document.getElementById ('timer');
let startButton = document.getElementById ('startBtn');
let gamePage = document.getElementById ('gamePage');
let endButton = document.getElementById ('endGame');
let rulesBtn = document.getElementById ('rulesBtn');
let scoreBtn = document.getElementById ('scoreBtn');
let timer = document.getElementById ('timer');
let modal = document.getElementById ('modalWindow');
let okBtn = document.getElementById ('modalBtn');
let cancelBtn = document.getElementById ('modalBtnCancel');
let nameA = document.getElementById ('nameA');
let player = {};
function makeKey() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
  for (let i = 0; i < 7; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
function removeNote () {
  if (timer.textContent !== '00:00:00') {
    rulesBtn.classList.remove ('btn');
    endButton.classList.remove ('btn');
    scoreBtn.classList.remove ('btn');
  }
  clearInterval (timer);
  timeWindow.textContent = '00:00:00';
};
scoreBtn.addEventListener ('click', removeNote);
rulesBtn.addEventListener ('click', removeNote);
okBtn.addEventListener ('click', function () {
  if (nameA.value !== '') {
    modal.style.display = 'none';
    clearInterval (timer);
    player.name = nameA.value;
    player.time = timeWindow.textContent;
    player.elements = openedElements.textContent + ' из ' + all.textContent;
    let sPlayer = JSON.stringify (player);
    localStorage.setItem ('key' + makeKey(), sPlayer);
    rulesBtn.classList.remove ('btn');
    endButton.classList.remove ('btn');
    scoreBtn.classList.remove ('btn');
  }
});
cancelBtn.addEventListener ('click', function () {
  modal.style.display = 'none';
  clearInterval (timer);
});
if (startButton === null) {
  ;
} else {
  startButton.addEventListener ('click', function () {
    timeWindow.started =  new Date;
    timeWindow.update = ms => timeWindow.innerHTML = new Date (ms).toISOString().split(/T|\./)[1];
    timer = setInterval (() => timeWindow.update(new Date - timeWindow.started), 500);
    startButton.style.display = 'none';
    rulesBtn.classList.add ('btn');
    endButton.classList.add ('btn');
    scoreBtn.classList.add ('btn');
  });
};
endButton.addEventListener ('click', function () {
  if (timer === undefined) {
    ;
  } else if (timeWindow.textContent !== '00:00:00') {
    modal.style.display = 'block';
    clearInterval (timer);
    rulesBtn.classList.remove ('btn');
    endButton.classList.remove ('btn');
    scoreBtn.classList.remove ('btn');
  }
});
gamePage.addEventListener ('click', function () {
  if (timer === undefined) {
    ;
  } else if (timer.textContent === '00:00:00') {
    startButton.style.display = 'block';
  }
});