const menuButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

// close nav if viewport becomes large
window.onresize = () => {
    if (window.innerWidth > 480) {
        mainNav.classList.remove('visible')
    }
};