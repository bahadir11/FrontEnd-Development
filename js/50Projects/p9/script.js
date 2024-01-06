const applause = document.querySelector(".sound1")
const nigga = document.querySelector(".sound2")
const bruh = document.querySelector(".sound3")
const bnigga = document.querySelector(".sound4")
const laaa = document.querySelector(".sound5")
const damn = document.querySelector(".sound6")
var song1 = new Audio("song1.mp3")
var song2 = new Audio("song2.mp3")
var song3 = new Audio("song3.mp3")
var song4 = new Audio("song4.mp3")
var song5 = new Audio("song5.mp3")
var song6 = new Audio("song6.mp3")

applause.addEventListener("click", () => {
    
        if (song1.currentTime == 0) {
        stopAll() 
        song1.play();
    }else{
        stopSong(song1)
    }    
})
nigga.addEventListener("click", () => {
    
    if (song2.currentTime == 0) {
        stopAll()
        song2.play();
   }else{
       stopSong(song2)
   }
})
bruh.addEventListener("click", () => {
    
    if (song3.currentTime == 0) {
       stopAll()
        song3.play();
   }else{
       stopSong(song3)
   }
})
laaa.addEventListener("click", () => {
    
    if (song4.currentTime == 0) {
      stopAll() 
       song4.play();
   }else{
       stopSong(song4)
   }
})
damn.addEventListener("click", () => {
    
    if (song5.currentTime == 0) {
       stopAll() 
       song5.play();
   }else{
       stopSong(song5)
   }
})
bnigga.addEventListener("click", () => {
    
    if (song6.currentTime == 0) {
        stopAll()
        song6.play();
   }else{
       stopSong(song6)
   }
})
function stopSong(x){
    x.pause()
    console.log("smk")
    x.currentTime = 0;
}
var songArray = [song1,song2,song3,song4,song5,song6];

function stopAll() {
    
    for (let index = 0; index < songArray.length; index++) {
        
        
            
        
        stopSong(songArray[index])
        
    }
}