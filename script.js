const point = document.querySelectorAll('.point');
const slider = document.querySelectorAll('.img-slider');

point.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        slider.forEach((img)=>{
            img.style.opacity = "0";
            
        });
        slider[index].style.opacity="1";

        point.forEach((e)=>{
            e.classList.remove('active-point');
        }) 
        point[index].classList.add('active-point');
    })
})