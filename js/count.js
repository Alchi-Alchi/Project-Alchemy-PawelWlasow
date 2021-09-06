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
  {"rus": "Человек", "eng": "humans"},
  {"rus": "Птица", "eng": "bird"},
  {"rus": "Гора", "eng": "mount"},
  {"rus": "Вулкан", "eng": "volcano"},
  {"rus": "Тепло", "eng": "warm"},
  {"rus": "Пустыня", "eng": "desert"},
  {"rus": "Кактус", "eng": "cactus"},
  {"rus": "Инструмент", "eng": "tools"},
  {"rus": "Дом", "eng": "house"},
  {"rus": "Радуга", "eng": "rainbow"},
  {"rus": "Дерево", "eng": "tree"},
  {"rus": "Трава", "eng": "grass"},
  {"rus": "Море", "eng": "sea"},
  {"rus": "Океан", "eng": "ocean"},
  {"rus": "Стекло", "eng": "glass"},
  {"rus": "Молния", "eng": "lightning"},
  {"rus": "Давление", "eng": "pressure"},
  {"rus": "Ветер", "eng": "wind"},
  {"rus": "Энергия", "eng": "energy"},
  {"rus": "Волна", "eng": "wave"},
  {"rus": "Лес", "eng": "forest"},
  {"rus": "Волк", "eng": "wolf"},
  {"rus": "Луна", "eng": "moon"},
  {"rus": "Затмение", "eng": "eclipse"},
  {"rus": "Костёр", "eng": "bonfire"},
  {"rus": "Уголь", "eng": "coal"},
  {"rus": "Дым", "eng": "smoke"},
  {"rus": "Алмаз", "eng": "diamond"},
  {"rus": "Сталь", "eng": "steel"},
  {"rus": "Ток", "eng": "current"},
  {"rus": "Магнит", "eng": "magnet"},
  {"rus": "Гроза", "eng": "storm"},
  {"rus": "Феникс", "eng": "phoenix"},
  {"rus": "Посёлок", "eng": "village"},
  {"rus": "Город", "eng": "city"},
  {"rus": "Испарение", "eng": "evaporation"},
  {"rus": "Охлаждение", "eng": "cold"},
  {"rus": "Лёд", "eng": "ice"},
  {"rus": "Снег", "eng": "snow"},
  {"rus": "Айсберг", "eng": "iceberg"},
  {"rus": "Линза", "eng": "lens"},
  {"rus": "Рыцарь", "eng": "knight"},
  {"rus": "Пляж", "eng": "beach"},
  {"rus": "Поле", "eng": "field"},
  {"rus": "Солома", "eng": "straw"},
  {"rus": "Бумага", "eng": "paper"},
  {"rus": "Книги", "eng": "books"},
  {"rus": "Собака", "eng": "dog"},
  {"rus": "Рыба", "eng": "fish"}
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