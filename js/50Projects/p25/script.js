const nav = document.getElementById("navbar");

let X = 0;
let Y = 0;

setInterval(() => {
  getOffset(nav);
}, 100);

function getOffset(el) {
  const rect = el.getBoundingClientRect();

  X = rect.left + window.scrollX;
  Y = rect.top + window.scrollY;

  if (Y > 300) {
    setActive();
  } else {
    noSetActive();
  }
}
function setActive() {
  nav.classList.add("active");
}
function noSetActive() {
  nav.classList.remove("active");
}
