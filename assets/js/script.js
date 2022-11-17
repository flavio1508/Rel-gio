//criando variavel
const horas = document.getElementById('horas');//pega o id
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//função tempo
const relogio = setInterval(function time() {
    let dateToday = new Date();//objeto data
    let hr = dateToday.getHours();//variavel de horas
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})