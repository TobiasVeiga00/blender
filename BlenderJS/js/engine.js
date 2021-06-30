let blenderStatus = "off";
let blenderjs = document.getElementById("blender");
let buttonSound = document.getElementById("blender-button-sound");
let blenderSound = document.getElementById("blender-sound");


function beepBeepSound() {
    if(blenderSound.paused){
        buttonSound.play();
        blenderSound.play();
    } else {
        buttonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}

function blenderControl() {
    if(blenderStatus == "off"){
        blenderStatus = "on";
        beepBeepSound();
        blenderjs.classList.add("active");
        console.log("Beep Beep turned on");
    } else {
        blenderStatus = "off";
        beepBeepSound();
        blenderjs.classList.remove("active");
        console.log("Awww i died");
    }
}

