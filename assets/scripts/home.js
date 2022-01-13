
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





var chickenImages = ["./assets/images/coding/ct-01.png",
"./assets/images/coding/ct-02.png",
"./assets/images/coding/ct-03.png",
"./assets/images/coding/ct-04.png"];

var trippinImages = ["./assets/images/coding/wt-01.png",
"./assets/images/coding/wt-02.png",
"./assets/images/coding/wt-03.png",
"./assets/images/coding/wt-04.png"];

var index = 0;
var ctImages = document.getElementById("chickenTinder");
var wtImages = document.getElementById("weTrippin");
var i = 0;


setInterval(function() {
    if (++i % 2) {
        ctImages.style.opacity = 0;
        wtImages.style.opacity = 0;
    } else {
        ctImages.src = chickenImages[index = (index + 1) % chickenImages.length];
        ctImages.style.opacity = 1;

        wtImages.src = trippinImages[index = (index + 1) % trippinImages.length];
        wtImages.style.opacity = 1;
    }
}, 4000);

