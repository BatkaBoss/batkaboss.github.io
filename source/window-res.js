let windoww = document.getElementById('youtoo')
let boss = document.getElementById('opn');

boss.onclick = function() {
  windoww.style.opacity = '1';
  windoww.style.visibility = "visible";
}

let closew = document.getElementById('cls')

cls.onclick = function() {
  windoww.style.opacity = '0';
  windoww.style.visibility = "hidden";
}