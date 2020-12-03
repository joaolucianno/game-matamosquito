//Menu
function verificarIniciar(){
    let level = document.querySelector('#level');
    if(level.value == 0){
        alert('Selecione um nível para iniciar o jogo');
    } else{
        window.location.href="app.html?" + level.value;
        console.log(level.value);
    }
};