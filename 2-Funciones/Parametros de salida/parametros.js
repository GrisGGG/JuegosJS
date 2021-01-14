var vida = 100;

function mostrarVida(nombre){
    console.log("Fuiste atacado con: " + nombre);
    console.log(vida);

}

function ataqueEnemigo(ataque, nombreAtaque){
    vida -= ataque;
    mostrarVida(nombreAtaque);

}
