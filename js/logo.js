const logo = document.getElementById ('logo');
let letters = ['A', 'l', 'c', 'h', 'e', 'm', 'y'];
const flask = document.createElement ('img');
flask.setAttribute ('id', 'logoIMG');
flask.src = 'images/flask1.png';
logo.appendChild (flask);
window.onload = function () {
  let index = 0;
  let id = 'letterNumber';
  for (i = 1; i <= letters.length; i++) {
    const letter = document.createElement ('span');
    logo.appendChild (letter).id = id + i;
    letter.innerHTML = letters [index];
    index++;
  }
}
let basket = document.getElementById ('basket');