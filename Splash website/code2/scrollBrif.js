const navHeight = 90;
const maxHeight = 300;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > navHeight) {
        document.querySelector('.nav-fixed').classList.add('nav-fixed-preloader')
    } else {
        document.querySelector('.nav-fixed').classList.remove('nav-fixed-preloader')
    }

    if (scrollDistance > maxHeight) { 
        document.querySelector('.nav-fixed').classList.remove('nav-fixed-preloader')
    } 

})
