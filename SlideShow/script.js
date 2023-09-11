//Funções anônimas
const c = (el) => { return document.querySelector(el) };
const cs = (el) => { return document.querySelectorAll(el) };

//Pegando as imgs e adicionando a slider--width dinanmicamente com JS
let totalSlides = document.querySelectorAll('.slider--item').length;
c('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

//selecionando a altura dos controles e colocando na altura do slider
c('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

//variável de ambiente

let currentSlide = 0;

//Funções para mudar de imagem

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateMargin();
}

function Next() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }

    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = c('.slider--item').clientWidth;

    let newMargin = currentSlide * sliderItemWidth;

    c('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(Next, 5000);