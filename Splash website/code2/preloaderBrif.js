/* HEADER PRELOADER */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nav').classList.add('nav-preloader')
    function headerPreloader() {
        document.getElementById('header-text-is1').classList.add('header-text-preloader')
        document.getElementById('header-text-is2').classList.add('header-text-preloader')
        document.querySelector('.header-button').classList.add('header-button-preloader')
        document.querySelector('.header-subtext').classList.add('header-subtext-preloader')
        document.querySelector('.header-boxes').classList.add('header-boxes-preloader')
    }
    setTimeout(headerPreloader, 400)
})