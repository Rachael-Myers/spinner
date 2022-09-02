
let wheelOfRunes = {};
wheelOfRunes.listofanswers = ["Fehu.", "Ehwaz.", "Dagaz.", "Kenaz.", "Berkano.", "Ansuz.", "Algiz.", "Eiwaz.", "Thurisaz.", "Wunjo.", "Uruz.", "Tiwaz.", "Sowilo.", "Raido.", "Inguz.", "Perthro.", "Othila.", "Nauthiz.", "Mannaz.", "Laguz.", "Jera.", "Isa.", "Hagalaz.", "Gebo."];



var wheel = document.querySelector('.wheel');
var btn = document.querySelector('.button');
var rotate = false;
var runner;
var degrees = 0;

function start(){
    runner = setInterval(function(){
        degrees++;
        wheel.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },.01)
}

function stop(){
    clearInterval(runner);
}

btn.addEventListener('click', function(){
    if (!rotate){
        rotate = true;
        start();
    } else {
        rotate = false;
        stop();
    }
})