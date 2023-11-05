let input = document.querySelector('.busca').addEventListener('submit', async(e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=2a90fd75eacb9349628533135c09a849&units=metric&lang=pt_br`
        // A FUNÇÃO encodeURI tranforma a srting(texto) para ser compatível com uma url(remove os espaços e etc)

        let results = await fetch(url);
        let json = await results.json();
        console.log(json);


        if(json.cod == 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                tempDesc: json.weather[0].description,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        }else{
            clearInfo()
            showWarning('Não encontramos essa localização');
        }



    }
});


function showInfo(json){
    showWarning('');
    
    document.querySelector('.titulo').innerHTML = `${json.name} - ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sub>°</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.tempDesc').innerHTML = `${json.tempDesc}`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;
    
    document.querySelector('.resultado').style.display = 'block';
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';

}


function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}