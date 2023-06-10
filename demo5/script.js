const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');
const btn = document.querySelector('.btn')

let load = 0;
let timer;
btn.addEventListener('click',()=>{
    timer = setInterval(blurring,30);
})

function blurring() {
    load++;
    text.innerHTML = `${load}%`;
    text.style.opacity = 1-load/100;
    bg.style.filter = `blur(${30 - load/100*30}px)`;
    btn.style.filter = `blur(${load/100*30}px)`;

    if(load > 99){
        clearInterval(timer);
    }
}