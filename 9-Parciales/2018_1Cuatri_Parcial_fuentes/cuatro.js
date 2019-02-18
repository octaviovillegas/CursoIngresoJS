function mostrar()
{

var numeroUno;
var numeroDos;
var operacion;

numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos);

numeroUno = prompt("Coloque el primer número ");
numeroDos = prompt(" y el segundo número ");

if (numeroUno == numeroDos) 
{
	alert("Pimer número " + numeroUno + " y segundo número " + numeroDos);
}
if (numeroUno < numeroDos) 
{
	operacion = numeroUno - numeroDos;
	alert(operacion);
}
if (numeroUno > numeroDos) 
{
	operacion = numeroUno - (-numeroDos);
	alert(operacion);
}
if (operacion > 10 ) 
{
	alert("La suma es " + operacion + " y superó el 10");
}











}
