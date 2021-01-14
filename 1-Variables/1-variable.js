var vida, ataque, posion;
vida = 100;
ataque = 10;
posion = 20;

var nombre = 'Guadalupe';
var textoBienvenida= 'Hola' + ' ' + nombre;

vida = vida - ataque; //Primero se evalua lo que esta después del igual 
vida -= ataque; // Esto es lo mismo que arriba
vida -= ataque;
vida -= ataque;
vida -= ataque; //Lo atacaron 5 veces, aquí su valor ahora es vida=50

vida += posion;
vida += posion;//Se tomo posion dos veces, así su valor ahora es vida=90

vida++; //incrementa en uno, así su valor ahora en vida=91

console.log(textoBienvenida);
console.log("El héroe tiene de vida: " + vida);