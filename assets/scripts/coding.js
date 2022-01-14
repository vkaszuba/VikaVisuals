
var chickenImages = ["./assets/images/coding/ct-01.png",
  "./assets/images/coding/ct-02.png",
  "./assets/images/coding/ct-03.png",
  "./assets/images/coding/ct-04.png"];

var trippinImages = ["./assets/images/coding/wt-01.png",
  "./assets/images/coding/wt-02.png",
  "./assets/images/coding/wt-03.png",
  "./assets/images/coding/wt-04.png"];

var currencyImages = ["./assets/images/coding/cu-01.png",
  "./assets/images/coding/cu-02.png",
  "./assets/images/coding/cu-03.png",
  "./assets/images/coding/cu-04.png"];


var ctImages = document.getElementById("chickenTinder");
var wtImages = document.getElementById("weTrippin");
var cuImages = document.getElementById("currency");

var ctIndex = 0;
var wtIndex = 0;
var cuIndex = 0;
var a = 0;
var b = 0;
var c = 0;

function ctTimer() {
  if (++a % 2) {
    ctImages.style.opacity = 0;
  } else {
    ctImages.src = chickenImages[ctIndex = (ctIndex + 1) % chickenImages.length];
    ctImages.style.opacity = 1;
  }
};

function wtTimer() {
  if (++b % 2) {
    wtImages.style.opacity = 0;
  } else {
    wtImages.src = trippinImages[wtIndex = (wtIndex + 1) % trippinImages.length];
    wtImages.style.opacity = 1;
  }
};

function cuTimer() {
  if (++c % 2) {
    cuImages.style.opacity = 0;
  } else {
    cuImages.src = currencyImages[cuIndex = (cuIndex + 1) % currencyImages.length];
    cuImages.style.opacity = 1;
  }
};


setInterval(function () {
  ctTimer();
  wtTimer();
  cuTimer();
}, 4000);
