// Fixed JavaScript for Carousel Navigation <!-- Highlighted: Updated JavaScript for the carousel -->
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Ensure the index wraps around correctly
    if (index >= totalSlides) {
        currentSlide = 0; // Wrap to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Wrap to the last slide
    } else {
        currentSlide = index; // Update current slide index
    }

    // Hide all slides and show the current one
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
