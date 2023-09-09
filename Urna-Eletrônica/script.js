//Variáveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//variáveis de ambiente

let etapaAtual = 0;
let numero = '';

function começarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHTML += ` <div class="numero pisca"></div>`;
        } else {
            numeroHTML += ` <div class="numero"></div>`;
        }

    }


    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}


//Funções dos botões

function atualizaInterface() {
    alert('Finalizou o voto!');
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');

        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface()
        }
    }
}

function branco() {
    alert('clicou em branco');
}


function corrige() {
    alert('clicou em corrige')
}

function confirma() {
    alert('clicou em confirma')
}

começarEtapa();