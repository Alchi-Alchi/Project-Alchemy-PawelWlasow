var logo = document.getElementById ('logo');
var letters = ['A', 'l', 'c', 'h', 'e', 'm', 'y'];
window.onload = function () {
  var index = 0;
  var id = 'letterNumber';
  for (i = 1; i <= 7; i++) {
    var letter = document.createElement ('span');
    logo.appendChild (letter).id = id + i;
    letter.innerHTML = letters [index];
    index++;
  }
}