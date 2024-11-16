let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Wrap the index within bounds
    if (index >= totalSlides) {
        currentSlide = 0; // Wrap to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Wrap to the last slide
    } else {
        currentSlide = index; // Update current slide index
    }

    // Hide all slides and show only the current one
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Highlighted Change: Initialize the carousel after the DOM is loaded properly
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
