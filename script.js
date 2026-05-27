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

setInterval(()=>{
    contSlider++;
    if(contSlider >= slider.length){
        contSlider = 0;
    }
    slideShow(contSlider);
},3000);


//animação com gsap

document.addEventListener('DOMContentLoaded', ()=>{
    var tl1 = gsap.timeline();

    tl1
    .to('.screen-loading',{
        duration:2,
        opacity:0,
        delay:3,
        ease: "power4.out",
    })
    .from('.bg-hero', {
        duration: 1,
        opacity: 0,
        stagger:{each: 0.1},
        ease: 'power4.out',  
    }, '-=1.0')
    .from('nav div',{
        duration: 2,
        opacity: 0,
        y:400,
        stagger:{each:0.2},
        ease: 'back.out(1.7)',
    }, '-=0.5')
    .from('.box-hero div',{
        duration: 2,
        opacity: 0,
        y:200,
        stagger:{each:0.2},
        ease: 'back.out(1.7)',
    },'-=1.7')

});