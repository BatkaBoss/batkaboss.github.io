let windoww = document.querySelector('.sell-block');

let btnGo_1 = document.querySelector('.clickPrice');

let item_1 = document.querySelector('.item-price-1');
let item_2 = document.querySelector('.item-price-2');
let item_3 = document.querySelector('.item-price-3');
let item_4 = document.querySelector('.item-price-4');
let item_5 = document.querySelector('.item-price-5');

let exit = document.querySelector('.exit-sell');

exit.onclick = function () {
  windoww.style.opacity = "0";
  windoww.style.visibility = "hidden";
}

btnGo_1.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

item_1.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

item_2.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

item_3.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

item_4.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

item_5.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("mobile");
  document.querySelector("body").classList.toggle("hidden");
});