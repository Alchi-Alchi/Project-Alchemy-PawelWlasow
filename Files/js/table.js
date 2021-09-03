let keysArr = [];
function tableAdd () {
  let clearBtn = document.getElementById ('clearBtn');
  let table = document.getElementById ('table');
  let tbody = document.querySelector('tbody');
  let message = document.getElementById ('message');
  if (table === null || tbody === null) {
    ;
  } else {
    for (let n = 0; n < localStorage.length; n++) {
      let gamers = localStorage.key (n);
      if (gamers.substr (0, 3) == 'key') {
        keysArr.push (gamers);
      }
    };
    clearBtn.addEventListener ('click', function () {
      localStorage.clear();
      while (tbody.firstChild !== null) {
        tbody.lastChild.parentNode.removeChild (tbody.lastChild);
      };
      return new Promise ((resolve, reject) => {
        message.textContent = 'Таблица очищена';
        setTimeout(function() {
          message.textContent = '';
        }, 3000);
        resolve();
        resolve.then (
          console.log ('Таблица очищена'));
      })
    });
    keysArr.forEach (function (item, i) {
      let trPlayer = document.createElement ('tr');
      let tdNumb = document.createElement ('td');
      let tdName = document.createElement ('td');
      let tdTime = document.createElement ('td');
      let tdElem = document.createElement ('td');
      trPlayer.appendChild (tdNumb);
      trPlayer.appendChild (tdName);
      trPlayer.appendChild (tdTime);
      trPlayer.appendChild (tdElem);
      tdNumb.innerHTML = i + 1;
      tdName.innerHTML = JSON.parse (localStorage.getItem (item)).name;
      tdTime.innerHTML = JSON.parse (localStorage.getItem (item)).time;
      tdElem.innerHTML = JSON.parse (localStorage.getItem (item)).elements;
      tbody.appendChild (trPlayer);
    });
    keysArr = [];
    table.addEventListener ('click', function(e) {
      if (e.target.tagName != 'TH') return;
      let th = e.target;
      sortTable (th.cellIndex, th.dataset.type);
    });
    function sortTable (colNum, type) {
      let rowsArray = Array.from(tbody.rows);
      let compare;
      switch (type) {
        case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
        case 'name':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
        case 'time':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
        case 'opened':
        compare = function(rowA, rowB) {
          return parseInt (rowA.cells[colNum].innerHTML) > parseInt (rowB.cells[parseInt(colNum)].innerHTML) ? 1 : -1;
        };
        break;
      }
      rowsArray.sort(compare);
      tbody.append(...rowsArray);
    };
  };
};