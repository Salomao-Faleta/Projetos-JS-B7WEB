//Data inicial
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let player = '';
let warning = '';
let playing = false;

reset();


//Events
document.querySelector('.reset').addEventListener('click', reset);

//FORMAS DE ADICIONAR O CLICK EM CADA ÁREA DO TABULEIRO

/*FORMA 1 - Para cada item adicionar a função
document.querySelector('div[data-item=a1]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a2]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a3]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a4]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a5]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a6]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a7]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a8]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a9]').addEventListener('click', itemClick);
*/

//FORMA 2 - Selecionar todo mundo dar um loop e atribuir para cada item a função

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', itemClick);
})


//Functions
function itemClick(event) {
    let item = event.target.getAttribute('data-item');
    if (playing && square[item] === '') {
        square[item] = player;
        renderSquare();
        tootlgePlayer();
    }

}


function reset() {
    warning = '';
    let random = Math.floor(Math.random() * 2);

    if (random === 0) {
        player = 'x'
    } else {
        player = 'o'
    }
    // VERSÃO MAIS SIMPLES => player = (random === 0) ? 'x' : 'o';

    for (let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();

}

function renderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function tootlgePlayer() {
    if (player === 'x') {
        player = 'o'
    } else {
        player = 'x'
    }
    //  VERSÃO MAIS SIMPLES - player = (player === 'x') ? 'o' : 'x';

    renderInfo();
}

function checkGame() {
    if (checkWinnerFor('x')) {
        warning = 'O "X" VENCEU!';
        playing = false;
    } else if (checkWinnerFor('o')) {
        warning = 'O "O" VENCEU';
        player = false
    } else if (isFull()) {
        warning = 'Deu EMPATE!';
        player = false;
    }
}

function checkWinnerFor(player) {
    let pos = [
        //POSSIBILIDADES DE VITÓRIAS:

        //NA HORIZONTAL
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        //NA VERTICAL
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        //NA TRANSVERSAIS
        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for (let w in pos) {
        let pArray = pos[w].split(',');
        let hasWon = pArray.every((option) => {
            if (square[option] === player) {
                return true;
            }
            /*forma avançada que não gostei :(
            pArray.every(option => square[option] === player)*/
        });

        if (hasWon) {
            return true;
        }
    }

    return false;



}

function isFull() {
    for(let i in square){
        if(square[i] === ''){
            return false;
        }
    }
    return true;
}   