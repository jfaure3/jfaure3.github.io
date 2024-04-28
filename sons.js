document.addEventListener('DOMContentLoaded', function() {
    var audio1 = new Audio("gong1.mp3");
    var audio2 = new Audio("gong2.mp3");
    var playButton = document.getElementById("playButton");

    playButton.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.custom-select');
        const selectedValues = [];

        dropdowns.forEach(dropdown => {
            selectedValues.push(dropdown.value);
        });
        console.log(selectedValues);
        // Définir les durées de lecture des sons et des silences
        const audio1Duration = 1000 * parseInt(selectedValues[0]); 
        const silence1Duration = 1000 * parseInt(selectedValues[1]);
        const audio2Duration = 1000 * parseInt(selectedValues[2]);
        const silence2Duration = 1000 * parseInt(selectedValues[3]);
        const totalTime = 5 * 60 * 1000; // 5 minutes en millisecondes

        // Fonction pour jouer audio1
        function playAudio1() {
            audio1.play();
            console.log(1);
            setTimeout(playSilence1, audio1Duration); // Jouer le silence après audio1
        }

        // Fonction pour jouer le silence après audio1
        function playSilence1() {
            console.log(2);
            setTimeout(playAudio2, silence1Duration); // Jouer audio2 après le silence
        }

        // Fonction pour jouer audio2
        function playAudio2() {
            audio2.play();
            console.log(3);
            setTimeout(playSilence2, audio2Duration); // Jouer le silence après audio2
        }

        // Fonction pour jouer le silence après audio2
        function playSilence2() {
            console.log(4);
            setTimeout(playAudio1, silence2Duration); // Revenir à audio1 après le silence
        }

        // Jouer le cycle audio toutes les 3 minutes
        setInterval(() => {
            playAudio1(); // Commencer le cycle avec audio1
        }, totalTime);


        // while 
        // // Jouer le premier son pendant 5 secondes
        // audio1.play();
        // setTimeout(function() {
        //     audio1.pause();
        //     audio1.currentTime = 0;
        //     // Jouer le deuxième son après 5 secondes
        //     audio2.play();
        // }, 5000); // 5000 millisecondes = 5 secondes

        // // Arrêter le deuxième son après 8 secondes
        // setTimeout(function() {
        //     audio2.pause();
        //     audio2.currentTime = 0;
        // }, 13000); // 13000 millisecondes = 5 secondes du premier son + 8 secondes du deuxième son
    });
});
