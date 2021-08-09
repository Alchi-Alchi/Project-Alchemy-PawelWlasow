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