let controlSound = document.getElementById ('sound');
function soundElem() {
  if (controlSound.checked) {
    let audio = new Audio();
    audio.src = 'audio/newElem.mp3';
    audio.autoplay = true;
  }
}
function deleteElem() {
  if (controlSound.checked) {
    let audio = new Audio();
    audio.src = 'audio/deleteElem.mp3';
    audio.autoplay = true;
  }
}
function endGame() {
  if (controlSound.checked) {
    let audio = new Audio();
    audio.src = 'audio/end.mp3';
    audio.autoplay = true;
  }
}
let controlMusic = document.getElementById ('music');
let playing = false;
let soundtrack = new Audio('audio/gameMelody.mp3');
soundtrack.autoplay = true;
soundtrack.loop = true;
controlMusic.addEventListener ('change', gameMelody)
function gameMelody() {
  if( playing) {
    soundtrack.pause();
  } else {
    soundtrack.play();
  }
  playing = !playing;
};