const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinks2 = document.getElementById('other-navs');

hamburger.addEventListener('click', () => {
    navLinks2.classList.toggle('show');
});
