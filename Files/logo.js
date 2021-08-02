const logo = document.getElementById ('logo');
let letters = ['A', 'l', 'c', 'h', 'e', 'm', 'y'];
const flask = document.createElement ('img');
flask.src = 'images/flask1.png';
logo.appendChild (flask);
window.onload = function () {
  var index = 0;
  var id = 'letterNumber';
  for (i = 1; i <= 7; i++) {
    const letter = document.createElement ('span');
    logo.appendChild (letter).id = id + i;
    letter.innerHTML = letters [index];
    index++;
  }
}