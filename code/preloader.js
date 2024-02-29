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

/* CASE SECTION PRELOADER */

const casesSection = document.querySelector('.case-text');
const casesSectionHeight = casesSection.getBoundingClientRect();
const casesSectionPreloaderDistance = casesSectionHeight.top + window.pageYOffset - 450;


window.addEventListener('scroll', () => {  
    let preloaderStarter = window.scrollY;
        if (preloaderStarter >= casesSectionPreloaderDistance) {
            document.querySelector('.case-text').classList.add('case-text-preloader')
        }
}) 

const casesSectionIs1 = document.querySelector('.case-block');
const casesSectionIs1Height = casesSectionIs1.getBoundingClientRect();
const casesSectionIs1PreloaderDistance = casesSectionIs1Height.top + window.pageYOffset - 600;


window.addEventListener('scroll', () => {  
    let preloaderStarter = window.scrollY;
        if (preloaderStarter >= casesSectionIs1PreloaderDistance) {
            document.querySelector('.case-block').classList.add('case-block-preloader')
        }
}) 

const caseSectionBtn = document.querySelector('.case-btn');
const caseSectionBtnHeight = caseSectionBtn.getBoundingClientRect();
const caseSectionBtnPreloaderDistance = caseSectionBtnHeight.top + window.pageYOffset - 1000;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if(preloaderStarter >= caseSectionBtnPreloaderDistance) {
        document.querySelector('.case-btn').classList.add('case-btn-preloader')
    }
})

/* PROCESS SECTION PRELOADER */

const processSection = document.querySelector('.process-text')
const processSectionHeight = processSection.getBoundingClientRect();
const processSectionPreloaderDistance = processSectionHeight.top + window.pageYOffset - 850;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= processSectionPreloaderDistance) {
        document.querySelector('.process-text').classList.add('process-text-preloader')
        document.querySelector('.process-subtext').classList.add('process-subtext-preloader')
        document.querySelector('.process-section-is1').classList.add('process-section-is1-preloader')
    }
})

const processSectionIs1 = document.querySelector('.process-section-is2')
const processSectionIs1Height = processSectionIs1.getBoundingClientRect();
const processSectionIs1PreloaderDistance = processSectionIs1Height.top + window.pageYOffset - 1100;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= processSectionIs1PreloaderDistance) {
        document.querySelector('.process-section-is2').classList.add('process-section-is2-preloader')
    }
})

const processSectionIs2 = document.querySelector('.process-section-is3')
const processSectionIs2Height = processSectionIs2.getBoundingClientRect();
const processSectionIs2PreloaderDistance = processSectionIs2Height.top + window.pageYOffset - 1100;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= processSectionIs2PreloaderDistance) {
        document.querySelector('.process-section-is3').classList.add('process-section-is3-preloader')
        document.querySelector('.process-brif-send').classList.add('process-brif-send-preloader')
    }
})

/* SERVICES SECTION PRELOADER */

const servicesText = document.querySelector('.services-text-section')
const servicesTextHeight = servicesText.getBoundingClientRect();
const servicesTextPreloaderDistance = servicesTextHeight.top + window.pageYOffset - 1200;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= servicesTextPreloaderDistance) {
        document.querySelector('.services-text-section').classList.add('services-text-section-preloader')
        document.getElementById('services-section1').classList.add('services-section-preloader')
    }
})

const servicesTextSectionIs1 = document.getElementById('services-section2')
const servicesTextSectionIs1Height = servicesTextSectionIs1.getBoundingClientRect();
const servicesTextSectionIs1PreloaderDistance = servicesTextSectionIs1Height.top + window.pageYOffset - 1300;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= servicesTextSectionIs1PreloaderDistance) {
        document.getElementById('services-section2').classList.add('services-section-preloader')
    }
})

const servicesTextSectionIs2 = document.getElementById('services-section3')
const servicesTextSectionIs2Height = servicesTextSectionIs2.getBoundingClientRect();
const servicesTextSectionIs2PreloaderDistance = servicesTextSectionIs2Height.top + window.pageYOffset - 1425;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= servicesTextSectionIs2PreloaderDistance) {
        document.getElementById('services-section3').classList.add('services-section-preloader')
    }
})

const servicesTextSectionIs3 = document.getElementById('services-section3')
const servicesTextSectionIs3Height = servicesTextSectionIs3.getBoundingClientRect();
const servicesTextSectionIs3PreloaderDistance = servicesTextSectionIs3Height.top + window.pageYOffset - 1550;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= servicesTextSectionIs3PreloaderDistance) {
        document.getElementById('services-section3').classList.add('services-section-preloader')
    }
})

const servicesTextSectionIs4 = document.getElementById('services-section4')
const servicesTextSectionIs4Height = servicesTextSectionIs4.getBoundingClientRect();
const servicesTextSectionIs4PreloaderDistance = servicesTextSectionIs4Height.top + window.pageYOffset - 1775;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= servicesTextSectionIs4PreloaderDistance) {
        document.getElementById('services-section4').classList.add('services-section-preloader')
    }
})

/* SUPPORT SECTION PRELOADER */

function supportBgPreloader() {
    document.querySelector('.support-bg').classList.add('support-bg-preloader')
}

const supportBg = document.querySelector('.support-bg')
const supportBgHeight = supportBg.getBoundingClientRect();
const supportBgPreloaderDistance = supportBgHeight.top + window.pageYOffset - 1700;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= supportBgPreloaderDistance) {
        supportBgPreloader()
    }
})

/* HOW WE WORK PRELOADER */

const howWeWorkText = document.querySelector('.howWe-work-text-block')
const howWeWorkTextHeight = howWeWorkText.getBoundingClientRect();
const howWeWorkTextPreloaderDistance = howWeWorkTextHeight.top + window.pageYOffset - 1750;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= howWeWorkTextPreloaderDistance) {
        document.querySelector('.howWe-work-text-block').classList.add('howWe-work-text-block-preloader')
        document.querySelector('.howWe-work-section1').classList.add('howWe-work-section-preloader')
    }
})

const howWeWorkSection = document.querySelector('.howWe-work-section2')
const howWeWorkSectionHeight = howWeWorkSection.getBoundingClientRect();
const howWeWorkSectionPreloaderDistance = howWeWorkSectionHeight.top + window.pageYOffset - 1975;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= howWeWorkSectionPreloaderDistance) {
        document.querySelector('.howWe-work-section2').classList.add('howWe-work-section-preloader')
    }
})

const howWeWorkSection3 = document.querySelector('.howWe-work-section3')
const howWeWorkSection3Height = howWeWorkSection3.getBoundingClientRect();
const howWeWorkSection3PreloaderDistance = howWeWorkSection3Height.top + window.pageYOffset - 2050;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= howWeWorkSection3PreloaderDistance) {
        document.querySelector('.howWe-work-section3').classList.add('howWe-work-section-preloader')
    }
})

/* PLAN PROJECT SECTION PRELOADER */

function planProjectBgPreloader() {
    document.querySelector('.planProject-bg').classList.add('planProject-bg-preloader')
}

const planProjectBg = document.querySelector('.planProject-bg')
const planProjectBgHeight = planProjectBg.getBoundingClientRect();
const planProjectBgPreloaderDistance = planProjectBgHeight.top + window.pageYOffset - 2300;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= planProjectBgPreloaderDistance) {
        planProjectBgPreloader()
    }
})

/* GET PROJECT SECTION PRELOADER */

function getProjectBgPreloader() {
    document.querySelector('.get-project-bg').classList.add('get-project-bg-preloader')
}

const getProjectBg = document.querySelector('.get-project-bg')
const getProjectBgHeight = getProjectBg.getBoundingClientRect();
const getProjectBgPreloaderDistance =getProjectBgHeight.top + window.pageYOffset - 2300;

window.addEventListener('scroll', () => {
    let preloaderStarter = window.scrollY;
    if (preloaderStarter >= getProjectBgPreloaderDistance) {
        getProjectBgPreloader()
    }
})





