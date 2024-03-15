const  reviews  = document.querySelectorAll(".review")
const endContent = document.querySelector(".satisfied-content")
const btn = document.querySelector(".btn")

console.log(typeof(reviews));

function removeClasses() { 
    reviews.forEach(review => review.classList.remove("active"))
        
    }   

reviews.forEach(review => review.addEventListener("click", () => {

    removeClasses()

    review.classList.add("active")



}))

btn.addEventListener("click", () => {
    reviews.forEach(review => checkActive(review))
})
function checkActive(review) { 
    if (review.classList.contains("active")) {
        checkClass(review)
    }
 }  

function checkClass(review){
    if (review.classList.contains("one")) {
        console.log("nigger");
        buildCard("💔","BAD SERVİCE")
    }else if(review.classList.contains("two")){
        buildCard("✅","Not Bad")
    }else if(review.classList.contains("three")){
        buildCard("❤️","Satisfied")
    }
}

function buildCard(emoji,feedback){
    endContent.innerHTML= `
    <p class="p1">${emoji}</p>
    <p class="p2">Thank You!</p>
    <p class="p3">Feedback: ${feedback}</p>
    <p class="p4">We'll use your feedback to improve our customer support</p>

    <button class="btn-end"> X </button>
    
    `
    endContent.classList.add("active")
    
    checkBtn()
}

function checkBtn(){
    
    const btnEnd = document.querySelector(".btn-end")
    btnEnd.addEventListener("click", () => {
    
    endContent.classList.remove("active")
})
}

