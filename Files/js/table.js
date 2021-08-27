let scoreBtn = document.getElementById ('scoreBtn');
let keysArr = [];
function tableAdd () {
  let table = document.getElementById ('table');
  for (let n = 0; n < localStorage.length; n++) {
    let gamers = localStorage.key (n);
    if (gamers.substr (0, 3) == 'key') {
      keysArr.push (gamers);
    }
  };
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
    table.appendChild (trPlayer);
  });
  let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
  table.tBodies[0].append(...sortedRows);
};
scoreBtn.addEventListener ('click', function () {
  tableAdd ();
});