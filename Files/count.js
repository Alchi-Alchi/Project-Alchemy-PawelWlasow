let counter = document.getElementById ('counter');
let openedElements = document.getElementById ('openedElements');
let all = document.getElementById ('allElements');
let gameElements = [
  {"rus": "Огонь", "eng": "flame"},
  {"rus": "Вода", "eng": "water"},
  {"rus": "Воздух", "eng": "air"},
  {"rus": "Земля", "eng": "ground"},
  {"rus": "Жизнь", "eng": "life"},
  {"rus": "Дерево", "eng": "tree"},
  {"rus": "Человек", "eng": "humans"},
  {"rus": "Небо", "eng": "sky"},
  {"rus": "Птица", "eng": "bird"},
  {"rus": "Камень", "eng": "stone"},
  {"rus": "Гора", "eng": "mount"},
  {"rus": "Рыба", "eng": "fish"}
];
all.innerHTML = gameElements.length;
openedElements.innerHTML = bank.children.length;