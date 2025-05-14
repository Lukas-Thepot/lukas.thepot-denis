
//Déplacement grabbing
const slider = document.querySelector('.scroll-container');
let isDown = false;
let startX, startY;
let scrollLeft, scrollTop;

// Fonction pour gérer les événements tactiles et souris
function startDrag(e) {
    isDown = true;
    slider.classList.add('active');
    const event = e.touches ? e.touches[0] : e; // Gère les événements tactiles et souris
    startX = event.pageX - slider.offsetLeft;
    startY = event.pageY - slider.offsetTop;
    scrollLeft = slider.scrollLeft;
    scrollTop = slider.scrollTop;
}

function stopDrag() {
    isDown = false;
    slider.classList.remove('active');
}

function moveDrag(e) {
    if (!isDown) return;
    e.preventDefault();
    const event = e.touches ? e.touches[0] : e; // Gère les événements tactiles et souris
    const x = event.pageX - slider.offsetLeft;
    const y = event.pageY - slider.offsetTop;
    const walkX = (x - startX) * 2; // Ajuster la vitesse du déplacement horizontal
    const walkY = (y - startY) * 2; // Ajuster la vitesse du déplacement vertical
    slider.scrollLeft = scrollLeft - walkX;
    slider.scrollTop = scrollTop - walkY;
}

// Événements pour souris
slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mouseleave', stopDrag);
slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('mousemove', moveDrag);

// Événements pour tactile
slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchend', stopDrag);
slider.addEventListener('touchmove', moveDrag);

//Mise à l'échelle
function functionResize() {
    let scaleWidth = window.innerWidth / 1920;
    let scaleHeight = window.innerHeight / 1080;
    let scaleValue1 = Math.max(scaleHeight, scaleWidth);
    
    document.querySelector('.content').style.transition = "transform 0s";
    document.querySelector('.content').style.transform = `scale(${scaleValue1})`;
}
window.addEventListener("resize",functionResize);
window.addEventListener("load", functionResize);

//Etoiles
const starCount = 100; // Nombre d'étoiles
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 300}px`;
    star.style.left = `${Math.random() * 1900}px`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}

//Project
function projectTitleOver(){
    document.getElementById("projectTitle").style.animation = "lever 0.2s ease-out forwards";
    
}
document.getElementById("youpitwo").addEventListener("mouseover", projectTitleOver);

function projectTitleOut(){
    document.getElementById("projectTitle").style.animation = "fondu 0.5s ease-out forwards";
}
document.getElementById("youpitwo").addEventListener("mouseout", projectTitleOut);

function aboutProject(){
    document.getElementById("lukas").style.transition = "opacity 2s";
    document.getElementById("lukas").style.opacity = "0";
    
    document.getElementById("projectText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("youpitwo").addEventListener('click', aboutProject);

window.addEventListener("load", function() {
    document.getElementById("loading-screen").style.display = "none";
    document.querySelector('.content').style.position = "relative";
    document.getElementById("footer").style.display = "table";
});

function sailingTitleOver(){
    document.getElementById("sailingTitle").style.animation = "lever 0.2s ease-out forwards";
}
document.getElementById("wingfoil").addEventListener("mouseover", sailingTitleOver);

function sailingTitleOut(){
    document.getElementById("sailingTitle").style.animation = "fondu 0.5s ease-out forwards";
}
document.getElementById("wingfoil").addEventListener("mouseout", sailingTitleOut);

function cursusTitleOver(){
    document.getElementById("cursusTitle").style.animation = "lever 0.2s ease-out forwards";
}
document.getElementById("littlePrince").addEventListener("mouseover", cursusTitleOver);

function cursusTitleOut(){
    document.getElementById("cursusTitle").style.animation = "fondu 0.5s ease-out forwards";
}
document.getElementById("littlePrince").addEventListener("mouseout", cursusTitleOut);

function aboutSailing(){
    document.getElementById("lukas").style.transition = "opacity 2s";
    document.getElementById("lukas").style.opacity = "0";
    document.getElementById("sailingText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("wingfoil").addEventListener('click', aboutSailing);

function aboutCursus(){
    document.getElementById("lukas").style.transition = "opacity 2s";
    document.getElementById("lukas").style.opacity = "0";
    document.getElementById("cursusText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("littlePrince").addEventListener('click', aboutCursus);

function lukasTitleOver(){
    document.getElementById("aboutMe").style.transition = "background-color 1s";
    document.getElementById("aboutMe").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
}
document.getElementById("lukas").addEventListener("mouseover", lukasTitleOver);

function lukasTitleOut(){
    document.getElementById("aboutMe").style.transition = "background-color 1s";
    document.getElementById("aboutMe").style.backgroundColor = "rgba(255, 255, 255, 0)";
}
document.getElementById("lukas").addEventListener("mouseout", lukasTitleOut);

function aboutLukas(){
    document.getElementById("lukas").style.transition = "opacity 2s";
    document.getElementById("lukas").style.opacity = "0";
    
    document.getElementById("lukasText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";
    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("lukas").addEventListener('click', aboutLukas);

function leaveSection(){    
    document.getElementById("lukas").style.opacity = "1";
    document.getElementById("projectText").style.display = "none";
    document.getElementById("sailingText").style.display = "none";
    document.getElementById("cursusText").style.display = "none";
    document.getElementById("lukasText").style.display = "none";
    document.querySelector('.content').style.position = "relative";
    backgroundText.style.display = "none";
    document.getElementById("footer").style.display = "table";
}
document.getElementById("closeButton").addEventListener("click", leaveSection);

let images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Retourne à la dernière image
} else if (currentIndex >= images.length) {
        currentIndex = 0; // Retourne à la première image
}
document.getElementById("lightbox-img").src = images[currentIndex].src;
        }

function discoverProject(){
    document.getElementById("lukasText").style.display = "none";
    document.getElementById("cursusText").style.display = "none";
    
    document.getElementById("projectText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("discoverProject").addEventListener("click", discoverProject);
document.getElementById("discoverProject2").addEventListener("click", discoverProject);

function discoverProfessional(){
    document.getElementById("lukasText").style.display = "none";
    
    document.getElementById("cursusText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("discoverProfessional").addEventListener("click", discoverProfessional);

function discoverSailing(){
    document.getElementById("lukasText").style.display = "none";
    document.getElementById("cursusText").style.display = "none";
    
    document.getElementById("sailingText").style.display = "inline";

     document.querySelector('.content').style.position = "fixed";
    
    document.getElementById("footer").style.display = "none";

    
   // Etape 1: Changer le display et réinitialiser l'opacité
    backgroundText.style.display = "inline";
    backgroundText.style.position = "fixed";
    backgroundText.style.opacity = "0";
    // Etape 2: Forcer un reflow pour garantir que l'étape précédente est appliquée
    backgroundText.offsetHeight; 
    // Etape 3: Appliquer la transition
    backgroundText.style.transition = "opacity 2s";
    backgroundText.style.opacity = "1";
}
document.getElementById("discoverSailing").addEventListener("click", discoverSailing);
document.getElementById("discoverSailing2").addEventListener("click", discoverSailing);