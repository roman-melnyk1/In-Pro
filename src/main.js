const burgerBtn = document.getElementById('burgerToggle');
const navMenu = document.getElementById('navMenu');
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link , .btn-primary');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

document.querySelectorAll('.nav-link , .btn-primary').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
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
    rootMargin: '0px',
    threshold: 0.2, 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');

            navItems.forEach(item => {

                item.classList.remove('active');
                
                if (item.getAttribute('href') === `#${currentId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});