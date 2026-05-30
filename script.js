const point = document.querySelectorAll('.point');
const slider = document.querySelectorAll('.img-slider');

let contSlider = 0;

point.forEach((item, index) => {
    item.addEventListener('click', () => {
        slider.forEach((img) => {
            img.style.opacity = "0";

        });
        slider[index].style.opacity = "1";

        point.forEach((e) => {
            e.classList.remove('active-point');
        })
        point[index].classList.add('active-point');
    })
})

function slideShow(index) {
    slider.forEach((img) => {
        img.style.opacity = "0";

    });
    slider[index].style.opacity = "1";

    point.forEach((e) => {
        e.classList.remove('active-point');
    })
    point[index].classList.add('active-point');
}

setInterval(() => {
    contSlider++;
    if (contSlider >= slider.length) {
        contSlider = 0;
    }
    slideShow(contSlider);
}, 3000);


//animação com gsap

document.addEventListener('DOMContentLoaded', () => {
    var tl1 = gsap.timeline();

    tl1
        .to('.screen-loading', {
            duration: 2,
            opacity: 0,
            delay: 3,
            ease: "power4.out",
        })
        .fromTo('.bg-slider', {opacity: 0},{
            duration: 1,
            opacity: 1,
            stagger: { each: 0.1 },
            ease: 'power4.out',
        }, '-=1.0')
        .from('nav div', {
            duration: 1.5,
            opacity: 0,
            y: 100,
            stagger: { each: 0.1 },
            ease: 'back.out(1.5)',
        }, '-=0.5')
        .from('.hero div', {
            duration: 1.5,
            opacity: 0,
            y: 200,
            stagger: { each: 0.1 },
            ease: 'back.out(1.5)',
        }, '-=0.8')

});