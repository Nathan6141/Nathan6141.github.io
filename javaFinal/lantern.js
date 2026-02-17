const box = document.getElementById("emotionBox");
const title = document.getElementById("emotionTitle");

document.getElementById("happy").addEventListener("click", function(e) {
    e.preventDefault();
    box.style.backgroundColor = "#ffe066";
    title.textContent = "You are feeling Happy 😊";
});

document.getElementById("sad").addEventListener("click", function(e) {
    e.preventDefault();
    box.style.backgroundColor = "#6c8cd5";
    title.textContent = "You are feeling Sad 💙";
});

document.getElementById("stressed").addEventListener("click", function(e) {
    e.preventDefault();
    box.style.backgroundColor = "#ff6b6b";
    title.textContent = "You are feeling Stressed 😰";
});
// if pressed 'Play Show' then play show else play idle rgb show
