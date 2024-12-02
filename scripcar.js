const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Función para mostrar el slide actual
function showSlide(index) {
    const offset = -index * 100; // Desplazamiento basado en el índice
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Función para mover al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Función para mover al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Listeners para las flechas
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Cambio automático cada 4 segundos
setInterval(nextSlide, 4000);
