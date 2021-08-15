DragManager.onDragCancel = function(dragObject) {
  dragObject.avatar.rollback();
};
DragManager.onDragEnd = function(dragObject, dropElem) {
  if (dropElem.closest('#basket')) {
    dragObject.elem.style.display = 'none';
    dropElem.classList.add('basketDrop');
    setTimeout(function() {
      dropElem.classList.remove('basketDrop');
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
let water = document.getElementById ('waterID');
let flame = document.getElementById ('flameID');
// Элемент Пар
  if (dragObject.elem.parentNode == workArea) {
    if (Math.abs (water.style.left.slice (0, -2) + water.offsetWidth/2) >= Math.abs (flame.style.left.slice (0, -2) + flame.offsetWidth/2) && Math.abs (flame.style.left.slice (0, -2)) + flame.offsetWidth >= Math.abs (water.style.left.slice (0, -2) + water.offsetWidth/2) && Math.abs (water.style.top.slice (0, -2) + water.offsetHeight/2) >= Math.abs (flame.style.top.slice (0, -2) + flame.offsetHeight/2) && Math.abs (flame.style.top + flame.offsetHeight >= water.style.top + water.offsetHeight/2)) {
      console.log ('yes');
    }
  }
// Элемент Лава
// Элемент Озеро
// Элемент Болото
}