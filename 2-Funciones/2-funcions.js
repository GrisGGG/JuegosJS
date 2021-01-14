var vida = 100;
var ataque= 10;
var posion = 20;

function muestraVida(){
    var boxVida = document.getElementById("box");
    boxVida.innerText = 'La vida del héroe es de: ' + vida;

}

function ataqueEnemigo(){
    vida -= ataque;
    muestraVida();

}

function tomaPosion(){
    vida += posion;
    muestraVida();
}

