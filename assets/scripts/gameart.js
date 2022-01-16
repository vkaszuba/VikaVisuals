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

    var enviro = document.getElementById("enviro");

    var enviroIndex = 0;

    var j = 0;

    function enviroTimer() {
        if (++j % 2) {
            enviro.style.opacity = 0;
        } else {
            enviro.src = enviroImages[enviroIndex = (enviroIndex + 1) % enviroImages.length];
            enviro.style.opacity = 1;
        }
    };

    setInterval(function () {
        enviroTimer();
    }, 4000);
    