// ==========  Level  ==========
var level = window.location.search;
level = level.replace('?', '');
//console.log(level);
if(level == 1){
    level = 1500;
} else if(level == 2){
    level = 1000;
} else{
    level = 750;
}

// ==========  Ajustar Tela  ==========
var widthForest;
var heightForest;
function ajustarTela(){
    widthForest = window.innerWidth;
    heightForest = window.innerHeight;
    if(widthForest > 1280){
        widthForest = 1280;
    }
    if(widthForest < 576){
        widthForest = 300;
    }
    //console.log(`${widthForest} x ${heightForest}`);
};
ajustarTela();



// ==========  Tempo  ==========
var tempoRestante = 14
var tempo = setInterval(function(){
    document.querySelector('#tempoRestante').innerHTML = `Tempo restante: ${tempoRestante}`;
    tempoRestante--;
    if(tempoRestante < 0){
        clearInterval(tempo);
        clearInterval(mostrarMosquito);
        window.location.href="winner.html";
    }
}, 1000);

// ==========  Mosquito  ==========
var vidas = 3;
function criarMosquito(){
    //Gerenciar vidas
    if(vidas <= 0){
        window.location.href="gameover.html";
    } else if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove();
        document.querySelector('#coracao'+vidas).setAttribute('src', 'images/coracao_vazio.png');
        vidas--;
        //console.log(vidas);
    }
    
    
    //Define posição do mosquito
    let x = Math.floor(Math.random() * (widthForest * 0.9));
    if(x > 1280){
        x = 1200;
    }
    let y = Math.floor(Math.random() * (heightForest * 0.8));
    //console.log(`${x} x ${y}`);

    //Define tamanho do mosquito
    let tamanhoMosquito = Math.round(Math.random() * 2);
    //console.log(tamanhoMosquito);

    //Inverte Lado A/B
    var lado = inverterMosquito();
    
     

    //Criar Mosquito
    var mosquito = document.createElement('img');
    mosquito.src = 'images/mosquito.png';
    mosquito.className = 'mosquito'+ tamanhoMosquito + ' lado' + lado;
    mosquito.style.position = 'relative';
    mosquito.style.left = x + 'px';
    mosquito.style.top = y +'px';
    
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    };
    document.querySelector('.game').appendChild(mosquito);
    
}

function inverterMosquito(){
    //Transform = scaleX() CSS
    let x = Math.ceil(Math.random() * 2);
    if(x == 1){
        return 'A';
    } else{
        return 'B';
    }
}

var mostrarMosquito = setInterval(function(){
    criarMosquito();
}, level);
