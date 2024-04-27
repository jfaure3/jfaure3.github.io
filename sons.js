document.addEventListener('DOMContentLoaded', function() {
    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");
    var playButton = document.getElementById("playButton");

    playButton.addEventListener('click', function() {
        // Jouer le premier son pendant 5 secondes
        audio1.play();
        setTimeout(function() {
            audio1.pause();
            audio1.currentTime = 0;
            // Jouer le deuxième son après 5 secondes
            audio2.play();
        }, 5000); // 5000 millisecondes = 5 secondes

        // Arrêter le deuxième son après 8 secondes
        setTimeout(function() {
            audio2.pause();
            audio2.currentTime = 0;
        }, 13000); // 13000 millisecondes = 5 secondes du premier son + 8 secondes du deuxième son
    });
});
