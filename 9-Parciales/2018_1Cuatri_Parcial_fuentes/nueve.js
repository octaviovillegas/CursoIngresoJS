function mostrar()
{
var marca;
var peso;
var temperatura;
var contadorTemp = 0;
var pesoMax;
var pesoMin;
var marcaMax;
var contadorPar = 0;
var flag = 0;
var promedio;
var contadorProd = 0;
var contadorPeso = 0;


do{
  marca = prompt('INGRESE LA MARCA');

  peso = parseInt(prompt('INGRESE PESO ENTRE 1 A 100 '));
  while(peso < 1 ||  peso > 100 || isNaN(peso)){
    peso = parseInt(prompt('REINGRESE PESO ENTRE 1 A 100 '));
  }

  temperatura = parseInt(prompt('INGRESE TEMPERATURA ENTRE -30 A 30'));
  while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
    temperatura = parseInt(prompt('REINGRESE TEMPERATURA ENTRE -30 A 30'));
  }

  if(temperatura %2 == 0){
    contadorPar++;
  }

  if(flag == 0){
    pesoMax = peso;
    pesoMin = peso;
    marcaMax = marca;
    flag = 1;
  }

  if(peso > pesoMax){
    pesoMax = peso;
    marcaMax = marca;
  }

  if(peso < pesoMin){
    pesoMin = peso;
  }

  if(temperatura < 0){
    contadorTemp++;
  }

contadorProd++;
contadorPeso = peso + contadorPeso;

}while(confirm('DESEA CONTINUAR?'))


promedio = contadorPeso / contadorProd;


document.write('LA CANTIDAD DE TEMP PARES ES DE ' + contadorPar + '<br>');
document.write('LA MARCA DEL PRODUCTO MAS PESADO ES ' + marcaMax + '<br>');
document.write('LA CANT DE PRODUCTOS QUE SE CONSERVAN A MENOS DE CERO SON ' + contadorTemp + '<br>');
document.write('EL PROMEDIO DEL PESO DE TODOS LOS PRODUCTOS ES ' + promedio + '<br>');
document.write('EL PESO MAXIMO ES ' + pesoMax + ' Y EL MINIMO ES ' + pesoMin + '<br>');





}
