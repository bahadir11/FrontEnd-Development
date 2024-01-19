const banner = document.querySelector(".main");
const speedEl = document.getElementById("speed");

const text = "We love programming";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();
console.log(speed);

function writeText() {
  banner.innerHTML = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) =>{
    speed = 300 / e.target.value
})