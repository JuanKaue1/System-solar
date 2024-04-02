const sun = document.querySelector('#sun');
const mercury = document.querySelector('#line-mercury');
const venus = document.querySelector('#line-venus');
const earth = document.querySelector('#line-earth');
const mars = document.querySelector('#line-mars');
const juptern = document.querySelector('#line-juptern');
const saturn = document.querySelector('#line-saturn');
const uranos = document.querySelector('#line-uranos');
const neptune = document.querySelector('#line-neptune');
const moon = document.querySelector('#line-moon');

const mercuryt = document.querySelector('#mercury');
const venust = document.querySelector('#venus');
const eartht = document.querySelector('#earth');
const marst = document.querySelector('#mars');
const jupternt = document.querySelector('#juptern');
const saturnt = document.querySelector('#saturn');
const uranost = document.querySelector('#uranos');
const neptunet = document.querySelector('#neptune');
const moont = document.querySelector('#moon');
const circles = document.querySelector('#circle-saturn');

let spinP1 = 140;
let spinP2 = -60;
let spinP3 = 50;
let spinP4 = 530;
let spinP5 = -10;
let spinP6 = 230;
let spinP7 = -90;
let spinP8 = 110;
let girarTmoon = 0;
let spinPT = 0;
let circle_saturn = 0;

let planetas = [
    mercuryt, venust, eartht, marst, jupternt, saturnt, uranost, neptunet, moont
]

function spinT() {
    spinPT += 1;
    girarTmoon += 1;
    planetas.forEach(planeta => {
        planeta.style.backgroundPosition = `${spinPT}% 20%`;
    })
}

function spinR() {

    circle_saturn += 3;
    circles.style.transform = `rotate(${circle_saturn}deg)`;

    spinP1 += 3;
    mercury.style.transform = `rotate(${spinP1}deg)`;

    spinP2 += 2;
    venus.style.transform = `rotate(${spinP2}deg)`;

    spinP3 += 1;
    earth.style.transform = `rotate(${spinP3}deg)`;

    spinP4 += .75;
    mars.style.transform = `rotate(${spinP4}deg)`;

    spinP5 += .5;
    juptern.style.transform = `rotate(${spinP5}deg)`;

    spinP6 += .25;
    saturn.style.transform = `rotate(${spinP6}deg)`;

    spinP7 += .12;
    uranos.style.transform = `rotate(${spinP7}deg)`;

    spinP8 += .06;
    neptune.style.transform = `rotate(${spinP8}deg)`;

    girarTmoon += .1;
    moon.style.transform = `rotate(${girarTmoon}deg)`;

}

let animationActivate = false;

sun.addEventListener('click', () => {
    if (!animationActivate) {
        spinTInterval = setInterval(spinT);
        spinRInterval = setInterval(spinR);
    }
    else if (animationActivate) {
        clearInterval(spinTInterval);
        clearInterval(spinRInterval);
    }
    else {
        spinTInterval = setInterval(spinT);
        spinRInterval = setInterval(spinR);
    }
    animationActivate = !animationActivate;
});

