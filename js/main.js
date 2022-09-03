
let wheelOfRunes = {};
wheelOfRunes.listofanswers = ["Fehu.", "Ehwaz.", "Dagaz.", "Kenaz.", "Berkano.", "Ansuz.", "Algiz.", "Eiwaz.", "Thurisaz.", "Wunjo.", "Uruz.", "Tiwaz.", "Sowilo.", "Raido.", "Inguz.", "Perthro.", "Othila.", "Nauthiz.", "Mannaz.", "Laguz.", "Jera.", "Isa.", "Hagalaz.", "Gebo."];



let wheel = document.querySelector('.wheel');
let btn = document.querySelector('.button');
let rotate = false;
let runner;
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
var runeNumber = Math.floor((degrees%360)/15);

//let degree1 = degrees % 360