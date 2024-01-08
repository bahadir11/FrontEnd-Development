const rightNumberContainer = document.querySelector(".right-number")
const highOrLow = document.querySelector(".highorlow")
const input = document.querySelector(".answer")
const checkButton = document.querySelector(".check")
const container = document.querySelector(".container")
const closeButton = document.querySelector(".close")
const closeButton1 = document.querySelector(".close1")
const numberWarning = document.querySelector(".number-warning")
const notNumberWarning = document.querySelector(".no-number-warning")
const chances = document.querySelector(".chances")
focusFunc()

let index = 5;
var randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber);

const enteredNumber = input
let val = 0

  
input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        checkButton.click()
    } 
})

checkButton.addEventListener("click", () => mainFunction())


function focusFunc(){
    window.onload = document.querySelector(".answer").focus()

}

function getVal() {
   val = parseInt(document.querySelector('input').value) ;
   document.querySelector("input").value = ""   
}

closeButton.addEventListener("click" , () => {
    container.classList.remove("active")
    numberWarning.classList.remove("active")
    focusFunc()
    
})
closeButton1.addEventListener("click", () => {
    notNumberWarning.classList.remove("active")
    container.classList.remove("active")
    focusFunc()
    
})

 function mainFunction(){
    console.log(index);
    


    input.innerHTML = ""
    input.innerText = ""
    highOrLow.innerHTML = ""
    rightNumberContainer.innerHTML= ""
    
    if (isNaN(val)) {
        container.classList.add("active")
        notNumberWarning.classList.add("active") 
        

    }else if(val<0){
        container.classList.add("active")
        numberWarning.classList.add("active")  
     }else if(val > 100 ){
        container.classList.add("active")
        numberWarning.classList.add("active") 
     }
     if (val > randomNumber) {
        focusFunc()
        highOrLow.style.display = "block"
        highOrLow.innerHTML = `
        your number is <span class="high"> HIGH </span>
        `
        index--
        chanceCalculate(index)

     }else if(val < randomNumber){
        focusFunc()

        highOrLow.style.display = "block"
        highOrLow.innerHTML = `
        your number is <span class="low"> LOW </span>
        `
        index--
        chanceCalculate(index)
     }else if(val === randomNumber){
        input.innerHTML = ""
        document.querySelector(".answer").blur()
        
        rightNumberContainer.style.display = "block"
        rightNumberContainer.innerHTML = `YOU HAVE FOUND THE NUMBER: ${randomNumber}
        <p class="restart-p"> To play again press any key... </p>
        `
        window.addEventListener("keydown", () => {
            setTimeout(window.location.reload(),1000)
        })
        window.addEventListener("mousedown", () => {
            setTimeout(window.location.reload(),1000)
        })
        
        
     }
}

function chanceCalculate(index){
    if(index < 1){
        chances.innerHTML = `
    
        You have no chances left :(
    
    `
        gameFailed()
    }else if(index === 1){
        chances.innerHTML = `
    
        You have ${index} chance
    
    `
    }
    else{
    chances.innerHTML = `
    
        You have ${index} chances
    
    `}
}

function gameFailed(){
    input.innerHTML = ""
    document.querySelector(".answer").blur()
    container.classList.add("active")
    rightNumberContainer.style.display = "block"
        rightNumberContainer.innerHTML = `<h1 id="fail-id"> YOU HAVE FAILED THE GAME...</h1><h1 id="fail-id"> THE NUMBER WAS: ${randomNumber}</h1>
        <p class="restart-p"> To play again press any key... </p>
        `
        window.addEventListener("keydown", () => {
            setTimeout(window.location.reload(),1000)
        })
        window.addEventListener("mousedown", () => {
            setTimeout(window.location.reload(),1000)
        })
}