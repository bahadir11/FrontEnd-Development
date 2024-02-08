const background = document.querySelector(".background")

const button = document.getElementById("btn")


const myInterval =  setInterval(() => {
    getLenght()
}, 200);

function getLenght(){
var password = document.getElementById("password").value
var passwordLenght = password.length
console.log(passwordLenght);
blurIt(passwordLenght)

}

function blurIt(passwordLenght) { 
    background.style.filter = `blur(${25 - passwordLenght * 2}px)` 
    if(25-passwordLenght * 2 < 0){
        clearInterval(myInterval)
    }
 }