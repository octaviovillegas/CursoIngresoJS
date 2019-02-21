function mostrar()
{

//	var contador=0;
//	var acumulador=0;


/*document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/5;*/


/*while (contador < 5) 
{

acumulador = acumulador + parseInt(prompt("dame un numero ..."));
contador ++;

}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/




























var contador = 0;
var acumulador = 0;
var numero;

while (contador < 5) 
{
	numero = prompt("ingrese numero");
	numero = parseInt(numero);
	contador = contador + 1;
	acumulador = acumulador + numero;
}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;






























}//FIN DE LA FUNCIÓN