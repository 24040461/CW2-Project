const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinks2 = document.getElementById('other-navs');

hamburger.addEventListener('click', () => {
    navLinks2.classList.toggle('show');
});



// Carosel
// REF https://www.youtube.com/watch?v=gor5BvT2z88&t=672s
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.getElementById('carousel_button--next')
.addEventListener("click", function() {
    moveToNextSlide();
})

document.getElementById('carousel_button--prev')
.addEventListener("click", function() {
    moveToPrevSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible')
}

function moveToNextSlide(){
    updateSlidePosition();
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}
function moveToPrevSlide(){
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

// Modal open 
//ref https://www.youtube.com/watch?v=6ophW7Ask_0&t=1616s

//Get open modal button
var modalBtns = document.querySelectorAll('.modal-open')

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest('.modal').style.display = 'none';
    };
});

window.onclick = function(e){
    if(e.target.className === 'modal'){
        e.target.style.display = 'none';
    }
}
