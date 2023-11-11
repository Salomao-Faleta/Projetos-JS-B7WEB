//Initial Data
let currentColor = 'black';
let canDrow = false;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let mouseX = 0;
let mouseY = 0;


//Events
document.querySelectorAll('.colorArea .color').forEach((item)=>{
    item.addEventListener('click', colorClickEvent);
});

/*
    PASSO A PASSO PARA DESENHAR NO CANVAS
    1 - Quando o click do mouse ABAIXAR, ative o modo desenho.
    2 - Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.
    3 - Quanso o click do mouse LEVANTAR(soltar o mouse), desative o modo desenho. 
*/

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);


//Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(`Color clicada ${color}`);
}


function mouseDownEvent(e){
    canDrow = true;
    mouseX = e.pagex - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if(canDrow == true){
        Draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDrow = false;
}


function Draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}