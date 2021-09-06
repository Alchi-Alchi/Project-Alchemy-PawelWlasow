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
let flameID = document.getElementById ('flameID');
let elementsFlame = document.getElementsByName ('flame');
let airID = document.getElementById ('airID');
let elementsAir = document.getElementsByName ('air');
let groundID = document.getElementById ('groundID');
let elementsGround = document.getElementsByName ('ground');
let steam = document.getElementById ('steamID');
let elementsSteam = document.getElementsByName ('steam');
let lava = document.getElementById ('lavaID');
let elementsLava = document.getElementsByName ('lava');
let stone = document.getElementById ('stoneID');
let elementsStone = document.getElementsByName ('stone');
let metall = document.getElementById ('metallID');
let sand = document.getElementById ('sandID');
let elementsSand = document.getElementsByName ('sand');
let lake = document.getElementById ('lakeID');
let elementsLake = document.getElementsByName ('lake');
let swamp = document.getElementById ('swampID');
let convection = document.getElementById ('convectionID');
let clouds = document.getElementById ('cloudsID');
let sky = document.getElementById ('skyID');
let plant = document.getElementById ('plantID');
let tree = document.getElementById ('treeID');
let elementsTree = document.getElementsByName ('tree');
let grass = document.getElementById ('grassID');
let life = document.getElementById ('lifeID');
let sun = document.getElementById ('sunID');
let elementsSun = document.getElementsByName ('sun');
let rain = document.getElementById ('rainID');
let elementsRain = document.getElementsByName ('rain');
let humans = document.getElementById ('humansID');
let elementsHumans = document.getElementsByName ('humans');
let warm = document.getElementById ('warmID');
let volcano = document.getElementById ('volcanoID');
let sea = document.getElementById ('seaID');
let elementsSea = document.getElementsByName ('sea');
let ocean = document.getElementById ('oceanID');
let mount = document.getElementById ('mountID');
let desert = document.getElementById ('desertID');
let elementsDesert = document.getElementsByName ('desert');
let tools = document.getElementById ('toolsID');
let elementsTools = document.getElementsByName ('tools');
let house = document.getElementById ('houseID');
let elementsHouse = document.getElementsByName ('house');
let rainbow = document.getElementById ('rainbowID');
let glass = document.getElementById ('glassID');
let lightning = document.getElementById ('lightningID');
let elementsLightning = document.getElementsByName ('lightning');
let pressure = document.getElementById ('pressureID');
let bird = document.getElementById ('birdID');
let fish = document.getElementById ('fishID');
let wind = document.getElementById ('windID');
let wave = document.getElementById ('waveID');
let forest = document.getElementById ('forestID');
let elementsForest = document.getElementsByName ('forest');
let moon = document.getElementById ('moonID');
let eclipse = document.getElementById ('eclipseID');
let bonfire = document.getElementById ('bonfireID');
let coal = document.getElementById ('coalID');
let elementsCoal = document.getElementsByName ('coal');
let smoke = document.getElementById ('smokeID');
let diamond = document.getElementById ('diamondID');
let steel = document.getElementById ('steelID');
let current = document.getElementById ('currentID');
let magnet = document.getElementById ('magnetID');
let energy = document.getElementById ('energyID');
let lens = document.getElementById ('lensID');
let village = document.getElementById ('villageID');
let elementsVillage = document.getElementsByName ('village');
let city = document.getElementById ('cityID');
let knight = document.getElementById ('knightID');
let beach = document.getElementById ('beachID');
let field = document.getElementById ('fieldID');
let evaporation = document.getElementById ('evaporationID');
let cold = document.getElementById ('coldID');
let ice = document.getElementById ('iceID');
let elementsIce = document.getElementsByName ('ice');
let iceberg = document.getElementById ('icebergID');
let snow = document.getElementById ('snowID');
let straw = document.getElementById ('strawID');
let paper = document.getElementById ('paperID');
let books = document.getElementById ('booksID');
let storm = document.getElementById ('stormID');
let phoenix = document.getElementById ('phoenixID');
let wolf = document.getElementById ('wolfID');
let dog = document.getElementById ('dogID');
if (dragObject.elem.parentNode == workArea) {
  // Элемент Пар
  function steamAdd () {
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
  function waterForSteam () {
    elementsWater.forEach (function (item) {
      if (item === null || flameID === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - flameID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - flameID.getBoundingClientRect().y <= 64)) {
        flameID.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          flameID.parentNode.removeChild (flameID);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        steamAdd();
      }
    });
  }
  waterForSteam();
// Элемент Лава
function lavaAdd () {
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
function flameForLava () {
  elementsFlame.forEach (function (item) {
    if (item === null || groundID === null) {
      ;
    } else if (Math.abs(item.getBoundingClientRect().x - groundID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - groundID.getBoundingClientRect().y <= 64)) {
      groundID.classList.add ('transformation');
      item.classList.add ('transformation');
      function deleteEl () {
        groundID.parentNode.removeChild (groundID);
        item.parentNode.removeChild (item);
      }
      setTimeout (deleteEl, 1000);
      lavaAdd ();
    }
  });
}
flameForLava();
// Элемент Озеро
function lakeAdd () {
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
function waterForLake () {
  elementsWater.forEach (function (item) {
    if (item === null || waterID === null) {
      ;
    } else if (Math.abs(item.getBoundingClientRect().x - waterID.getBoundingClientRect().x) <= 32 && Math.abs(item.getBoundingClientRect().y - waterID.getBoundingClientRect().y <= 32) && item.dataset.id !== waterID.dataset.id) {
      waterID.classList.add ('transformation');
      item.classList.add ('transformation');
      function deleteEl () {
        waterID.parentNode.removeChild (waterID);
        item.parentNode.removeChild (item);
      }
      setTimeout (deleteEl, 1000);
      lakeAdd ();
    }
  });
}
waterForLake ();
// Элемент Болото
function swampAdd () {
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
function waterForSwamp () {
  elementsWater.forEach (function (item) {
    if (item === null || groundID === null) {
      ;
    } else if (Math.abs(item.getBoundingClientRect().x - groundID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - groundID.getBoundingClientRect().y) <= 64) {
      groundID.classList.add ('transformation');
      item.classList.add ('transformation');
      function deleteEl () {
        groundID.parentNode.removeChild (groundID);
        item.parentNode.removeChild (item);
      }
      setTimeout (deleteEl, 1000);
      swampAdd ();
    }
  });
}
waterForSwamp ();
// Камень, Металл
function metallAdd () {
  soundElem ();
  metall = document.createElement ('img');
  metall.setAttribute ('id', 'metall');
  metall.classList.add ('base');
  metall.setAttribute ('title', 'Металл');
  metall.setAttribute ('alt', 'metall');
  metall.setAttribute ('src', 'icons/' + 'metall' + '.png');
  if ((!storage.children.metall)) {
    storage.appendChild (metall);
    metall.click ();
  } else {
      storage.children.metall.click ();
    }
  refresh ();
}
function stoneAdd () {
  soundElem ();
  stone = document.createElement ('img');
  stone.setAttribute ('id', 'stone');
  stone.classList.add ('base');
  stone.setAttribute ('title', 'Камень');
  stone.setAttribute ('alt', 'stone');
  stone.setAttribute ('src', 'icons/' + 'stone' + '.png');
  if ((!storage.children.stone)) {
    storage.appendChild (stone);
    stone.click ();
  } else {
      storage.children.stone.click ();
    }
  refresh ();
}
function airForMetallAndStone () {
  elementsAir.forEach (function (item) {
    if (item === null || lava === null) {
      ;
    } else if (Math.abs(item.getBoundingClientRect().x - lava.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - lava.getBoundingClientRect().y) <= 64) {
      lava.classList.add ('transformation');
      item.classList.add ('transformation');
      function deleteEl () {
        lava.parentNode.removeChild (lava);
        item.parentNode.removeChild (item);
      }
      setTimeout (deleteEl, 1000);
      stoneAdd ();
      metallAdd ();
    }
  });
};
airForMetallAndStone ();
// Элемент Песок
function sandAdd () {
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
function groundForSand () {
  elementsGround.forEach (function (item) {
    if (item === null || airID === null) {
      ;
    } else if (Math.abs(item.getBoundingClientRect().x - airID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - airID.getBoundingClientRect().y) <= 64) {
      airID.classList.add ('transformation');
      item.classList.add ('transformation');
      function deleteEl () {
        airID.parentNode.removeChild (airID);
        item.parentNode.removeChild (item);
      }
      setTimeout (deleteEl, 1000);
      sandAdd ();
    }
  });
};
groundForSand ();
  // Конвекция
  function convectionAdd () {
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
  function flameForConvection () {
    elementsFlame.forEach (function (item) {
      if (item === null || airID === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - airID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - airID.getBoundingClientRect().y) <= 64) {
        airID.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          airID.parentNode.removeChild (airID);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        convectionAdd ();
      }
    });
  };
  flameForConvection ();
  // Облако
  function cloudsAdd () {
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
  function steamForClouds () {
    elementsSteam.forEach (function (item) {
      if (item === null || convection === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - convection.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - convection.getBoundingClientRect().y) <= 64) {
        convection.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          convection.parentNode.removeChild (convection);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        cloudsAdd ();
      }
    });
  };
  steamForClouds ();
  //Дождь
  function rainAdd () {
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
  };
  function waterForRain () {
    elementsWater.forEach (function (item) {
      if (item === null || clouds === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - clouds.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - clouds.getBoundingClientRect().y) <= 64) {
        clouds.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          clouds.parentNode.removeChild (clouds);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        rainAdd ();
      }
    });
  };
  waterForRain ();
  //Небо
  function skyAdd () {
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
  };
  function airForSky () {
    elementsAir.forEach (function (item) {
      if (item === null || clouds === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - clouds.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - clouds.getBoundingClientRect().y) <= 64) {
        clouds.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          clouds.parentNode.removeChild (clouds);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        skyAdd ();
      }
    });
  };
  airForSky ();
  //Солнце, Тепло
  function sunAdd () {
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
  };
  function warmAdd () {
    soundElem ();
    warm = document.createElement ('img');
    warm.setAttribute ('id', 'warm');
    warm.classList.add ('base');
    warm.setAttribute ('title', 'Тепло');
    warm.setAttribute ('alt', 'warm');
    warm.setAttribute ('src', 'icons/' + 'warm' + '.png');
    if ((!storage.children.warm)) {
      storage.appendChild (warm);
      warm.click ();
    } else {
        storage.children.warm.click ();
      }
    refresh ();
  };
  function flameForSun () {
    elementsFlame.forEach (function (item) {
      if (item === null || sky === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sky.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sky.getBoundingClientRect().y) <= 64) {
        sky.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sky.parentNode.removeChild (sky);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        sunAdd ();
        warmAdd ();
      }
    });
  };
  flameForSun ();
  //Растение, Жизнь, Радуга
  function lifeAdd () {
    soundElem ();
    life = document.createElement ('img');
    life.setAttribute ('id', 'life');
    life.classList.add ('base');
    life.setAttribute ('title', 'Жизнь');
    life.setAttribute ('alt', 'life');
    life.setAttribute ('src', 'icons/' + 'life' + '.png');
    if ((!storage.children.life)) {
      storage.appendChild (life);
      life.click ();
    } else {
        storage.children.life.click ();
      }
    refresh ();
  };
  function plantAdd () {
    soundElem ();
    plant = document.createElement ('img');
    plant.setAttribute ('id', 'plant');
    plant.classList.add ('base');
    plant.setAttribute ('title', 'Растение');
    plant.setAttribute ('alt', 'plant');
    plant.setAttribute ('src', 'icons/' + 'plant' + '.png');
    if ((!storage.children.plant)) {
      storage.appendChild (plant);
      plant.click ();
    } else {
        storage.children.plant.click ();
      }
    refresh ();
  };
  function rainbowAdd () {
    soundElem ();
    rainbow = document.createElement ('img');
    rainbow.setAttribute ('id', 'rainbow');
    rainbow.classList.add ('base');
    rainbow.setAttribute ('title', 'Радуга');
    rainbow.setAttribute ('alt', 'rainbow');
    rainbow.setAttribute ('src', 'icons/' + 'rainbow' + '.png');
    if ((!storage.children.rainbow)) {
      storage.appendChild (rainbow);
      rainbow.click ();
    } else {
        storage.children.rainbow.click ();
      }
    refresh ();
  };
  function groundForPlantLifeAndRainbow () {
    elementsGround.forEach (function (item) {
      if (item === null || sun === null || rain === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sun.getBoundingClientRect().x && item.getBoundingClientRect ().x - rain.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sun.getBoundingClientRect().y && item.getBoundingClientRect ().y - rain.getBoundingClientRect().y) <= 64) {
        sun.classList.add ('transformation');
        rain.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sun.parentNode.removeChild (sun);
          rain.parentNode.removeChild (rain);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        plantAdd ();
        lifeAdd ();
        rainbowAdd ();
      }
    });
  };
  groundForPlantLifeAndRainbow ();
  //Человек
  function humansAdd () {
    soundElem ();
    humans = document.createElement ('img');
    humans.setAttribute ('id', 'humans');
    humans.classList.add ('base');
    humans.setAttribute ('title', 'Жизнь');
    humans.setAttribute ('alt', 'humans');
    humans.setAttribute ('src', 'icons/' + 'humans' + '.png');
    if ((!storage.children.humans)) {
      storage.appendChild (humans);
      humans.click ();
    } else {
        storage.children.humans.click ();
      }
    refresh ();
  };
  function groundForHumans () {
    elementsGround.forEach (function (item) {
      if (item === null || life === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - life.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - life.getBoundingClientRect().y) <= 64) {
        life.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          life.parentNode.removeChild (life);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        humansAdd ();
      }
    });
  };
  groundForHumans ();
  //Гора
  function mountAdd () {
    soundElem ();
    mount = document.createElement ('img');
    mount.setAttribute ('id', 'mount');
    mount.classList.add ('base');
    mount.setAttribute ('title', 'Гора');
    mount.setAttribute ('alt', 'mount');
    mount.setAttribute ('src', 'icons/' + 'mount' + '.png');
    if ((!storage.children.mount)) {
      storage.appendChild (mount);
      mount.click ();
    } else {
        storage.children.mount.click ();
      }
    refresh ();
  };
  function groundForMount () {
    elementsGround.forEach (function (item) {
      if (item === null || stone === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - stone.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - stone.getBoundingClientRect().y) <= 64) {
        stone.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          stone.parentNode.removeChild (stone);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        mountAdd ();
      }
    });
  };
  groundForMount ();
  //Вулкан
  function volcanoAdd () {
    soundElem ();
    volcano = document.createElement ('img');
    volcano.setAttribute ('id', 'volcano');
    volcano.classList.add ('base');
    volcano.setAttribute ('title', 'Вулкан');
    volcano.setAttribute ('alt', 'volcano');
    volcano.setAttribute ('src', 'icons/' + 'volcano' + '.png');
    if ((!storage.children.volcano)) {
      storage.appendChild (volcano);
      volcano.click ();
    } else {
        storage.children.volcano.click ();
      }
    refresh ();
  };
  function lavaForVolcano () {
    elementsLava.forEach (function (item) {
      if (item === null || mount === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - mount.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - mount.getBoundingClientRect().y) <= 64) {
        mount.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          mount.parentNode.removeChild (mount);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        volcanoAdd ();
      }
    });
  };
  lavaForVolcano ();
  //Пустыня
  function desertAdd () {
    soundElem ();
    desert = document.createElement ('img');
    desert.setAttribute ('id', 'desert');
    desert.classList.add ('base');
    desert.setAttribute ('title', 'Пустыня');
    desert.setAttribute ('alt', 'desert');
    desert.setAttribute ('src', 'icons/' + 'desert' + '.png');
    if ((!storage.children.desert)) {
      storage.appendChild (desert);
      desert.click ();
    } else {
        storage.children.desert.click ();
      }
    refresh ();
  }
  function sandForDesert () {
    elementsSand.forEach (function (item) {
      if (item === null || sand === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sand.getBoundingClientRect().x) <= 32 && Math.abs(item.getBoundingClientRect().y - sand.getBoundingClientRect().y <= 32) && item.dataset.id !== sand.dataset.id) {
        sand.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sand.parentNode.removeChild (sand);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        desertAdd ();
      }
    });
  }
  sandForDesert ();
  //Кактус
  function cactusAdd () {
    soundElem ();
    cactus = document.createElement ('img');
    cactus.setAttribute ('id', 'cactus');
    cactus.classList.add ('base');
    cactus.setAttribute ('title', 'Кактус');
    cactus.setAttribute ('alt', 'cactus');
    cactus.setAttribute ('src', 'icons/' + 'cactus' + '.png');
    if ((!storage.children.cactus)) {
      storage.appendChild (cactus);
      cactus.click ();
    } else {
        storage.children.cactus.click ();
      }
    refresh ();
  };
  function desertForCactus () {
    elementsDesert.forEach (function (item) {
      if (item === null || plant === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - plant.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - plant.getBoundingClientRect().y) <= 64) {
        plant.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          plant.parentNode.removeChild (plant);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        cactusAdd ();
      }
    });
  };
  desertForCactus ();
  // Инструмент
  function toolsAdd () {
    soundElem ();
    tools = document.createElement ('img');
    tools.setAttribute ('id', 'tools');
    tools.classList.add ('base');
    tools.setAttribute ('title', 'Инструмент');
    tools.setAttribute ('alt', 'tools');
    tools.setAttribute ('src', 'icons/' + 'tools' + '.png');
    if ((!storage.children.tools)) {
      storage.appendChild (tools);
      tools.click ();
    } else {
        storage.children.tools.click ();
      }
    refresh ();
  };
  function humansForTools () {
    elementsHumans.forEach (function (item) {
      if (item === null || metall === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - metall.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - metall.getBoundingClientRect().y) <= 64) {
        metall.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          metall.parentNode.removeChild (metall);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        toolsAdd ();
      }
    });
  };
  humansForTools ();
  //Дом
  function houseAdd () {
    soundElem ();
    house = document.createElement ('img');
    house.setAttribute ('id', 'house');
    house.classList.add ('base');
    house.setAttribute ('title', 'Дом');
    house.setAttribute ('alt', 'house');
    house.setAttribute ('src', 'icons/' + 'house' + '.png');
    if ((!storage.children.house)) {
      storage.appendChild (house);
      house.click ();
    } else {
        storage.children.house.click ();
      }
    refresh ();
  };
  function toolsForHouse () {
    elementsTools.forEach (function (item) {
      if (item === null || stone === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - stone.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - stone.getBoundingClientRect().y) <= 64) {
        stone.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          stone.parentNode.removeChild (stone);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        houseAdd ();
      }
    });
  };
  toolsForHouse ();
  //Дерево, Трава
  function grassAdd () {
    soundElem ();
    grass = document.createElement ('img');
    grass.setAttribute ('id', 'grass');
    grass.classList.add ('base');
    grass.setAttribute ('title', 'Трава');
    grass.setAttribute ('alt', 'grass');
    grass.setAttribute ('src', 'icons/' + 'grass' + '.png');
    if ((!storage.children.grass)) {
      storage.appendChild (grass);
      grass.click ();
    } else {
        storage.children.grass.click ();
      }
    refresh ();
  };
  function treeAdd () {
    soundElem ();
    tree = document.createElement ('img');
    tree.setAttribute ('id', 'tree');
    tree.classList.add ('base');
    tree.setAttribute ('title', 'Дерево');
    tree.setAttribute ('alt', 'tree');
    tree.setAttribute ('src', 'icons/' + 'tree' + '.png');
    if ((!storage.children.tree)) {
      storage.appendChild (tree);
      tree.click ();
    } else {
        storage.children.tree.click ();
      }
    refresh ();
  };
  function sunForGrassAndTree () {
    elementsSun.forEach (function (item) {
      if (item === null || plant === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - plant.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - plant.getBoundingClientRect().y) <= 64) {
        plant.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          plant.parentNode.removeChild (plant);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        treeAdd ();
        grassAdd ();
      }
    });
  };
  sunForGrassAndTree ();
  //Море
  function seaAdd () {
    soundElem ();
    sea = document.createElement ('img');
    sea.setAttribute ('id', 'sea');
    sea.classList.add ('base');
    sea.setAttribute ('title', 'Море');
    sea.setAttribute ('alt', 'sea');
    sea.setAttribute ('src', 'icons/' + 'sea' + '.png');
    if ((!storage.children.sea)) {
      storage.appendChild (sea);
      sea.click ();
    } else {
        storage.children.sea.click ();
      }
    refresh ();
  };
  function lakeForSea () {
    elementsLake.forEach (function (item) {
      if (item === null || lake === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - lake.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - lake.getBoundingClientRect().y) <= 64 && item.dataset.id !== lake.dataset.id) {
        lake.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          lake.parentNode.removeChild (lake);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        seaAdd ();
      }
    });
  };
  lakeForSea ();
  //Океан
  function oceanAdd () {
    soundElem ();
    ocean = document.createElement ('img');
    ocean.setAttribute ('id', 'ocean');
    ocean.classList.add ('base');
    ocean.setAttribute ('title', 'Океан');
    ocean.setAttribute ('alt', 'ocean');
    ocean.setAttribute ('src', 'icons/' + 'ocean' + '.png');
    if ((!storage.children.ocean)) {
      storage.appendChild (ocean);
      ocean.click ();
    } else {
        storage.children.ocean.click ();
      }
    refresh ();
  };
  function seaForOcean () {
    elementsSea.forEach (function (item) {
      if (item === null || sea === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sea.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sea.getBoundingClientRect().y) <= 64 && item.dataset.id !== sea.dataset.id) {
        sea.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sea.parentNode.removeChild (sea);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        oceanAdd ();
      }
    });
  };
  seaForOcean ();
  //Стекло
  function glassAdd () {
    soundElem ();
    glass = document.createElement ('img');
    glass.setAttribute ('id', 'glass');
    glass.classList.add ('base');
    glass.setAttribute ('title', 'Стекло');
    glass.setAttribute ('alt', 'glass');
    glass.setAttribute ('src', 'icons/' + 'glass' + '.png');
    if ((!storage.children.glass)) {
      storage.appendChild (glass);
      glass.click ();
    } else {
        storage.children.glass.click ();
      }
    refresh ();
  };
  function flameForGlass () {
    elementsFlame.forEach (function (item) {
      if (item === null || sand === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sand.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sand.getBoundingClientRect().y) <= 64) {
        sand.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sand.parentNode.removeChild (sand);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        glassAdd ();
      }
    });
  };
  flameForGlass ();
  //Молния
  function lightningAdd () {
    soundElem ();
    lightning = document.createElement ('img');
    lightning.setAttribute ('id', 'lightning');
    lightning.classList.add ('base');
    lightning.setAttribute ('title', 'Молния');
    lightning.setAttribute ('alt', 'lightning');
    lightning.setAttribute ('src', 'icons/' + 'lightning' + '.png');
    if ((!storage.children.lightning)) {
      storage.appendChild (lightning);
      lightning.click ();
    } else {
        storage.children.lightning.click ();
      }
    refresh ();
  };
  function groundForLightning () {
    elementsGround.forEach (function (item) {
      if (item === null || clouds === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - clouds.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - clouds.getBoundingClientRect().y) <= 64) {
        clouds.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          clouds.parentNode.removeChild (clouds);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        lightningAdd ();
      }
    });
  };
  groundForLightning ();
  //Давление
  function pressureAdd () {
    soundElem ();
    pressure = document.createElement ('img');
    pressure.setAttribute ('id', 'pressure');
    pressure.classList.add ('base');
    pressure.setAttribute ('title', 'Давление');
    pressure.setAttribute ('alt', 'pressure');
    pressure.setAttribute ('src', 'icons/' + 'pressure' + '.png');
    if ((!storage.children.pressure)) {
      storage.appendChild (pressure);
      pressure.click ();
    } else {
        storage.children.pressure.click ();
      }
    refresh ();
  };
  function steamForPressure () {
    elementsSteam.forEach (function (item) {
      if (item === null || steam === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - steam.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - steam.getBoundingClientRect().y) <= 64 && item.dataset.id !== steam.dataset.id) {
        steam.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          steam.parentNode.removeChild (steam);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        pressureAdd ();
      }
    });
  };
  steamForPressure ();
  //Птица
  function birdAdd () {
    soundElem ();
    bird = document.createElement ('img');
    bird.setAttribute ('id', 'bird');
    bird.classList.add ('base');
    bird.setAttribute ('title', 'Птица');
    bird.setAttribute ('alt', 'bird');
    bird.setAttribute ('src', 'icons/' + 'bird' + '.png');
    if ((!storage.children.bird)) {
      storage.appendChild (bird);
      bird.click ();
    } else {
        storage.children.bird.click ();
      }
    refresh ();
  };
  function airForBird () {
    elementsAir.forEach (function (item) {
      if (item === null || life === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - life.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - life.getBoundingClientRect().y) <= 64) {
        life.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          life.parentNode.removeChild (life);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        birdAdd ();
      }
    });
  };
  airForBird ();
  //Рыба
  function fishAdd () {
    soundElem ();
    fish = document.createElement ('img');
    fish.setAttribute ('id', 'fish');
    fish.classList.add ('base');
    fish.setAttribute ('title', 'Рыба');
    fish.setAttribute ('alt', 'fish');
    fish.setAttribute ('src', 'icons/' + 'fish' + '.png');
    if ((!storage.children.fish)) {
      storage.appendChild (fish);
      fish.click ();
    } else {
        storage.children.fish.click ();
      }
    refresh ();
  };
  function seaForFish () {
    elementsSea.forEach (function (item) {
      if (item === null || life === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - life.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - life.getBoundingClientRect().y) <= 64) {
        life.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          life.parentNode.removeChild (life);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        fishAdd ();
      }
    });
  };
  seaForFish ();
  //Ветер
  function windAdd () {
    soundElem ();
    wind = document.createElement ('img');
    wind.setAttribute ('id', 'wind');
    wind.classList.add ('base');
    wind.setAttribute ('title', 'Ветер');
    wind.setAttribute ('alt', 'wind');
    wind.setAttribute ('src', 'icons/' + 'wind' + '.png');
    if ((!storage.children.wind)) {
      storage.appendChild (wind);
      wind.click ();
    } else {
        storage.children.wind.click ();
      }
    refresh ();
  };
  function energyAdd () {
    soundElem ();
    energy = document.createElement ('img');
    energy.setAttribute ('id', 'energy');
    energy.classList.add ('base');
    energy.setAttribute ('title', 'Энергия');
    energy.setAttribute ('alt', 'energy');
    energy.setAttribute ('src', 'icons/' + 'energy' + '.png');
    if ((!storage.children.energy)) {
      storage.appendChild (energy);
      energy.click ();
    } else {
        storage.children.energy.click ();
      }
    refresh ();
  };
  function airForWindAndEnergy () {
    elementsAir.forEach (function (item) {
      if (item === null || pressure === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - pressure.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - pressure.getBoundingClientRect().y) <= 64) {
        pressure.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          pressure.parentNode.removeChild (pressure);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        windAdd ();
        energyAdd ();
      }
    });
  };
  airForWindAndEnergy ();
  //Волна
  function waveAdd () {
    soundElem ();
    wave = document.createElement ('img');
    wave.setAttribute ('id', 'wave');
    wave.classList.add ('base');
    wave.setAttribute ('title', 'Волна');
    wave.setAttribute ('alt', 'wave');
    wave.setAttribute ('src', 'icons/' + 'wave' + '.png');
    if ((!storage.children.wave)) {
      storage.appendChild (wave);
      wave.click ();
    } else {
        storage.children.wave.click ();
      }
    refresh ();
  };
  function seaForWave () {
    elementsSea.forEach (function (item) {
      if (item === null || wind === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - wind.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - wind.getBoundingClientRect().y) <= 64) {
        wind.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          wind.parentNode.removeChild (wind);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        waveAdd ();
      }
    });
  };
  seaForWave ();
  //Лес
  function forestAdd () {
    soundElem ();
    forest = document.createElement ('img');
    forest.setAttribute ('id', 'forest');
    forest.classList.add ('base');
    forest.setAttribute ('title', 'Лес');
    forest.setAttribute ('alt', 'forest');
    forest.setAttribute ('src', 'icons/' + 'forest' + '.png');
    if ((!storage.children.forest)) {
      storage.appendChild (forest);
      forest.click ();
    } else {
        storage.children.forest.click ();
      }
    refresh ();
  };
  function treeForForest () {
    elementsTree.forEach (function (item) {
      if (item === null || tree === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - tree.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - tree.getBoundingClientRect().y) <= 64 && item.dataset.id !== tree.dataset.id) {
        tree.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          tree.parentNode.removeChild (tree);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        forestAdd ();
      }
    });
  };
  treeForForest ();
  //Волк
  function wolfAdd () {
    soundElem ();
    wolf = document.createElement ('img');
    wolf.setAttribute ('id', 'wolf');
    wolf.classList.add ('base');
    wolf.setAttribute ('title', 'Волк');
    wolf.setAttribute ('alt', 'wolf');
    wolf.setAttribute ('src', 'icons/' + 'wolf' + '.png');
    if ((!storage.children.wolf)) {
      storage.appendChild (wolf);
      wolf.click ();
    } else {
        storage.children.wolf.click ();
      }
    refresh ();
  };
  function forestForWolf () {
    elementsForest.forEach (function (item) {
      if (item === null || life === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - life.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - life.getBoundingClientRect().y) <= 64) {
        life.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          life.parentNode.removeChild (life);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        wolfAdd ();
      }
    });
  };
  forestForWolf ();
  //Луна
  function moonAdd () {
    soundElem ();
    moon = document.createElement ('img');
    moon.setAttribute ('id', 'moon');
    moon.classList.add ('base');
    moon.setAttribute ('title', 'Луна');
    moon.setAttribute ('alt', 'moon');
    moon.setAttribute ('src', 'icons/' + 'moon' + '.png');
    if ((!storage.children.moon)) {
      storage.appendChild (moon);
      moon.click ();
    } else {
        storage.children.moon.click ();
      }
    refresh ();
  };
  function stoneForMoon () {
    elementsStone.forEach (function (item) {
      if (item === null || sky === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sky.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sky.getBoundingClientRect().y) <= 64) {
        sky.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sky.parentNode.removeChild (sky);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        moonAdd ();
      }
    });
  };
  stoneForMoon ();
  //Затмение
  function eclipseAdd () {
    soundElem ();
    eclipse = document.createElement ('img');
    eclipse.setAttribute ('id', 'eclipse');
    eclipse.classList.add ('base');
    eclipse.setAttribute ('title', 'Затмение');
    eclipse.setAttribute ('alt', 'eclipse');
    eclipse.setAttribute ('src', 'icons/' + 'eclipse' + '.png');
    if ((!storage.children.eclipse)) {
      storage.appendChild (eclipse);
      eclipse.click ();
    } else {
        storage.children.eclipse.click ();
      }
    refresh ();
  };
  function sunForEclipse () {
    elementsSun.forEach (function (item) {
      if (item === null || moon === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - moon.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - moon.getBoundingClientRect().y) <= 64) {
        moon.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          moon.parentNode.removeChild (moon);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        eclipseAdd ();
      }
    });
  };
  sunForEclipse ();
  //Костёр, Уголь, Дым
  function coalAdd () {
    soundElem ();
    coal = document.createElement ('img');
    coal.setAttribute ('id', 'coal');
    coal.classList.add ('base');
    coal.setAttribute ('title', 'Уголь');
    coal.setAttribute ('alt', 'coal');
    coal.setAttribute ('src', 'icons/' + 'coal' + '.png');
    if ((!storage.children.coal)) {
      storage.appendChild (coal);
      coal.click ();
    } else {
        storage.children.coal.click ();
      }
    refresh ();
  };
  function bonfireAdd () {
    soundElem ();
    bonfire = document.createElement ('img');
    bonfire.setAttribute ('id', 'bonfire');
    bonfire.classList.add ('base');
    bonfire.setAttribute ('title', 'Костёр');
    bonfire.setAttribute ('alt', 'bonfire');
    bonfire.setAttribute ('src', 'icons/' + 'bonfire' + '.png');
    if ((!storage.children.bonfire)) {
      storage.appendChild (bonfire);
      bonfire.click ();
    } else {
        storage.children.bonfire.click ();
      }
    refresh ();
  };
  function smokeAdd () {
    soundElem ();
    smoke = document.createElement ('img');
    smoke.setAttribute ('id', 'smoke');
    smoke.classList.add ('base');
    smoke.setAttribute ('title', 'Дым');
    smoke.setAttribute ('alt', 'smoke');
    smoke.setAttribute ('src', 'icons/' + 'smoke' + '.png');
    if ((!storage.children.smoke)) {
      storage.appendChild (smoke);
      smoke.click ();
    } else {
        storage.children.smoke.click ();
      }
    refresh ();
  };
  function flameForBonfireCoalAndSmoke () {
    elementsFlame.forEach (function (item) {
      if (item === null || tree === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - tree.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - tree.getBoundingClientRect().y) <= 64) {
        tree.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          tree.parentNode.removeChild (tree);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        bonfireAdd ();
        coalAdd ();
        smokeAdd ();
      }
    });
  };
  flameForBonfireCoalAndSmoke ();
  //Алмаз
  function diamondAdd () {
    soundElem ();
    diamond = document.createElement ('img');
    diamond.setAttribute ('id', 'diamond');
    diamond.classList.add ('base');
    diamond.setAttribute ('title', 'Алмаз');
    diamond.setAttribute ('alt', 'diamond');
    diamond.setAttribute ('src', 'icons/' + 'diamond' + '.png');
    if ((!storage.children.diamond)) {
      storage.appendChild (diamond);
      diamond.click ();
    } else {
        storage.children.diamond.click ();
      }
    refresh ();
  };
  function coalFordiamond () {
    elementsCoal.forEach (function (item) {
      if (item === null || pressure === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - pressure.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - pressure.getBoundingClientRect().y) <= 64) {
        pressure.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          pressure.parentNode.removeChild (pressure);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        diamondAdd ();
      }
    });
  };
  coalFordiamond ();
  //Сталь
  function steelAdd () {
    soundElem ();
    steel = document.createElement ('img');
    steel.setAttribute ('id', 'steel');
    steel.classList.add ('base');
    steel.setAttribute ('title', 'Сталь');
    steel.setAttribute ('alt', 'steel');
    steel.setAttribute ('src', 'icons/' + 'steel' + '.png');
    if ((!storage.children.steel)) {
      storage.appendChild (steel);
      steel.click ();
    } else {
        storage.children.steel.click ();
      }
    refresh ();
  };
  function coalForSteel () {
    elementsCoal.forEach (function (item) {
      if (item === null || metall === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - metall.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - metall.getBoundingClientRect().y) <= 64) {
        metall.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          metall.parentNode.removeChild (metall);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        steelAdd ();
      }
    });
  };
  coalForSteel ();
  //Ток, Магнит
  function currentAdd () {
    soundElem ();
    current = document.createElement ('img');
    current.setAttribute ('id', 'current');
    current.classList.add ('base');
    current.setAttribute ('title', 'Ток');
    current.setAttribute ('alt', 'current');
    current.setAttribute ('src', 'icons/' + 'current' + '.png');
    if ((!storage.children.current)) {
      storage.appendChild (current);
      current.click ();
    } else {
        storage.children.current.click ();
      }
    refresh ();
  };
  function magnetAdd () {
    soundElem ();
    magnet = document.createElement ('img');
    magnet.setAttribute ('id', 'magnet');
    magnet.classList.add ('base');
    magnet.setAttribute ('title', 'Магнит');
    magnet.setAttribute ('alt', 'magnet');
    magnet.setAttribute ('src', 'icons/' + 'magnet' + '.png');
    if ((!storage.children.magnet)) {
      storage.appendChild (magnet);
      magnet.click ();
    } else {
        storage.children.magnet.click ();
      }
    refresh ();
  };
  function lightningForCurrentAndMagnet () {
    elementsLightning.forEach (function (item) {
      if (item === null || metall === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - metall.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - metall.getBoundingClientRect().y) <= 64) {
        metall.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          metall.parentNode.removeChild (metall);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        currentAdd ();
        magnetAdd ();
      }
    });
  };
  lightningForCurrentAndMagnet ();
  //Гроза
  function stormAdd () {
    soundElem ();
    storm = document.createElement ('img');
    storm.setAttribute ('id', 'storm');
    storm.classList.add ('base');
    storm.setAttribute ('title', 'Гроза');
    storm.setAttribute ('alt', 'storm');
    storm.setAttribute ('src', 'icons/' + 'storm' + '.png');
    if ((!storage.children.storm)) {
      storage.appendChild (storm);
      storm.click ();
    } else {
        storage.children.storm.click ();
      }
    refresh ();
  };
  function lightningForStorm () {
    elementsLightning.forEach (function (item) {
      if (item === null || rain === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - rain.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - rain.getBoundingClientRect().y) <= 64) {
        rain.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          rain.parentNode.removeChild (rain);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        stormAdd ();
      }
    });
  };
  lightningForStorm ();
  //Феникс
  function phoenixAdd () {
    soundElem ();
    phoenix = document.createElement ('img');
    phoenix.setAttribute ('id', 'phoenix');
    phoenix.classList.add ('base');
    phoenix.setAttribute ('title', 'Феникс');
    phoenix.setAttribute ('alt', 'phoenix');
    phoenix.setAttribute ('src', 'icons/' + 'phoenix' + '.png');
    if ((!storage.children.phoenix)) {
      storage.appendChild (phoenix);
      phoenix.click ();
    } else {
        storage.children.phoenix.click ();
      }
    refresh ();
  };
  function flameForPhoenix () {
    elementsFlame.forEach (function (item) {
      if (item === null || bird === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - bird.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - bird.getBoundingClientRect().y) <= 64) {
        bird.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          bird.parentNode.removeChild (bird);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        phoenixAdd ();
      }
    });
  };
  flameForPhoenix ();
  //Посёлок
  function villageAdd () {
    soundElem ();
    village = document.createElement ('img');
    village.setAttribute ('id', 'village');
    village.classList.add ('base');
    village.setAttribute ('title', 'Посёлок');
    village.setAttribute ('alt', 'village');
    village.setAttribute ('src', 'icons/' + 'village' + '.png');
    if ((!storage.children.village)) {
      storage.appendChild (village);
      village.click ();
    } else {
        storage.children.village.click ();
      }
    refresh ();
  }
  function houseForVillage () {
    elementsHouse.forEach (function (item) {
      if (item === null || house === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - house.getBoundingClientRect().x) <= 32 && Math.abs(item.getBoundingClientRect().y - house.getBoundingClientRect().y <= 32) && item.dataset.id !== house.dataset.id) {
        house.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          house.parentNode.removeChild (house);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        villageAdd ();
      }
    });
  }
  houseForVillage ();
  //Город
  function cityAdd () {
    soundElem ();
    city = document.createElement ('img');
    city.setAttribute ('id', 'city');
    city.classList.add ('base');
    city.setAttribute ('title', 'Город');
    city.setAttribute ('alt', 'city');
    city.setAttribute ('src', 'icons/' + 'city' + '.png');
    if ((!storage.children.city)) {
      storage.appendChild (city);
      city.click ();
    } else {
        storage.children.city.click ();
      }
    refresh ();
  }
  function villageForCity () {
    elementsVillage.forEach (function (item) {
      if (item === null || village === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - village.getBoundingClientRect().x) <= 32 && Math.abs(item.getBoundingClientRect().y - village.getBoundingClientRect().y <= 32) && item.dataset.id !== village.dataset.id) {
        village.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          village.parentNode.removeChild (village);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        cityAdd ();
      }
    });
  }
  villageForCity ();
  //Испарение, Охлаждение
  function evaporationAdd () {
    soundElem ();
    evaporation = document.createElement ('img');
    evaporation.setAttribute ('id', 'evaporation');
    evaporation.classList.add ('base');
    evaporation.setAttribute ('title', 'Испарение');
    evaporation.setAttribute ('alt', 'evaporation');
    evaporation.setAttribute ('src', 'icons/' + 'evaporation' + '.png');
    if ((!storage.children.evaporation)) {
      storage.appendChild (evaporation);
      evaporation.click ();
    } else {
        storage.children.evaporation.click ();
      }
    refresh ();
  };
  function coldAdd () {
    soundElem ();
    cold = document.createElement ('img');
    cold.setAttribute ('id', 'cold');
    cold.classList.add ('base');
    cold.setAttribute ('title', 'Охлаждение');
    cold.setAttribute ('alt', 'cold');
    cold.setAttribute ('src', 'icons/' + 'cold' + '.png');
    if ((!storage.children.cold)) {
      storage.appendChild (cold);
      cold.click ();
    } else {
        storage.children.cold.click ();
      }
    refresh ();
  };
  function waterForEvaporationAndCold () {
    elementsWater.forEach (function (item) {
      if (item === null || sun === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sun.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sun.getBoundingClientRect().y) <= 64) {
        sun.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sun.parentNode.removeChild (sun);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        evaporationAdd ();
        coldAdd ();
      }
    });
  };
  waterForEvaporationAndCold ();
  //Лёд
  function iceAdd () {
    soundElem ();
    ice = document.createElement ('img');
    ice.setAttribute ('id', 'ice');
    ice.classList.add ('base');
    ice.setAttribute ('title', 'Лёд');
    ice.setAttribute ('alt', 'ice');
    ice.setAttribute ('src', 'icons/' + 'ice' + '.png');
    if ((!storage.children.ice)) {
      storage.appendChild (ice);
      ice.click ();
    } else {
        storage.children.ice.click ();
      }
    refresh ();
  };
  function waterForIce () {
    elementsWater.forEach (function (item) {
      if (item === null || cold === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - cold.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - cold.getBoundingClientRect().y) <= 64) {
        cold.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          cold.parentNode.removeChild (cold);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        iceAdd ();
      }
    });
  };
  waterForIce ();
  //Снег
  function snowAdd () {
    soundElem ();
    snow = document.createElement ('img');
    snow.setAttribute ('id', 'snow');
    snow.classList.add ('base');
    snow.setAttribute ('title', 'Снег');
    snow.setAttribute ('alt', 'snow');
    snow.setAttribute ('src', 'icons/' + 'snow' + '.png');
    if ((!storage.children.snow)) {
      storage.appendChild (snow);
      snow.click ();
    } else {
        storage.children.snow.click ();
      }
    refresh ();
  };
  function rainForSnow () {
    elementsRain.forEach (function (item) {
      if (item === null || cold === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - cold.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - cold.getBoundingClientRect().y) <= 64) {
        cold.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          cold.parentNode.removeChild (cold);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        snowAdd ();
      }
    });
  };
  rainForSnow ();
  //Айсберг
  function icebergAdd () {
    soundElem ();
    iceberg = document.createElement ('img');
    iceberg.setAttribute ('id', 'iceberg');
    iceberg.classList.add ('base');
    iceberg.setAttribute ('title', 'Айсберг');
    iceberg.setAttribute ('alt', 'iceberg');
    iceberg.setAttribute ('src', 'icons/' + 'iceberg' + '.png');
    if ((!storage.children.iceberg)) {
      storage.appendChild (iceberg);
      iceberg.click ();
    } else {
        storage.children.iceberg.click ();
      }
    refresh ();
  };
  function iceForIceberg () {
    elementsIce.forEach (function (item) {
      if (item === null || ocean === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - ocean.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - ocean.getBoundingClientRect().y) <= 64) {
        ocean.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          ocean.parentNode.removeChild (ocean);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        icebergAdd ();
      }
    });
  };
  iceForIceberg ();
  //Линза
  function lensAdd () {
    soundElem ();
    lens = document.createElement ('img');
    lens.setAttribute ('id', 'lens');
    lens.classList.add ('base');
    lens.setAttribute ('title', 'Линза');
    lens.setAttribute ('alt', 'lens');
    lens.setAttribute ('src', 'icons/' + 'lens' + '.png');
    if ((!storage.children.lens)) {
      storage.appendChild (lens);
      lens.click ();
    } else {
        storage.children.lens.click ();
      }
    refresh ();
  };
  function toolsForLens () {
    elementsTools.forEach (function (item) {
      if (item === null || glass === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - glass.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - glass.getBoundingClientRect().y) <= 64) {
        glass.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          glass.parentNode.removeChild (glass);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        lensAdd ();
      }
    });
  };
  toolsForLens ();
  //Рыцарь
  function knightAdd () {
    soundElem ();
    knight = document.createElement ('img');
    knight.setAttribute ('id', 'knight');
    knight.classList.add ('base');
    knight.setAttribute ('title', 'Рыцарь');
    knight.setAttribute ('alt', 'knight');
    knight.setAttribute ('src', 'icons/' + 'knight' + '.png');
    if ((!storage.children.knight)) {
      storage.appendChild (knight);
      knight.click ();
    } else {
        storage.children.knight.click ();
      }
    refresh ();
  };
  function humansForKnight () {
    elementsHumans.forEach (function (item) {
      if (item === null || steel === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - steel.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - steel.getBoundingClientRect().y) <= 64) {
        steel.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          steel.parentNode.removeChild (steel);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        knightAdd ();
      }
    });
  };
  humansForKnight ();
  //Пляж
  function beachAdd () {
    soundElem ();
    beach = document.createElement ('img');
    beach.setAttribute ('id', 'beach');
    beach.classList.add ('base');
    beach.setAttribute ('title', 'Пляж');
    beach.setAttribute ('alt', 'beach');
    beach.setAttribute ('src', 'icons/' + 'beach' + '.png');
    if ((!storage.children.beach)) {
      storage.appendChild (beach);
      beach.click ();
    } else {
        storage.children.beach.click ();
      }
    refresh ();
  };
  function seaForBeach () {
    elementsSea.forEach (function (item) {
      if (item === null || sand === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - sand.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - sand.getBoundingClientRect().y) <= 64) {
        sand.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          sand.parentNode.removeChild (sand);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        beachAdd ();
      }
    });
  };
  seaForBeach ();
  //Поле
  function fieldAdd () {
    soundElem ();
    field = document.createElement ('img');
    field.setAttribute ('id', 'field');
    field.classList.add ('base');
    field.setAttribute ('title', 'Поле');
    field.setAttribute ('alt', 'field');
    field.setAttribute ('src', 'icons/' + 'field' + '.png');
    if ((!storage.children.field)) {
      storage.appendChild (field);
      field.click ();
    } else {
        storage.children.field.click ();
      }
    refresh ();
  };
  function toolsForField () {
    elementsTools.forEach (function (item) {
      if (item === null || groundID === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - groundID.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - groundID.getBoundingClientRect().y) <= 64) {
        groundID.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          groundID.parentNode.removeChild (groundID);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        fieldAdd ();
      }
    });
  };
  toolsForField ();
  //Бумага
  function paperAdd () {
    soundElem ();
    paper = document.createElement ('img');
    paper.setAttribute ('id', 'paper');
    paper.classList.add ('base');
    paper.setAttribute ('title', 'Бумага');
    paper.setAttribute ('alt', 'paper');
    paper.setAttribute ('src', 'icons/' + 'paper' + '.png');
    if ((!storage.children.paper)) {
      storage.appendChild (paper);
      paper.click ();
    } else {
        storage.children.paper.click ();
      }
    refresh ();
  };
  function toolsForPaper () {
    elementsTools.forEach (function (item) {
      if (item === null || tree === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - tree.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - tree.getBoundingClientRect().y) <= 64) {
        tree.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          tree.parentNode.removeChild (tree);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        paperAdd ();
      }
    });
  };
  toolsForPaper ();
  //Солома
  function strawAdd () {
    soundElem ();
    straw = document.createElement ('img');
    straw.setAttribute ('id', 'straw');
    straw.classList.add ('base');
    straw.setAttribute ('title', 'Солома');
    straw.setAttribute ('alt', 'straw');
    straw.setAttribute ('src', 'icons/' + 'straw' + '.png');
    if ((!storage.children.straw)) {
      storage.appendChild (straw);
      straw.click ();
    } else {
        storage.children.straw.click ();
      }
    refresh ();
  };
  function sunForStraw () {
    elementsSun.forEach (function (item) {
      if (item === null || grass === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - grass.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - grass.getBoundingClientRect().y) <= 64) {
        grass.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          grass.parentNode.removeChild (grass);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        strawAdd ();
      }
    });
  };
  sunForStraw ();
  //Книги
  function booksAdd () {
    soundElem ();
    books = document.createElement ('img');
    books.setAttribute ('id', 'books');
    books.classList.add ('base');
    books.setAttribute ('title', 'Книги');
    books.setAttribute ('alt', 'books');
    books.setAttribute ('src', 'icons/' + 'books' + '.png');
    if ((!storage.children.books)) {
      storage.appendChild (books);
      books.click ();
    } else {
        storage.children.books.click ();
      }
    refresh ();
  };
  function humansForBooks () {
    elementsHumans.forEach (function (item) {
      if (item === null || paper === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - paper.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - paper.getBoundingClientRect().y) <= 64) {
        paper.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          paper.parentNode.removeChild (paper);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        booksAdd ();
      }
    });
  };
  humansForBooks ();
  //Собака
  function dogAdd () {
    soundElem ();
    dog = document.createElement ('img');
    dog.setAttribute ('id', 'dog');
    dog.classList.add ('base');
    dog.setAttribute ('title', 'Собака');
    dog.setAttribute ('alt', 'dog');
    dog.setAttribute ('src', 'icons/' + 'dog' + '.png');
    if ((!storage.children.dog)) {
      storage.appendChild (dog);
      dog.click ();
    } else {
        storage.children.dog.click ();
      }
    refresh ();
  };
  function humansForDog () {
    elementsHumans.forEach (function (item) {
      if (item === null || wolf === null) {
        ;
      } else if (Math.abs(item.getBoundingClientRect().x - wolf.getBoundingClientRect().x) <= 64 && Math.abs(item.getBoundingClientRect().y - wolf.getBoundingClientRect().y) <= 64) {
        wolf.classList.add ('transformation');
        item.classList.add ('transformation');
        function deleteEl () {
          wolf.parentNode.removeChild (wolf);
          item.parentNode.removeChild (item);
        }
        setTimeout (deleteEl, 1000);
        dogAdd ();
      }
    });
  };
  humansForDog ();
  };
};