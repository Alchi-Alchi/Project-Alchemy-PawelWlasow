let counter = document.getElementById ('counter');
let openedElements = document.getElementById ('openedElements');
let all = document.getElementById ('allElements');
let gameElements = [
  {"rus": "Огонь", "eng": "flame"},
  {"rus": "Вода", "eng": "water"},
  {"rus": "Воздух", "eng": "air"},
  {"rus": "Земля", "eng": "ground"},
  {"rus": "Пар", "eng": "steam"},
  {"rus": "Лава", "eng": "lava"},
  {"rus": "Камень", "eng": "stone"},
  {"rus": "Металл", "eng": "metall"},
  {"rus": "Болото", "eng": "swamp"},
  {"rus": "Песок", "eng": "sand"},
  {"rus": "Озеро", "eng": "lake"},
  {"rus": "Конвекция", "eng": "convection"},
  {"rus": "Облако", "eng": "cloud"},
  {"rus": "Дождь", "eng": "rain"},
  {"rus": "Небо", "eng": "sky"},
  {"rus": "Солнце", "eng": "sun"},
  {"rus": "Растение", "eng": "plant"},
  {"rus": "Жизнь", "eng": "life"},

  // {"rus": "Птица", "eng": "bird"},
  // {"rus": "Гора", "eng": "mount"},
  // {"rus": "Рыба", "eng": "fish"}
];
if (all === null) {
  ;
} else {
  all.innerHTML = gameElements.length;
};
function refresh () {
  if (bank === null) {
    ;
  } else {
    openedElements.innerHTML = bank.children.length;
  }
  if (all === null || openedElements === null) {
    ;
  } else if (all.textContent == openedElements.textContent) {
    modal.style.display = 'block';
    endGame ();
  }
};
refresh ();
let inscription = document.createElement ('p');
inscription.setAttribute ('id', 'inscription');
inscription.innerHTML = 'Открыто элементов:';
if (counter === null) {
  ;
} else {
  counter.prepend (inscription);
};