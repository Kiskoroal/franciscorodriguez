const toggle = document.getElementById('toggle');
const menu = document.getElementById('nav');

toggle.addEventListener('click', () => {
    menu.classList.toggle('menu--show');
});