// Smooth Scroll voor ankerlinks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Controleer of de link geen subpagina is
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobiele Navigatie Toggle
const nav = document.querySelector('nav');
const toggleButton = document.createElement('div');
toggleButton.classList.add('nav-toggle');
toggleButton.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('header .container').insertBefore(toggleButton, nav);

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

// Sluit het menu wanneer een link wordt aangeklikt (voor mobiele apparaten)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            toggleButton.classList.remove('active');
        }
    });
});

// Scroll-naar-boven Knop
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTopButton';
scrollToTopButton.innerHTML = '↑';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animatie bij Scrollen (Fade-in effect)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
