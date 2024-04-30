let audio = new Audio("jazzBackground.mp3");
let currentVol = document.querySelector("#volSlide");
let volumeInfo = document.getElementById('volumeInfo');
let setVolume = document.getElementById('setVolume');
let resetVolume = document.getElementById('resetVolume');


let adjustVol = true;


audio.volume = 1;
volumeInfo.textContent = "Volume: " + Math.round(audio.volume * 100) + '%';

currentVol.addEventListener("change", function(event) { 
    audio.volume = currentVol.value / 100;
    volumeInfo.textContent = 'Volume: ' + currentVol.value + '%';
});


document.addEventListener('mousemove', function(event) { /*Adjust slider value as the mouse cursor is moved */
    if (adjustVol) {
        const x = event.clientX;
        const width = window.innerWidth;
        const percentage = x / width;
        const sliderVal = Math.round(percentage * 100);

        currentVol.value = sliderVal;
        audio.volume = sliderVal / 100;
        volumeInfo.textContent = 'Volume: ' + sliderVal + '%'; 
        
    }
});


setVolume.addEventListener('click', function() {
    audio.volume = currentVol.value / 100;
    adjustVol = false; 
    setVolume.style.opacity = '0.5'; /*Make the set volume button opaque when the volume is currently set */
    volumeInfo.textContent = "Volume set to: " + currentVol.value + '%';
});


resetVolume.addEventListener('click', function() { /*If the reset button has been pressed, readjust opacity
 and set adjust volume to true*/ 
    adjustVol = true; 
    setVolume.style.opacity = '1';
});