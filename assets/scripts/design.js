
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


var flyerOne = document.getElementById("flyerOne");
var flyerTwo = document.getElementById("flyerTwo");

var flyerOneIndex = 0;
var flyerTwoIndex = 0;
var d = 0;
var e = 0;



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

setInterval(function () {
    flyerOneTimer();
    flyerTwoTimer();
}, 4000);
