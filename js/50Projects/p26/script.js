const sliderContainer = document.querySelector(".slider-container")
const slideLeft = document.querySelector(".left-slide")
const slideRight = document.querySelector(".right-slide")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = slideRight.querySelectorAll("div").length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide("up"))
downButtonutton.addEventListener("click", () => changeSlide("down"))


const changeSlide = (direction) => { 
    const sliderHeight = sliderContainer.clientHeight
    if (direction ==) {
        
    }
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideRight.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}