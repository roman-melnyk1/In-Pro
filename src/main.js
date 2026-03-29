import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';

inject();
injectSpeedInsights();

const burgerBtn = document.getElementById('burgerToggle');
const navMenu = document.getElementById('navMenu');
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link, .btn-primary');

burgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navItems.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', 
    threshold: 0 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            updateActiveLink(currentId);
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

function updateActiveLink(id) {
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', (event) => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    if (scrollPos < 100) {
        navItems.forEach(item => item.classList.remove('active'));
        return;
    }

    if ((windowHeight + scrollPos) >= documentHeight - 100) {
        updateActiveLink('contact');
    }
});

AOS.init({
  duration: 800,
  once: true,
  offset: 80,
});