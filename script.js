// Smooth Scroll Functionality
// This code will enable smooth scrolling for anchor links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function changeNav() {
    let index = sections.length;
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {};
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

window.addEventListener('scroll', changeNav);

// Interactive Elements
// Example: Toggle a class on button click
const button = document.querySelector('.toggle-button');
button.addEventListener('click', () => {
    const element = document.querySelector('.element-to-toggle');
    element.classList.toggle('active');
});