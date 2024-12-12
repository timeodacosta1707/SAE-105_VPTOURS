let currentSlide = 0;

function moveSlide(pas) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + pas + totalSlides) % totalSlides;
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => moveSlide(1), 5000);

window.addEventListener('resize', () => moveSlide(0));

let testimonialIndex = 0;

function moveTestimonialSlide(pas) {
    const carousel = document.querySelector(".testimonials-carousel");
    const slides = document.querySelectorAll(".testimonial-slide");
    testimonialIndex = (testimonialIndex + pas + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

setInterval(() => moveTestimonialSlide(1), 5000);

let disneyIndex = 0;

function moveDisneySlide(pas) {
    const carousel = document.querySelector(".carousel-disney");
    const slides = document.querySelectorAll(".slide-disney");
    disneyIndex = (disneyIndex + pas + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${disneyIndex * 100}%)`;
}

setInterval(() => moveTestimonialSlide(1), 5000);

let louvreIndex = 0;

function movelouvreSlide(pas) {
    const carousel = document.querySelector(".carousel-louvre");
    const slides = document.querySelectorAll(".slide-louvre");
    louvreIndex = (louvreIndex + pas + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${louvreIndex * 100}%)`;
}

let toureiffelIndex = 0;

function movetoureiffelSlide(pas) {
    const carousel = document.querySelector(".carousel-toureiffel");
    const slides = document.querySelectorAll(".slide-toureiffel");
    toureiffelIndex = (toureiffelIndex + pas + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${toureiffelIndex * 100}%)`;
}