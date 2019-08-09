function mostrar()
{
var num;
var letra;
var contadorPar = 0;
var contadorInpar = 0;
var contadorCeros = 0;
var promedioP = 0;
var sumaNeg = 0;
var sumaPos = 0;
var acumPos = 0;
var acumNeg = 0;
var numMinimo;
var letraMinimo;
var numMaximo;
var letraMaximo;
var flag = 0;


do{

  num = parseInt(prompt('INGRESE NUMERO'));

  while ( num < -100 || num > 100 || isNaN(num)){

    num = parseInt(prompt('NO ES POSIBLE , INGRESE NUMERO'));
  }

  letra = prompt('INGRESE LETRA');


  if( flag == 0 ) {
      numMinimo= num;
      numMaximo=num;
      flag = 1; }

  if (num < numMinimo){
   numMinimo = num;
   letraMinimo = letra;

 }

 if (num > numMaximo){
   numMaximo = num;
   letraMaximo = letra;
   }

  if(num %2 ==0){
    contadorPar = contadorPar + 1;
  }

  else{
    contadorInpar = contadorInpar + 1;
  }

  if(num == 0){
    contadorCeros = contadorCeros + 1;
  }

  if(num > 0){
    sumaPos = num + sumaPos;
    acumPos = acumPos + 1;

  }

  else{
    sumaNeg = sumaNeg + num;
    acumNeg = acumNeg + 1;
  }


} while(confirm('DESEA CONTINUAR?'));


promedioP = sumaPos / acumPos;

alert('LA CANTIDAD DE NUMEROS PARES ES ' + contadorPar);
alert('LA CANTIDAD DE NUMEROS IMPARES ES ' + contadorInpar);
alert('LA CANTIDAD DE CEROS ES ' + contadorCeros);
alert('EL PROMEDIO DE NOTAS POSITIVAS ES ' + promedioP);
alert('LA SUMA DE TODOS LOS NUMEROS NEGATIVOS ES ' + sumaNeg);
alert('EL NUMERO Y LETRA DEL MINIMO SON  ' + numMinimo + " Y " + letraMinimo + 'DEL MAXIMO SON ' + numMaximo + ' Y ' + letraMaximo);


}
