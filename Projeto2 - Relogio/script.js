let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){

    //Digital
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;


    //Analógico

    /*
        CONTA LÓGICA PARA COLOCAR OS PONTEIROS NO LUGAR CERTO
        => Um circulo tem qunatos graus? - 360°, dividimos( / ) pela quantidade de segundos(60),
        e diminuimos 90 graus (PARA MINUTOS E SEGUNDOS) 
        para as HORAS dividimos por 12 (o ponteiro dar duas voltas num dia)  
    */    
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

//a função fixZero, não permite se algum número tiver menos que dois digitos, ele acrescenta um um 0, caso ocorra
function fixZero(time){
    if(time < 10){
        return '0'+time;
    }else{
        return time;
    }
    // return time < 10 ? 0 + time : time; VERSÃO SIMPLIFICADA

}




setInterval(updateClock, 1000);
updateClock();