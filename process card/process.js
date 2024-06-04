let currentSlide = 0;

function slideLeft() {
    const slider = document.getElementById('slider');
    const totalSlides = Math.ceil(document.querySelectorAll('.slide').length / 3); // Number of sets of 3 slides
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function slideRight() {
    const slider = document.getElementById('slider');
    const totalSlides = Math.ceil(document.querySelectorAll('.slide').length / 3); // Number of sets of 3 slides
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}
