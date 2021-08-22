let timeWindow = document.getElementById ('timer');
let startButton = document.getElementById ('startGame');
let endButton = document.getElementById ('endGame');
let timer;
let modal = document.getElementById ('modalWindow');
let okBtn = document.getElementById ('modalBtn');
let nameA = document.getElementById ('nameA');
okBtn.addEventListener ('click', function () {
  if (nameA.value !== '') {
    modal.style.display = 'none';
    console.log (nameA.value)
  }
});
startButton.addEventListener ('click', function () {
  timeWindow.started =  new Date;
  timeWindow.update = ms => timeWindow.innerHTML = new Date (ms).toISOString().split(/T|\./)[1];
  timer = setInterval (() => timeWindow.update(new Date - timeWindow.started), 500);
});
endButton.addEventListener ('click', function () {
  clearInterval (timer);
});