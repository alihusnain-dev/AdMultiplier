// Menu button
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const headerMain = document.querySelector('.header-main');

mobileMenuBtn.addEventListener('click', () => {
    headerMain.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!headerMain.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        headerMain.classList.remove('active');
    }
});