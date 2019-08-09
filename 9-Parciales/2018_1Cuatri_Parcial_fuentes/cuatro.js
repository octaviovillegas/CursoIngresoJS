function mostrar()
{

var num1;
var num2;
var resultado;


num1 = prompt('ingrese numero 1');
num2 = prompt('ingrese numero 2');
num1 = parseInt(num1)
num2 = parseInt(num2)

resultado = num1 + num2 ;
resultadonegativo = num1 - num2;

alert('total es ' + resultado);

if (num1 == num2){

  alert('este es el primer numero ' + num1 + ' y este es el segundo numero ' + num2);

}

  else if(num1 > num2){

    alert('la resta dio ' + resultadonegativo);
}

  else {
    alert('la suma dio ' + resultado);

}

if (resultado > 10){

  alert ('el resultado es ' + resultado);
  alert('la suma dio ' + resultado + ' y supero los 10 digitos');
}








}
