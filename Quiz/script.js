//Initial Date
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

//Events
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

//functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        //barra de progresso
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        //Escondendo e exibindo a area de perguntas
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        //Exibe as perguntas
        document.querySelector('.question').innerHTML = q.question;


        //2 formas de exbir as respostas
        /* Forma 1
        document.querySelector('.options').innerHTML = ``;
        for(let i in q.options){
            document.querySelector('.options').innerHTML += `<div>${q.options[i]}</div>`
        }*/

        //Forma2
        let optionsHTML = '';
        for (let i in q.options) {
            optionsHTML += `<div data-op="${i}" class="option">  <span>${Number(i) + 1}</span> ${q.options[i]}  </div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML

        //Evento de click para as questões

        document.querySelectorAll('.options .option').forEach((item) => {
            item.addEventListener('click', optionClickEvent);
        });


    } else{
        finishQuiz();
        
    }
}



function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer == clickedOption) {
        correctAnswer++;
    }
    /*Atualizando as questões, se colocarmos esse código a baixo dentro do IF acima, 
    ele só vai trocar de questão, quando eu acerTAR A 1° questão */
    currentQuestion++;
    showQuestion();
}


function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100);
    
    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em?!';
        document.querySelector('.scorePct').style.color = '#ff0000';
    }else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'É, tá bom!';
        document.querySelector('.scorePct').style.color = '#fff000';
    }else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!!!';
        document.querySelector('.scorePct').style.color = '#0d630d';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} perguntas e acertou ${correctAnswer}`;





    //Exibindo o resultado
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}

//Zerando tudo 
function resetEvent(){
    correctAnswer = 0;
    currentQuestion = 0;
    showQuestion();
}