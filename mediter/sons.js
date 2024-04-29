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
        const temps = 60*parseInt(selectedValues[0]);
        const audio1Duration = parseInt(selectedValues[1]); 
        const silence1Duration = parseInt(selectedValues[2]);
        const audio2Duration = parseInt(selectedValues[3]);
        const silence2Duration = parseInt(selectedValues[4]);
        const periode = audio1Duration+audio2Duration+silence1Duration+silence2Duration;
        const nbCycles = temps/periode;
        // Fonction pour jouer audio1
        function playAudio1() {
            playButton.textContent = "Inspirer";
            audio2.pause();
            audio2.currentTime = 0;
            audio1.play();
            setTimeout((silence1Duration == 0) ? playAudio2 : playSilence1, audio1Duration*1000); // Jouer le silence après audio1
        }

        // Fonction pour jouer le silence après audio1
        function playSilence1() {
            playButton.textContent = "bloquer";
            audio1.pause();
            audio1.currentTime = 0;
            setTimeout(playAudio2, silence1Duration*1000); // Jouer audio2 après le silence
        }

        // Fonction pour jouer audio2
        function playAudio2() {
            playButton.textContent = "exprirer";
            audio1.pause();
            audio1.currentTime = 0;
            audio2.play();
            if (silence1Duration != 0){
                setTimeout(playSilence2, audio2Duration*1000); // Jouer le silence après audio1
            }
        }

        // Fonction pour jouer le silence après audio2
        function playSilence2() {
            playButton.textContent = "bloquer";
            audio2.pause();
            audio2.currentTime = 0;
        }

        // Jouer le cycle audio toutes les n minutes
        let compteur = 1;
        playAudio1();
        const intervalGeneral = setInterval(() => {
            if (compteur > nbCycles-1){
                clearInterval(intervalGeneral);
                clearInterval(intervalClock);
            }
            else{
                compteur++;
                console.log(compteur+"/"+nbCycles);
                playAudio1(); // Commencer le cycle avec audio1   
            }
        }, periode*1000);
    const depart = new Date();
    function updateClock() {
        var now = new Date();
        const seconde = Math.floor(temps-(now.getTime()-depart.getTime())/1000);
        const minutes = String(Math.floor(seconde/60)).padStart(2, '0');
        const seconds = String(seconde%60).padStart(2, '0');
        const timeString = minutes + ':' + seconds;
    
        document.getElementById('clock').textContent = timeString;
        document.getElementById('progression').style.width = String((1-seconde/temps)*100)+"%";
    }
    
    // Mettre à jour l'horloge toutes les secondes
    const intervalClock = setInterval(updateClock, 1000);

    });

    
});
