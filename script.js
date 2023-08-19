
let birds = document.getElementById("birds");
let moon = document.getElementById("moon");
let element6 = document.getElementById("6");
let element5 = document.getElementById("5");
let element4 = document.getElementById("4");
let element3 = document.getElementById("3");
let element2 = document.getElementById("2");
let element1 = document.getElementById("1");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * -1.5 + 'px';
    moon.style.left = value * 1.5 + 'px';
    birds.style.top = value * -1.5 + 'px';
    birds.style.left = value * -1.5 + 'px';
    element2.style.left = value * 1.5 + 'px';
    element3.style.left = value * -0.3 + 'px';
    element4.style.left = value * 0.8 + 'px';
    element5.style.top = value * 1 + 'px';
    element6.style.top = value * 1.5 + 'px';
});