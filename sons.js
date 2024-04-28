document.addEventListener('DOMContentLoaded', function() {
    var audio1 = new Audio("gong.mp3");
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
        const totalTime = audio1Duration+audio2Duration+silence1Duration+silence2Duration; // 5 minutes en millisecondes
        const nbCycles = 8*1000/totalTime;
        // Fonction pour jouer audio1
        function playAudio1() {
            playButton.textContent = "Inspirer";
            audio1.play();
            setTimeout(playSilence1, audio1Duration); // Jouer le silence après audio1
        }

        // Fonction pour jouer le silence après audio1
        function playSilence1() {
            playButton.textContent = "bloquer";
            audio1.pause();
            audio1.currentTime = 0;
            setTimeout(playAudio2, silence1Duration); // Jouer audio2 après le silence
        }

        // Fonction pour jouer audio2
        function playAudio2() {
            playButton.textContent = "exprirer";
            audio2.play();
            setTimeout(playSilence2, audio2Duration); // Jouer le silence après audio2
        }

        // Fonction pour jouer le silence après audio2
        function playSilence2() {
            playButton.textContent = "bloquer";
            audio2.pause();
            audio2.currentTime = 0;
        }

        // Jouer le cycle audio toutes les n minutes
        let compteur = 0;
        playAudio1();
        const intervalId = setInterval(() => {
            if (compteur > nbCycles){
                clearInterval(intervalId);
            }
            else{
                compteur++;
                playAudio1(); // Commencer le cycle avec audio1   
            }
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
