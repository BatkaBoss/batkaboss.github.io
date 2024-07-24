let windoww = document.querySelector('.sell-block');

let begin = document.querySelector('.go');
let btnGo = document.querySelector('.click');
let btnGo_1 = document.querySelector('.click2');
let btn_1 = document.querySelector('.priceItem-1');
let btn_2 = document.querySelector('.priceItem-2');
let btn_3 = document.querySelector('.priceItem-3');

let exit = document.querySelector('.exit-sell');

begin.onclick = function() {
  document.location = './index.html#price-block';
}

exit.onclick = function () {
  windoww.style.opacity = "0";
  windoww.style.visibility = "hidden";
}

btnGo_1.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

btnGo.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

btn_1.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}
btn_2.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}
btn_3.onclick = function () {
  windoww.style.opacity = "1";
  windoww.style.visibility = "visible";
}

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("mobile");
  document.querySelector("body").classList.toggle("hidden");
});