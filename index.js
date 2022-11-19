
let sec = 0;
let min = 0;
let hour = 0;
let interval = 0;

function start() {
cronometro()

     interval = setInterval(cronometro, 1000)
}

function pause() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('cronometro').innerText = '00:00:00';
}

function cronometro() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
            min = 0;
            hour++;
        }
    }
    document.getElementById('cronometro').innerText = zeroEsquerda(hour) + ':' + zeroEsquerda(min) + ':' + zeroEsquerda(sec);
}

function zeroEsquerda(digito) {
    if (digito < 10) {
        return('0' + digito)
    }else {
        return(digito)
    }
}