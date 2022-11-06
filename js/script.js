const HEADER = document.querySelector('.header');
const BURGER = HEADER.querySelector('.nav__burger');
BURGER.addEventListener('click', function () {
    HEADER.classList.toggle('header--active');
    document.body.classList.toggle('no-scroll');
});
const NAV = document.querySelector('.nav__list');
NAV.addEventListener('click', function() {
    HEADER.classList.remove('header--active');
    document.body.classList.remove('no-scroll');
});