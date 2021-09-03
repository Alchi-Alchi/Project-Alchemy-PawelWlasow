let bank = document.getElementById ('bankOfElements');
let field = document.getElementById ('workField');
let DragManager = new function() {
  let dragObject = {};
  let self = this;
  function onClick(ev) {
    if (ev.which != 1) return;
    let elem = ev.target.closest('.base');
    if (!elem) return;
    if (elem.parentNode.id = 'bankOfElements') {}
    let copy = document.createElement ('img');
    copy.classList.add ('draggable');
    copy.setAttribute ('id', elem.id + 'ID');
    copy.setAttribute ('title', elem.title);
    copy.setAttribute ('alt', elem.id);
    copy.setAttribute ('name', elem.id);
    copy.setAttribute ('src', 'icons/' + elem.id + '.png');
    field.appendChild (copy);
    dragObject.downX = ev.pageX;
    dragObject.downY = ev.pageY;
    return false;
  }
  function onMouseDown(e) {
    if (e.which != 1) return;
    let elem = e.target.closest('.draggable');
    if (!elem) return;
    dragObject.elem = elem;
    dragObject.downX = e.pageX;
    dragObject.downY = e.pageY;
    return false;
  }

  function onMouseMove(e) {
    if (!dragObject.elem) return; 
    if (!dragObject.avatar) {
      let moveX = e.pageX - dragObject.downX;
      let moveY = e.pageY - dragObject.downY;
      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      }
      dragObject.avatar = createAvatar(e);
      if (!dragObject.avatar) {
        dragObject = {};
        return;
      }
      let coords = getCoords(dragObject.avatar);
      dragObject.shiftX = dragObject.downX - coords.left;
      dragObject.shiftY = dragObject.downY - coords.top;
      startDrag(e);
    }
    dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
    return false;
  }

  function onMouseUp(e) {
    if (dragObject.avatar) {
      finishDrag(e);
    }
    dragObject = {};
  }

  function finishDrag(e) {
    let dropElem = findDroppable(e);
    if (!dropElem) {
      self.onDragCancel(dragObject);
    } else {
      self.onDragEnd(dragObject, dropElem);
      self.transformEl (dragObject);
    }
  }

  function createAvatar(e) {
    let avatar = dragObject.elem;
    let old = {
      parent: avatar.parentNode,
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      left: avatar.left || '',
      top: avatar.top || '',
      zIndex: avatar.zIndex || ''
    };
    avatar.rollback = function() {
      old.parent.insertBefore(avatar, old.nextSibling);
      avatar.style.position = old.position;
      avatar.style.left = old.left;
      avatar.style.top = old.top;
      avatar.style.zIndex = old.zIndex;
    };
    return avatar;
  }

  function startDrag(e) {
    let avatar = dragObject.avatar;
    document.body.appendChild(avatar);
    avatar.style.zIndex = 10;
    avatar.style.position = 'absolute';
  }

  function findDroppable(event) {
    dragObject.avatar.hidden = true;
    let elem = document.elementFromPoint(event.clientX, event.clientY);
    dragObject.avatar.hidden = false;
    if (elem == null) {
      return null;
    } else {
      return elem.closest('.droppable') || elem.closest('.fieldForTransform');
    }
  }
  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;
  document.onclick = onClick;
  this.onDragEnd = function(dragObject, dropElem) {};
  this.onDragCancel = function(dragObject) {};
  this.transformEl = function(dragObject) {};
};
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}