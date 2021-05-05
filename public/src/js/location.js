const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinks2 = document.getElementById('other-navs');

hamburger.addEventListener('click', () => {
    navLinks2.classList.toggle('show');
});


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
