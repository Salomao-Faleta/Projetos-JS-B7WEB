//Funções anônimas
const c = (el) => { return document.querySelector(el) };
const cs = (el) => { return document.querySelectorAll(el) };

let totalSlides = document.querySelectorAll('.slider--item').length;
c('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
c('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

//variável de ambiente

let currentSlide = 0;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }
    updateMargin();
}

function Next(){
    currentSlide++;
    if(currentSlide > (totalSlides -1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);

    c('.slider--width').style.marginLeft = `-${newMargin}px`;

}

setInterval(Next, 2000)