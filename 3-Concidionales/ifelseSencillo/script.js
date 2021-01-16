var turno = 1;
var vida = 100;

//Estados del Jugador
var vivo = true;
var envenenado = false;
var quemado = false;

//Ataques 
var fallar = 0;
var atacar = 1;
var quemar = 2;
var envenenar= 3;
//Posiones
var posion = 0;
var colaFenix = 1;
var posionQuemaduras = 2;
var posionVeneno = 3;

function usarItem(objeto){
    if(objeto == posion){
        vida += 50;
    }

    if(objeto == colaFenix){
        if ( vivo == false){
        vivo = true;
        vida = 30;
        }else {
        console.log("Ya estas vivo, no sé puede usar");}  
    }

    if(objeto == posionQuemaduras){
        if(quemado == true){
        quemado = false;
        }else{
            console.log("No estas quemado, no puedes ocuparla");  } 
    }
   
    if(objeto == posionVeneno){
        if(envenenado == true){
        envenenado = false;
    }else{
        console.log("No estas envenenado, no puedes ocuparla"); 
    }
}
}

function mostrarEstado(){

if(vivo == true){

    console.log("Vida: " + vida);
    if (quemado == true){
        console.log("Quemado");
    } 
    if(envenenado == true){
        console.log("Envenenado");
    }
}else {
    console.log("Estas muerto");
}
}

//Funcón que genera números aleatorios. Al multiplarlo por 4, le decimos que genere números entre 0 y 3
//Con la funcion Math.floor, nos aseguramos que redonde los números a enteros.
function juegaTurno(){
    var jugada = Math.floor(Math.random() * 4 );
    console.log(jugada);

if(vida <= 0){
    vivo = false;
}    

if (vivo == true){    
        if(jugada == atacar){
            vida -= 10;
            console.log("He atacado al jugador");
        }
        if(jugada == fallar){
            console.log("El ataque ha fallado");
        } 
        if(jugada == quemar){
            quemado = true;
            console.log("Se ha quemado al jugador");
        
        }
        if(jugada == envenenar){
            envenenado = true;
            console.log("Se ha envenenado al jugador");
        
        } 
        mostrarEstado(); // aquí se llama al final de cada ciclo.
        }

else{
    console.log("Estas muerto");
}
}