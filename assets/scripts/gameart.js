var enviroImages = ["./assets/images/design/RA_01.png",
    "./assets/images/design/RA_02.png",
    "./assets/images/design/RA_03.png",
    "./assets/images/design/BR_01.png",
    "./assets/images/design/BR_02.png",
    "./assets/images/design/BR_03.png",
    "./assets/images/design/FV_01.png",
    "./assets/images/design/FV_02.png",
    "./assets/images/design/FV_03.png",
    "./assets/images/design/WF_01.png",
    "./assets/images/design/WF_02.png",
    "./assets/images/design/WF_03.png",
    "./assets/images/design/WF_04.png"];

    var professionalImages = ["./assets/images/design/Nokia_01.png",
    "./assets/images/design/Nokia_02.png",
    "./assets/images/design/Nokia_03.png",
    "./assets/images/design/HP_01.png",
    "./assets/images/design/HP_02.png",
    "./assets/images/design/HP_03.png"];

    var enviro = document.getElementById("enviro");
    var professional = document.getElementById("professional");

    var enviroIndex = 0;
    var professionalIndex = 0;

    var j = 0;
    var k = 0;

    function enviroTimer() {
        if (++j % 2) {
            enviro.style.opacity = 0;
        } else {
            enviro.src = enviroImages[enviroIndex = (enviroIndex + 1) % enviroImages.length];
            enviro.style.opacity = 1;
        }
    };

    function professionalTimer() {
        if (++k % 2) {
            professional.style.opacity = 0;
        } else {
            professional.src = professionalImages[professionalIndex = (professionalIndex + 1) % professionalImages.length];
            professional.style.opacity = 1;
        }
    };

    setInterval(function () {
        enviroTimer();
        professionalTimer();
    }, 4000);
    