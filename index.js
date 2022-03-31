const yesBtn  = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    newFunction();
    newFunction_1();
    newFunction_2();

    function newFunction() {
        alert('Sabía que aceptarias');
    }

    function newFunction_1() {
        alert('ahora ya somos novios');
    }

    function newFunction_2() {
        alert('toca besarnos uwu');
    }
});

const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});