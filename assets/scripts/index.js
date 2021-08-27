let areaQueExibePontos = document.querySelector('#pontos');
let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 800, 600);

let raio = 10;
let xAleatorio;
let yAleatorio;
let pontos = 0;

function startGame() {
    startButton.destroy();
    ball.body.velocity.set(150, -150);
    playing = true;
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 800, 600);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, 10, 'red');
}

function posicaoAlvo(maximo) {

    return Math.floor(Math.random() * maximo);

}

function play() {
    let audio = document.getElementById("audio");
    audio.play();
  }

function atualizaTela(){

    limpaTela();
    xAleatorio = posicaoAlvo(800);
    yAleatorio = posicaoAlvo(600);
    desenhaAlvo(xAleatorio, yAleatorio);
}
setInterval(atualizaTela, 1000);

function dispara(evento) {

    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    if ((x > xAleatorio - raio) 
            && (x < xAleatorio + raio) 
            && (y > yAleatorio - raio) 
            && (y < yAleatorio + raio)) {
        pontos++
        areaQueExibePontos.textContent = pontos;
}
        
    }


tela.onclick = dispara;