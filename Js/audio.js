let myAudio = new Audio("https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3");

window.onload = function() {
    setInterval(GameLoop, 1000 / 10);
};

function GameLoop() {
    if (myAudio.paused) {
        myAudio.play();
    }
}