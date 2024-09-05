const menu = document.querySelector('.nav__menu');
const button = document.querySelector('.nav__button');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const outside = document.querySelectorAll('.bar-outside');

let menuOn = false;

button.addEventListener('click',()=>{
    if(menuOn){
        span1.style.transform="rotate(0deg)";
        span2.style.transform="rotate(0deg)";
        outside.forEach(bar=>bar.style.opacity="1");
        menu.style.left="-100%";
        menuOn = false;
    }else{
        span1.style.transform="rotate(45deg)";
        span2.style.transform="rotate(-45deg)";
        outside.forEach(bar=>bar.style.opacity="0");
        menu.style.left="0";
        menuOn = true;
    }
})