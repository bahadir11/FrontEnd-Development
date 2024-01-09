const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlide = 0 

checkBtn()
setBgToBody()

function checkBtn(){
    if (activeSlide >= slides.length -1 ) {
        document.getElementById("right").disabled = true;
        console.log("nigga");
        rightBtn.style.color = "#555" 
    }else if(activeSlide == 0){
        document.getElementById("left").disabled = true;
        console.log("nigga");
        leftBtn.style.color = "#555" 
    }else{
        document.getElementById("left").disabled = false;
        document.getElementById("right").disabled = false;
        leftBtn.style.color = "white"
        rightBtn.style.color = "white"
    }}
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
function setActiveSlide() { 
    slides.forEach(slide => slide.classList.remove("active"))

    slides[activeSlide].classList.add("active")
 }

rightBtn.addEventListener("click", () => {
    
    
    activeSlide++
    checkBtn()
    setActiveSlide()
    setBgToBody(activeSlide)
})
leftBtn.addEventListener("click", () => {
    
    activeSlide--
    checkBtn()
    setActiveSlide()
    
    setBgToBody(activeSlide)
})