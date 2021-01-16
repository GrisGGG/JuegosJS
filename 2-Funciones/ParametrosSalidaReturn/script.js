var num1
var num2

function suma (numero1, numero2){
    return numero1 + numero2;
}

function action(){
    num1  = parseInt(prompt("Dame un número"));
    num2  = parseInt(prompt("Dame el segundo número"));
    resultado = suma(num1, num2);
    console.log(resultado);
}