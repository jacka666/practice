const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    update();
});

function update() {
    circles.forEach((items, index) => { 
        if(index < currentActive) {
            items.classList.add('active');
        }else{
            items.classList.remove('active');
        }
    })
    progress.style.width = ((currentActive-1)/(circles.length-1)*100) + '%';
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === 4){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
