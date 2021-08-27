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
// Элемент Пар
if (dragObject.elem.parentNode == workArea) {
  if (waterID === null || flameID === null) {
    ;
  } else {
    waterIDX = waterID.getBoundingClientRect().x;
    waterIDY = waterID.getBoundingClientRect().y;
    flameIDX = flameID.getBoundingClientRect().x;
    flameIDY = flameID.getBoundingClientRect().y;
    if (elementsWater.length > 3) {
      elementsWater[0].parentNode.removeChild (elementsWater[0]);
    }
    if (Math.abs(waterIDX - flameIDX) <= 64 && Math.abs (waterIDY - flameIDY) <= 64) {
      flameID.parentNode.removeChild (flameID);
      waterID.parentNode.removeChild (waterID);
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
      flameIDX = flameID.getBoundingClientRect().x
      flameIDY = flameID.getBoundingClientRect().y
      groundIDX = groundID.getBoundingClientRect().x
      groundIDY = groundID.getBoundingClientRect().y
      if (Math.abs(groundIDX - flameIDX) <= 64 && Math.abs (groundIDY - flameIDY) <= 64) {
        flameID.parentNode.removeChild (flameID);
        groundID.parentNode.removeChild (groundID);
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
    el1X = el1Water.getBoundingClientRect().x
    el1Y = el1Water.getBoundingClientRect().y
    el2X = el2Water.getBoundingClientRect().x
    el2Y = el2Water.getBoundingClientRect().y
      if (Math.abs(el1X - el2X) <= 64 && Math.abs (el1Y - el2Y) <= 64) {
        el1Water.parentNode.removeChild (el1Water);
        el2Water.parentNode.removeChild (el2Water);
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
    waterIDX = waterID.getBoundingClientRect().x
    waterIDY = waterID.getBoundingClientRect().y
    groundIDX = groundID.getBoundingClientRect().x
    groundIDY = groundID.getBoundingClientRect().y
    if (Math.abs(groundIDX - waterIDX) <= 64 && Math.abs (groundIDY - waterIDY) <= 64) {
      waterID.parentNode.removeChild (waterID);
      groundID.parentNode.removeChild (groundID);
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
    airIDX = airID.getBoundingClientRect().x
    airIDY = airID.getBoundingClientRect().y
    lavaIDX = lavaID.getBoundingClientRect().x
    lavaIDY = lavaID.getBoundingClientRect().y
    if (Math.abs(lavaIDX - airIDX) <= 64 && Math.abs (lavaIDY - airIDY) <= 64) {
      airID.parentNode.removeChild (airID);
      lavaID.parentNode.removeChild (lavaID);
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
    airIDX = airID.getBoundingClientRect().x
    airIDY = airID.getBoundingClientRect().y
    groundIDX = groundID.getBoundingClientRect().x
    groundIDY = groundID.getBoundingClientRect().y
    if (Math.abs(groundIDX - airIDX) <= 64 && Math.abs (groundIDY - airIDY) <= 64) {
      airID.parentNode.removeChild (airID);
      groundID.parentNode.removeChild (groundID);
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
  }
}