let timeWindow = document.getElementById ('timer');
let startButton = document.getElementById ('startBtn');
let gamePage = document.getElementById ('gamePage');
let endButton = document.getElementById ('endGame');
let timer;
let modal = document.getElementById ('modalWindow');
let okBtn = document.getElementById ('modalBtn');
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
okBtn.addEventListener ('click', function () {
  if (nameA.value !== '') {
    modal.style.display = 'none';
    clearInterval (timer);
    player.name = nameA.value;
    player.time = timeWindow.textContent;
    player.elements = all.textContent + '/' + openedElements.textContent;
    let sPlayer = JSON.stringify (player);
    localStorage.setItem ('key' + makeKey(), sPlayer);
  }
});
if (startButton === null) {
  ;
} else {
  startButton.addEventListener ('click', function () {
    timeWindow.started =  new Date;
    timeWindow.update = ms => timeWindow.innerHTML = new Date (ms).toISOString().split(/T|\./)[1];
    timer = setInterval (() => timeWindow.update(new Date - timeWindow.started), 500);
    startButton.style.display = 'none';
  });
};

endButton.addEventListener ('click', function () {
  clearInterval (timer);
});
gamePage.addEventListener ('click', function () {
  if (timer === undefined) {
    ;
  } else if (timer.textContent === '00:00:00') {
    startButton.style.display = 'block';
  }
});