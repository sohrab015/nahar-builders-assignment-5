"use strict";

// HERO CAROUSEL

// DOM Elements
const carousel = document.getElementById("heroCarousel");

const slides = document.querySelectorAll("#heroCarousel .carousel-item");

const dots = document.querySelectorAll(".slide-dot");

const prevButton = document.getElementById("prevSlide");

const nextButton = document.getElementById("nextSlide");

// Variables
let currentSlide = 0;

let autoSlide;

// Total Slides
const totalSlides = slides.length;

// SHOW SLID
function showSlide(index) {
    // Loop handling
    if (index >= totalSlides) {
        index = 0;
    }
    if (index < 0) {
        index = totalSlides - 1;
    }

    currentSlide = index;

    // Scroll to selected slide
    carousel.scrollTo({
        left: slides[currentSlide].offsetLeft,
        behavior: "smooth"
    });

    // Update active dot
    dots.forEach((dot, i) => {

        dot.classList.toggle("btn-warning", i === currentSlide);
        dot.classList.toggle("btn-neutral", i !== currentSlide);

    });

}

// NEXT SLID
function nextSlide() {
    showSlide(currentSlide + 1);
}

// PREVIOUS SLIDE
function previousSlide() {
    showSlide(currentSlide - 1);
}

// AUTOMATIC SLIDE
function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);

}

// STOP AUTOMATIC SLIDE
function stopAutoSlide() {
    clearInterval(autoSlide);

}

// MANUAL DOT CLICK
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();

    });

});

// PREVIOUS BUTTON
prevButton.addEventListener("click", () => {

    stopAutoSlide();
    previousSlide();
    startAutoSlide();

});

// NEXT BUTTON
nextButton.addEventListener("click", () => {

    stopAutoSlide();

    nextSlide();

    startAutoSlide();

});

// PAUSE ON MOUSE HOVER
carousel.addEventListener("mouseenter", stopAutoSlide);

carousel.addEventListener("mouseleave", startAutoSlide);

// MOBILE SWIPE / MANUAL SCROLL
let scrollTimeout;

carousel.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        let closestIndex = 0;
        let smallestDistance = Infinity;

        slides.forEach((slide, index) => {

            const distance = Math.abs(
                carousel.scrollLeft - slide.offsetLeft
            );

            if (distance < smallestDistance) {

                smallestDistance = distance;

                closestIndex = index;

            }

        });

        currentSlide = closestIndex;

        // Update active dot
        dots.forEach((dot, i) => {

            dot.classList.toggle("btn-warning", i === currentSlide);

            dot.classList.toggle("btn-neutral", i !== currentSlide);

        });

    }, 100);

});






showSlide(0);

startAutoSlide();