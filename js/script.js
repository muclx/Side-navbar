const links = document.querySelectorAll(".nav-items > a");
const burgerIcon = document.querySelector('.burger-icon')
const xIcon = document.querySelector('.x-icon')
const nav = document.querySelector('nav')
const section = document.querySelectorAll('section')

function ArrowAnimation(event) {
    const arrow = event.target.querySelector('.arrow');
    if (arrow) {
        arrow.classList.toggle('arrow-animation');
    }
}

const toggleNav = () => {
    xIcon.classList.toggle('hide')
    burgerIcon.classList.toggle('hide')
    nav.classList.toggle('nav-transform')
    section.forEach(sections => {
        sections.classList.toggle('width-section');
    });
}


links.forEach(link => {
    link.addEventListener("mouseenter", ArrowAnimation);
    link.addEventListener("mouseleave", ArrowAnimation);
});
xIcon.addEventListener('click', toggleNav)
burgerIcon.addEventListener('click', toggleNav)