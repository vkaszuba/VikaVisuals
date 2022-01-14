
// Redirects to landing page
document.getElementById("navLogo").onclick = function () {
    location.href = "./home.html";
};
// Redirects to design page
document.getElementById("designPage").onclick = function () {
    location.href = "./design.html";
};
// Redirects to coding page
document.getElementById("codingPage").onclick = function () {
    location.href = "./coding.html";
};
// Redirects to resume page
document.getElementById("resumePage").onclick = function () {
    location.href = "./resume.html";
};
// Redirects to contact page
document.getElementById("contactPage").onclick = function () {
    location.href = "./contact.html";
};



var flyerOneImages = ["./assets/images/design/bob.png",
    "./assets/images/design/uniq01.png",
    "./assets/images/design/space01.png",
    "./assets/images/design/vamp.png"];

var flyerTwoImages = ["./assets/images/design/tum.png",
    "./assets/images/design/uniq02.png",
    "./assets/images/design/space02.png",
    "./assets/images/design/foreplay.png"];

var logoOneImages = ["./assets/images/design/logo-vv.png",
    "./assets/images/design/logo-vamp.png",
    "./assets/images/design/logo-leaf.png"];

var logoTwoImages = ["./assets/images/design/logo-vk.png",
    "./assets/images/design/logo-rg.png",
    "./assets/images/design/logo-tum.png"];

var emoteOneImages = ["./assets/images/design/emoteHype.png",
    "./assets/images/design/emoteKek.png",
    "./assets/images/design/emoteThink.png",
    "./assets/images/design/emoteGasm.png",
    "./assets/images/design/emoteMoody.png"];

var emoteTwoImages = ["./assets/images/design/emoteRage.png",
    "./assets/images/design/emoteSoft.png",
    "./assets/images/design/emoteDrool.png",
    "./assets/images/design/emoteYell.png",
    "./assets/images/design/emoteSophia.png"];


var flyerOne = document.getElementById("flyerOne");
var flyerTwo = document.getElementById("flyerTwo");

var logoOne = document.getElementById("logoOne");
var logoTwo = document.getElementById("logoTwo");

var emoteOne = document.getElementById("emoteOne");
var emoteTwo = document.getElementById("emoteTwo");

var flyerOneIndex = 0;
var flyerTwoIndex = 0;
var logoOneIndex = 0;
var logoTwoIndex = 0;
var emoteOneIndex = 0;
var emoteTwoIndex = 0;

var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;


function flyerOneTimer() {
    if (++d % 2) {
        flyerOne.style.opacity = 0;
    } else {
        flyerOne.src = flyerOneImages[flyerOneIndex = (flyerOneIndex + 1) % flyerOneImages.length];
        flyerOne.style.opacity = 1;
    }
};

function flyerTwoTimer() {
    if (++e % 2) {
        flyerTwo.style.opacity = 0;
    } else {
        flyerTwo.src = flyerTwoImages[flyerTwoIndex = (flyerTwoIndex + 1) % flyerTwoImages.length];
        flyerTwo.style.opacity = 1;
    }
};

function logoOneTimer() {
    if (++f % 2) {
        logoOne.style.opacity = 0;
    } else {
        logoOne.src = logoOneImages[logoOneIndex = (logoOneIndex + 1) % logoOneImages.length];
        logoOne.style.opacity = 1;
    }
};

function logoTwoTimer() {
    if (++g % 2) {
        logoTwo.style.opacity = 0;
    } else {
        logoTwo.src = logoTwoImages[logoTwoIndex = (logoTwoIndex + 1) % logoTwoImages.length];
        logoTwo.style.opacity = 1;
    }
};

function emoteOneTimer() {
    if (++h % 2) {
        emoteOne.style.opacity = 0;
    } else {
        emoteOne.src = emoteOneImages[emoteOneIndex = (emoteOneIndex + 1) % emoteOneImages.length];
        emoteOne.style.opacity = 1;
    }
};

function emoteTwoTimer() {
    if (++i % 2) {
        emoteTwo.style.opacity = 0;
    } else {
        emoteTwo.src = emoteTwoImages[emoteTwoIndex = (emoteTwoIndex + 1) % emoteTwoImages.length];
        emoteTwo.style.opacity = 1;
    }
};


setInterval(function () {
    flyerOneTimer();
    flyerTwoTimer();
    logoOneTimer();
    logoTwoTimer();
    emoteOneTimer();
    emoteTwoTimer();
}, 4000);
