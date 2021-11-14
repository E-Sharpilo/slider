let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');

let sidebar = document.querySelector('.sidebar');
let mainslide = document.querySelector('.main-slide');
let container = document.querySelector('.container');

let slidesCount = mainslide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;


let activeSlideIndex = 0

upBtn.addEventListener('click', ()=> {
    changeSlide('up')
})


downBtn.addEventListener('click', ()=> {
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount -1
        }
    }
    let height = container.clientHeight
    mainslide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}