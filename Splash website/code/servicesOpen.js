const newElement = document.createElement('img');


document.querySelector('.services-section-img1').addEventListener('click', function() {
    document.getElementById('services-section-text1').classList.toggle("services-section-text-active");
    document.getElementById('services-section1').classList.toggle("services-section-active")
    document.getElementById('services-section-subtext1').classList.toggle("services-section-subtext-active")  
    document.getElementById('services-img-1').classList.toggle("none")
})

document.querySelector('.services-section-img2').addEventListener('click', function() {
    document.getElementById('services-section-text2').classList.toggle("services-section-text-active");
    document.getElementById('services-section2').classList.toggle("services-section-active")
    document.getElementById('services-section-subtext2').classList.toggle("services-section-subtext-active")
    document.getElementById('services-img-2').classList.toggle("none")
})

document.querySelector('.services-section-img3').addEventListener('click', function() {
    document.getElementById('services-section-text3').classList.toggle("services-section-text-active");
    document.getElementById('services-section3').classList.toggle("services-section-active")
    document.getElementById('services-section-subtext3').classList.toggle("services-section-subtext-active")
    document.getElementById('services-img-3').classList.toggle("none")
})

document.querySelector('.services-section-img4').addEventListener('click', function() {
    document.getElementById('services-section-text4').classList.toggle("services-section-text-active");
    document.getElementById('services-section4').classList.toggle("services-section-active")
    document.getElementById('services-section-subtext4').classList.toggle("services-section-subtext-active")
    document.getElementById('services-img-4').classList.toggle("none")
})

