DragManager.onDragCancel = function(dragObject) {
  dragObject.avatar.rollback();
};
DragManager.onDragEnd = function(dragObject, dropElem) {
  if (dropElem.closest('#basket')) {
    dragObject.elem.parentNode.removeChild (dragObject.elem);
    deleteElem ();
    dropElem.classList.remove('basketUsual');
    dropElem.classList.add('basketDrop');
    setTimeout(function() {
      dropElem.classList.remove('basketDrop');
      dropElem.classList.add('basketUsual');
    }, 200);
  } else if (dropElem.closest('#workField')) {
    let workField = document.getElementById ('workField').appendChild (dragObject.elem);
  } else if (dropElem.closest('#bankOfElements')) {
    dragObject.elem.style.display = 'none';
  } 
};
DragManager.transformEl = function (dragObject, dropElem) {
let workArea = document.getElementById ('workField');
let storage = document.getElementById ('bankOfElements');
let waterID = document.getElementById ('waterID');
let elementsWater = document.getElementsByName ('water');
el1Water = elementsWater[0];
el2Water = elementsWater[1];
let flameID = document.getElementById ('flameID');
let elementsFlame = document.getElementsByName ('flame');
let airID = document.getElementById ('airID');
let groundID = document.getElementById ('groundID');
let steam = document.getElementById ('steamID');
let lava = document.getElementById ('lavaID');
let stone = document.getElementById ('stoneID');
let metall = document.getElementById ('metallID');
let sand = document.getElementById ('sandID');
let lake = document.getElementById ('lakeID');
let swamp = document.getElementById ('swampID');
let convection = document.getElementById ('convectionID');
let clouds = document.getElementById ('cloudsID');
let sky = document.getElementById ('skyID');
let plant = document.getElementById ('plantID');
let life = document.getElementById ('lifeID');
let sun = document.getElementById ('sunID');
let rain = document.getElementById ('rainID');
// Элемент Пар
if (dragObject.elem.parentNode == workArea) {
  if (waterID === null || flameID === null) {
    ;
  } else {
    waterIDX = waterID.getBoundingClientRect().x;
    waterIDY = waterID.getBoundingClientRect().y;
    flameIDX = flameID.getBoundingClientRect().x;
    flameIDY = flameID.getBoundingClientRect().y;
    if (Math.abs(waterIDX - flameIDX) <= 64 && Math.abs (waterIDY - flameIDY) <= 64) {
      flameID.classList.add ('transformation');
      waterID.classList.add ('transformation');
      function deleteEl () {
        flameID.parentNode.removeChild (flameID);
        waterID.parentNode.removeChild (waterID);
      }
      setTimeout (deleteEl, 1000);
      soundElem ();


      steam = document.createElement ('img');
      steam.setAttribute ('id', 'steam');
      steam.classList.add ('base');
      steam.setAttribute ('title', 'Пар');
      steam.setAttribute ('alt', 'steam');
      steam.setAttribute ('src', 'icons/' + 'steam' + '.png');
      if ((!storage.children.steam)) {
        storage.appendChild (steam);
        steam.click ();
      } else {
        storage.children.steam.click ();
      }
      refresh ();
    }
  }
// Элемент Лава
  if (groundID === null || flameID === null) {
    ;
  } else {
      flameIDX = flameID.getBoundingClientRect().x;
      flameIDY = flameID.getBoundingClientRect().y;
      groundIDX = groundID.getBoundingClientRect().x;
      groundIDY = groundID.getBoundingClientRect().y;
      if (Math.abs(groundIDX - flameIDX) <= 64 && Math.abs (groundIDY - flameIDY) <= 64) {
        flameID.classList.add ('transformation');
        groundID.classList.add ('transformation');
        function deleteEl () {
          flameID.parentNode.removeChild (flameID);
          groundID.parentNode.removeChild (groundID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        lava = document.createElement ('img');
        lava.setAttribute ('id', 'lava');
        lava.classList.add ('base');
        lava.setAttribute ('title', 'Лава');
        lava.setAttribute ('alt', 'lava');
        lava.setAttribute ('src', 'icons/' + 'lava' + '.png');
        if ((!storage.children.lava)) {
          storage.appendChild (lava);
          lava.click ();
        } else {
          storage.children.lava.click ();
        }
        refresh ();
      }
    }
// Элемент Озеро
  if (el1Water === null || el2Water === null || el2Water === undefined) {
    ;
  } else {
    el1X = el1Water.getBoundingClientRect().x;
    el1Y = el1Water.getBoundingClientRect().y;
    el2X = el2Water.getBoundingClientRect().x;
    el2Y = el2Water.getBoundingClientRect().y;
    if (Math.abs(el1X - el2X) <= 64 && Math.abs (el1Y - el2Y) <= 64) {
      el1Water.classList.add ('transformation');
      el2Water.classList.add ('transformation');
      function deleteEl () {
        el1Water.parentNode.removeChild (el1Water);
        el2Water.parentNode.removeChild (el2Water);
      }
      setTimeout (deleteEl, 1000);
      soundElem ();
      lake = document.createElement ('img');
      lake.setAttribute ('id', 'lake');
      lake.classList.add ('base');
      lake.setAttribute ('title', 'Озеро');
      lake.setAttribute ('alt', 'lake');
      lake.setAttribute ('src', 'icons/' + 'lake' + '.png');
      if ((!storage.children.lake)) {
        storage.appendChild (lake);
        lake.click ();
      } else {
        storage.children.lake.click ();
      }
      refresh ();
    }
  }
// Элемент Болото
  if (groundID === null || waterID === null) {
    ;
  } else {
    waterIDX = waterID.getBoundingClientRect().x;
    waterIDY = waterID.getBoundingClientRect().y;
    groundIDX = groundID.getBoundingClientRect().x;
    groundIDY = groundID.getBoundingClientRect().y;
    if (Math.abs(groundIDX - waterIDX) <= 64 && Math.abs (groundIDY - waterIDY) <= 64) {
      groundID.classList.add ('transformation');
      waterID.classList.add ('transformation');
      function deleteEl () {
        waterID.parentNode.removeChild (waterID);
        groundID.parentNode.removeChild (groundID);
      }
      setTimeout (deleteEl, 1000);
      soundElem ();
      swamp = document.createElement ('img');
      swamp.setAttribute ('id', 'swamp');
      swamp.classList.add ('base');
      swamp.setAttribute ('title', 'Болото');
      swamp.setAttribute ('alt', 'swamp');
      swamp.setAttribute ('src', 'icons/' + 'swamp' + '.png');
      if ((!storage.children.swamp)) {
        storage.appendChild (swamp);
        swamp.click ();
      } else {
          storage.children.swamp.click ();
        }
        refresh ();
      }
    }
// Камень, Металл
  if (airID === null || lava === null) {
    ;
  } else {
    airIDX = airID.getBoundingClientRect().x;
    airIDY = airID.getBoundingClientRect().y;
    lavaIDX = lavaID.getBoundingClientRect().x;
    lavaIDY = lavaID.getBoundingClientRect().y;
    if (Math.abs(lavaIDX - airIDX) <= 64 && Math.abs (lavaIDY - airIDY) <= 64) {
      airID.classList.add ('transformation');
      lava.classList.add ('transformation');
      function deleteEl () {
        airID.parentNode.removeChild (airID);
        lavaID.parentNode.removeChild (lavaID);
      }
      setTimeout (deleteEl, 1000);
      soundElem ();
      metall = document.createElement ('img');
      metall = document.createElement ('img');
      metall.setAttribute ('id', 'metall');
      metall.classList.add ('base');
      metall.setAttribute ('title', 'Металл');
      metall.setAttribute ('alt', 'metall');
      metall.setAttribute ('src', 'icons/' + 'metall' + '.png');
      stone = document.createElement ('img');
      stone.setAttribute ('id', 'stone');
      stone.classList.add ('base');
      stone.setAttribute ('title', 'Камень');
      stone.setAttribute ('alt', 'stone');
      stone.setAttribute ('src', 'icons/' + 'stone' + '.png');
      if ((!storage.children.stone) && (!storage.children.metall)) {
        storage.appendChild (stone);
        storage.appendChild (metall);
        stone.click ();
        metall.click ();
      } else {
          storage.children.stone.click ();
          storage.children.metall.click ();
        }
        refresh ();
      }
    }
// Элемент Песок
  if (groundID === null || airID === null) {
    ;
  } else {
    airIDX = airID.getBoundingClientRect().x;
    airIDY = airID.getBoundingClientRect().y;
    groundIDX = groundID.getBoundingClientRect().x;
    groundIDY = groundID.getBoundingClientRect().y;
    if (Math.abs(groundIDX - airIDX) <= 64 && Math.abs (groundIDY - airIDY) <= 64) {
      groundID.classList.add ('transformation');
      airID.classList.add ('transformation');
      function deleteEl () {
        airID.parentNode.removeChild (airID);
        groundID.parentNode.removeChild (groundID);
      }
      setTimeout (deleteEl, 1000);
      soundElem ();
      sand = document.createElement ('img');
      sand.setAttribute ('id', 'sand');
      sand.classList.add ('base');
      sand.setAttribute ('title', 'Песок');
      sand.setAttribute ('alt', 'sand');
      sand.setAttribute ('src', 'icons/' + 'sand' + '.png');
      if ((!storage.children.sand)) {
        storage.appendChild (sand);
        sand.click ();
      } else {
          storage.children.sand.click ();
        }
        refresh ();
      }
    }
  // Конвекция
  if (airID === null || flameID === null) {
    ;
  } else {
      flameIDX = flameID.getBoundingClientRect().x;
      flameIDY = flameID.getBoundingClientRect().y;
      airIDX = airID.getBoundingClientRect().x;
      airIDY = airID.getBoundingClientRect().y;
      if (Math.abs(airIDX - flameIDX) <= 64 && Math.abs (airIDY - flameIDY) <= 64) {
        flameID.classList.add ('transformation');
        airID.classList.add ('transformation');
        function deleteEl () {
          flameID.parentNode.removeChild (flameID);
          airID.parentNode.removeChild (airID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        convection = document.createElement ('img');
        convection.setAttribute ('id', 'convection');
        convection.classList.add ('base');
        convection.setAttribute ('title', 'Конвекция');
        convection.setAttribute ('alt', 'convection');
        convection.setAttribute ('src', 'icons/' + 'convection' + '.png');
        if ((!storage.children.convection)) {
          storage.appendChild (convection);
          convection.click ();
        } else {
          storage.children.convection.click ();
        }
        refresh ();
      }
    }
  // Облако
  if (steam === null || convection === null) {
    ;
  } else {
      convectionIDX = convection.getBoundingClientRect().x;
      convectionIDY = convection.getBoundingClientRect().y;
      steamIDX = steamID.getBoundingClientRect().x;
      steamIDY = steamID.getBoundingClientRect().y;
      if (Math.abs(steamIDX - convectionIDX) <= 64 && Math.abs (steamIDY - convectionIDY) <= 64) {
        convectionID.classList.add ('transformation');
        steamID.classList.add ('transformation');
        function deleteEl () {
          convectionID.parentNode.removeChild (convectionID);
          steamID.parentNode.removeChild (steamID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        clouds = document.createElement ('img');
        clouds.setAttribute ('id', 'clouds');
        clouds.classList.add ('base');
        clouds.setAttribute ('title', 'Облако');
        clouds.setAttribute ('alt', 'clouds');
        clouds.setAttribute ('src', 'icons/' + 'clouds' + '.png');
        if ((!storage.children.clouds)) {
          storage.appendChild (clouds);
          clouds.click ();
        } else {
          storage.children.clouds.click ();
        }
        refresh ();
      }
    }
  //Дождь
  if (clouds === null || waterID === null) {
    ;
  } else {
      waterIDX = waterID.getBoundingClientRect().x;
      waterIDY = waterID.getBoundingClientRect().y;
      cloudsIDX = cloudsID.getBoundingClientRect().x;
      cloudsIDY = cloudsID.getBoundingClientRect().y;
      if (Math.abs (cloudsIDX - waterIDX) <= 64 && Math.abs (cloudsIDY - waterIDY) <= 64) {
        waterID.classList.add ('transformation');
        cloudsID.classList.add ('transformation');
        function deleteEl () {
          waterID.parentNode.removeChild (waterID);
          cloudsID.parentNode.removeChild (cloudsID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        rain = document.createElement ('img');
        rain.setAttribute ('id', 'rain');
        rain.classList.add ('base');
        rain.setAttribute ('title', 'Дождь');
        rain.setAttribute ('alt', 'rain');
        rain.setAttribute ('src', 'icons/' + 'rain' + '.png');
        if ((!storage.children.rain)) {
          storage.appendChild (rain);
          rain.click ();
        } else {
          storage.children.rain.click ();
        }
        refresh ();
      }
    }
  //Небо
  if (clouds === null || airID === null) {
    ;
  } else {
      airIDX = airID.getBoundingClientRect().x;
      airIDY = airID.getBoundingClientRect().y;
      cloudsIDX = cloudsID.getBoundingClientRect().x;
      cloudsIDY = cloudsID.getBoundingClientRect().y;
      if (Math.abs (cloudsIDX - airIDX) <= 64 && Math.abs (cloudsIDY - airIDY) <= 64) {
        airID.classList.add ('transformation');
        cloudsID.classList.add ('transformation');
        function deleteEl () {
          airID.parentNode.removeChild (airID);
          cloudsID.parentNode.removeChild (cloudsID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        sky = document.createElement ('img');
        sky.setAttribute ('id', 'sky');
        sky.classList.add ('base');
        sky.setAttribute ('title', 'Небо');
        sky.setAttribute ('alt', 'sky');
        sky.setAttribute ('src', 'icons/' + 'sky' + '.png');
        if ((!storage.children.sky)) {
          storage.appendChild (sky);
          sky.click ();
        } else {
          storage.children.sky.click ();
        }
        refresh ();
      }
    }
  //Солнце
  if (sky === null || flameID === null) {
    ;
  } else {
      flameIDX = flameID.getBoundingClientRect().x;
      flameIDY = flameID.getBoundingClientRect().y;
      skyIDX = skyID.getBoundingClientRect().x;
      skyIDY = skyID.getBoundingClientRect().y;
      if (Math.abs (skyIDX - flameIDX) <= 64 && Math.abs (skyIDY - flameIDY) <= 64) {
        flameID.classList.add ('transformation');
        skyID.classList.add ('transformation');
        function deleteEl () {
          flameID.parentNode.removeChild (flameID);
          skyID.parentNode.removeChild (skyID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        sun = document.createElement ('img');
        sun.setAttribute ('id', 'sun');
        sun.classList.add ('base');
        sun.setAttribute ('title', 'Солнце');
        sun.setAttribute ('alt', 'sun');
        sun.setAttribute ('src', 'icons/' + 'sun' + '.png');
        if ((!storage.children.sun)) {
          storage.appendChild (sun);
          sun.click ();
        } else {
          storage.children.sun.click ();
        }
        refresh ();
      }
    }
  //Растение, Жизнь
  if (sun === null || groundID === null || rain === null) {
    ;
  } else {
      groundIDX = groundID.getBoundingClientRect().x;
      groundIDY = groundID.getBoundingClientRect().y;
      sunIDX = sunID.getBoundingClientRect().x;
      sunIDY = sunID.getBoundingClientRect().y;
      rainIDX = rainID.getBoundingClientRect().x;
      rainIDY = rainID.getBoundingClientRect().y;
      if (Math.abs (sunIDX - groundIDX && sunIDX - rainIDX) <= 64 && Math.abs (sunIDY - groundIDY && sunIDY - rainIDY) <= 64) {
        groundID.classList.add ('transformation');
        sunID.classList.add ('transformation');
        rainID.classList.add ('transformation');
        function deleteEl () {
          groundID.parentNode.removeChild (groundID);
          sunID.parentNode.removeChild (sunID);
          rainID.parentNode.removeChild (rainID);
        }
        setTimeout (deleteEl, 1000);
        soundElem ();
        life = document.createElement ('img');
        plant = document.createElement ('img');
        life.setAttribute ('id', 'life');
        plant.setAttribute ('id', 'plant');
        life.classList.add ('base');
        plant.classList.add ('base');
        life.setAttribute ('title', 'Жизнь');
        plant.setAttribute ('title', 'Растение');
        life.setAttribute ('alt', 'life');
        plant.setAttribute ('alt', 'plant');
        life.setAttribute ('src', 'icons/' + 'life' + '.png');
        plant.setAttribute ('src', 'icons/' + 'plant' + '.png');
        if ((!storage.children.plant) && (!storage.children.life)) {
          storage.appendChild (plant);
          storage.appendChild (life);
          plant.click ();
          life.click ();
        } else {
          storage.children.plant.click ();
          storage.children.life.click ();
        }
        refresh ();
      }
    }
  //  
  }
}