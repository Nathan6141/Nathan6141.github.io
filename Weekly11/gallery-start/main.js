const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenameArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altTextArray = ['1','2','3','4','5'];
/* Looping through images */
for (let i = 0; i < filenameArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + filenameArray[i]);
    newImage.setAttribute('alt', altTextArray[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const whatClass = btn.getAttribute('class');

    if (whatClass === 'dark') {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});