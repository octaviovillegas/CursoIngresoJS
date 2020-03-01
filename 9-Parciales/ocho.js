function mostrar()
{

var flag = 0;
var num;
var letra;
var contador;
var contadorPar;
var contadorImpar;
var contadorCeros;
var promedioPos = 0;
var sumaPos = 0;
var acumuladorPos = 0;
var sumaNeg = 0;
var numMinimo;
var letraMinimo;

do{

    num = parseInt(prompt("INGRESE NUMERO"));

    while(num < -100 || num > 100 || isNaN(num)){

        num = parseInt(prompt("INGRESE NUMERO NUEVAMENTE"));
    }

    letra = prompt("INGRESE LETRA");

    if(num %2==0){
    contadorPar++;
    }

    else{
    contadorImpar++;
    }

    if(num == 0){
    contadorCeros++;
    }

    if(num > 0){
    sumaPos = num + sumaPos;
    acumuladorPos++;
    }

    else{
        sumaNeg = num + sumaNeg;
    }

    if(num < numMinimo || flag == 0){
        numMinimo = num;
        letraMinimo = letra;
        flag = 1;
    }
}while(confirm("DESEA CONTINUAR?"))

alert("el numero minimo es " + numMinimo + " y la letra es " + letraMinimo);



}

