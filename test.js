let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const radios = document.querySelectorAll('.radio-buttons input[type="radio"]');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        moveToSlide(index);
    });
});

function moveToNextSlide() {
    slides[currentIndex].classList.remove('active');
    radios[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    radios[currentIndex].checked = true;
}

function moveToPreviousSlide() {
    slides[currentIndex].classList.remove('active');
    radios[currentIndex].checked = false;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    radios[currentIndex].checked = true;
}

function moveToSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
}

setInterval(moveToNextSlide, 5000);

slides[currentIndex].classList.add('active');
radios[currentIndex].checked = true;
