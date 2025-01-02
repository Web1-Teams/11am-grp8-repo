
let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.actors-element');
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex >= totalSlides-1) {
        currentIndex = 0; 
    } 
    else if (currentIndex <0) {
        currentIndex = totalSlides - 2; 
    }
     
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 60000);

