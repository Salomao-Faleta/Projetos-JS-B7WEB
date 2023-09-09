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
    let etapa = etapas[etapaAtual];

    let candidato  = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        }else{
            return false
        }
    });

    if(candidato.length > 0 ){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome} </br> Partido: ${candidato.partido}`;
        

        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += 
            `<div class="d-1-image">
                <img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}
            </div>`
        }

        lateral.innerHTML = fotosHtml;

    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso-grande pisca" style="font-size: 50px; margin-top: 20px"> <strong>VOTO NULO</strong> </div>'
    }

    console.log(candidato)
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