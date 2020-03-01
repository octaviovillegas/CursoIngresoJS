function mostrar()
{
var nota;
var sexo;
var i = 0;
var contador = 0;
var notasTotales = 0;
var notaBaja;
var flag = 0;
var contadorH = 0;
var sexoBaja;

for(i = 0 ; i < 5 ; i++){

nota = parseInt(prompt('INGRESE NOTAS ENTRE 0 Y 10'));
while(nota < 0 || nota > 10 || isNaN(nota)){
  nota = parseInt(prompt('REINGRESE NOTAS ENTRE 0 Y 10'));
}

sexo = prompt('INGRESE SEXO').toLowerCase();
while(sexo != 'm' && sexo != 'f'){
  sexo = prompt('REINGRESE SEXO').toLowerCase();
}

if(flag == 0){
  notaBaja = nota;
  sexoBaja = sexo;
  flag = 1;
}

if(nota < notaBaja){
  notaBaja = nota;
  sexoBaja = sexo;
}

if(sexo == 'm' && nota >= 6){
  contadorH++;
}

notasTotales = nota + notasTotales;

contador++;



}


promedio = notasTotales / contador;

alert('EL PROMEDIO DE TODAS LAS NOTAS ES ' + promedio);
alert('LA NOTA MAS BAJA ES ' + notaBaja + ' EL SEXO ES ' + sexoBaja);
alert('LA CANTIDAD DE VARONES CON NOTA MAYOR O IGUAL A SEIS SON ' + contadorH);



}
