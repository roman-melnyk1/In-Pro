const burgerBtn = document.getElementById('burgerToggle');
const navMenu = document.getElementById('navMenu');
  
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