const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// 🔹 DUPLICAR el primer slide al final para un loop más fluido
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

function moveToNextSlide() {
    currentIndex++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Cuando llegue al último (el clon), reiniciar sin transición
    if (currentIndex === slides.length) {
        setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(0)`;
        }, 500); // Tiempo de la transición antes de reiniciar
    }
}

// Mueve el carrusel automáticamente
setInterval(moveToNextSlide, 3000);
