//Menu
function verificarIniciar(){
    let level = document.querySelector('#level').value;
    if(level == 0){
        alert('Selecione um nível para iniciar o jogo');
    } else{
        window.location.href="app.html?" + level;
        //alert(level);
    }
};