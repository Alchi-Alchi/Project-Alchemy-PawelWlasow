function soundElem() {
  let audio = new Audio();
  audio.src = 'audio/newElem.mp3';
  audio.autoplay = true;
}
function deleteElem() {
  let audio = new Audio();
  audio.src = 'audio/deleteElem.mp3';
  audio.autoplay = true;
}
function endGame() {
  let audio = new Audio();
  audio.src = 'audio/end.mp3';
  audio.autoplay = true;
}
function gameMelody() {
  let audio = new Audio();
  audio.src = 'audio/gameMelody.mp3';
  audio.autoplay = true;
} 
let controlSound = document.getElementById ('sound');
let controlMusic = document.getElementById ('music');
function check () {
  if (controlMusic.checked) {
    gameMelody ();
  } else {
    
  }
}