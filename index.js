// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
  
    currentIndex += direction;

    // Loop around if needed
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100; // Move by 100% of the container width
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Hover effect for corner boxes
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.corner-box');
  
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.5)';
            box.style.zIndex = '10'; 
            box.style.opacity = '1'; 

            boxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.style.transform = 'scale(0.7)';
                    otherBox.style.opacity = '0.5'; 
                }
            });
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
            box.style.zIndex = '1'; 
            box.style.opacity = '0.8'; 

            boxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.style.transform = 'scale(1)';
                    otherBox.style.opacity = '0.8'; 
                }
            });
        });
    });
});

// Sign-up form toggle
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Map functionality




