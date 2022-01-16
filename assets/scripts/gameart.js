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

    var plutoImages = ["./assets/images/design/Pluto_01.png",
    "./assets/images/design/Pluto_02.png",
    "./assets/images/design/Pluto_03.png",
    "./assets/images/design/Pluto_04.png",
    "./assets/images/design/Pluto_05.png",
    "./assets/images/design/Pluto_06.png",
    "./assets/images/design/Pluto_07.png"];

    var professionalImages = ["./assets/images/design/Nokia_01.png",
    "./assets/images/design/Nokia_02.png",
    "./assets/images/design/Nokia_03.png",
    "./assets/images/design/HP_01.png",
    "./assets/images/design/HP_02.png",
    "./assets/images/design/HP_03.png"];

    var enviro = document.getElementById("enviro");
    var pluto = document.getElementById("pluto");
    var professional = document.getElementById("professional");

    var enviroIndex = 0;
    var plutoIndex = 0;
    var professionalIndex = 0;

    var j = 0;
    var k = 0;
    var l = 0;

    function enviroTimer() {
        if (++j % 2) {
            enviro.style.opacity = 0;
        } else {
            enviro.src = enviroImages[enviroIndex = (enviroIndex + 1) % enviroImages.length];
            enviro.style.opacity = 1;
        }
    };

    function plutoTimer() {
        if (++k % 2) {
            pluto.style.opacity = 0;
        } else {
            pluto.src = plutoImages[plutoIndex = (plutoIndex + 1) % plutoImages.length];
            pluto.style.opacity = 1;
        }
    };

    function professionalTimer() {
        if (++l % 2) {
            professional.style.opacity = 0;
        } else {
            professional.src = professionalImages[professionalIndex = (professionalIndex + 1) % professionalImages.length];
            professional.style.opacity = 1;
        }
    };

    setInterval(function () {
        enviroTimer();
        plutoTimer();
        professionalTimer();
    }, 4000);
    