/* OPEN MENU */

let menuWindow = document.querySelector('.menuWindow')
let openMenu = document.getElementById('menuWindow')
let exitBtn = document.getElementById('exit')

openMenu.onclick = function() {
  menuWindow.style.visibility = 'visible';
  menuWindow.style.opacity = "1";
}

exitBtn.onclick = function() {
  menuWindow.style.visibility = 'hidden';
  menuWindow.style.opacity = "0";
}

/* CLICK SETTINGS */

let btn_click = document.getElementById('click');
let result = document.getElementById('total');
let counter = localStorage.getItem('money');

btn_click.addEventListener('click', function() {
  counter++;
  result.textContent = `Денег: ${counter}`;
});

/* SAVE & LOAD */

let save = document.getElementById('save');

save.onclick = function () {
  localStorage.setItem('money', counter);
  menuWindow.style.opacity = "0";
  menuWindow.style.visibility = 'hidden';
}

let load = document.getElementById('load');

load.onclick = function () {
  result.textContent = localStorage.getItem('money');
  menuWindow.style.opacity = "0";
  menuWindow.style.visibility = 'hidden';
}

/* RESET */

let reset = document.getElementById('reset');

reset.onclick = function () {
  menuWindow.style.opacity = "0";
  menuWindow.style.visibility = 'hidden';
  localStorage.clear();
}