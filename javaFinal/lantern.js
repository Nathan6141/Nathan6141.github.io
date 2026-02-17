const box = document.getElementById("emotionBox");
const title = document.getElementById("emotionTitle");

const emotions = document.querySelectorAll(".emotion");

emotions.forEach(function(emotion) {
    emotion.addEventListener("click", function(e) {
        e.preventDefault();

        const color = this.dataset.color;
        const text = this.dataset.text;

        box.style.backgroundColor = color;
        title.textContent = "You are feeling " + text;
    });
});


// if pressed 'Play Show' then play show else play idle rgb show
