
/*Debemos mostrar dos números 
Random  del 1 al 10 
y una de las cuatro operaciones básicas 
(suma, resta,división o multiplicación) para realizar entre estos dos números, estas operaciones también serán Random.
En el cuadro de texto resultado el jugador debe ingresar el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{

	var  numeroUno;
	var  operadorMat;
	var  numeroDos;
	var resultado;

	numeroUno = document.getElementById('PrimerNumero').value;
	operadorMat = document.getElementById('Operador').value;
	numeroDos = document.getElementById('SegundoNumero').value;

	numeroUno = Math.floor((Math.random() * 10) + 1);
	operadorMat = Math.floor((Math.random() * 4) + 1);
	numeroDos = Math.floor((Math.random() * 10) + 1);

	numeroUno = console.log(numeroUno);
	operadorMat = console.log(operadorMat);
	numeroDos = console.log(numeroDos);
	
	if (operadorMat == 1) 
	{
		console.log("+");
		resultado = numeroUno + numeroDos;
	}
	if (operadorMat == 2) 
	{
		console.log("-");
		resultado = numeroUno - numeroDos;

	}
	if (operadorMat == 3) 
	{
		console.log("/");
		resultado = numeroUno / numeroDos;
	}
	if (operadorMat == 4) 
	{
		console.log("*");
		resultado = numeroUno * numeroDos;
	}

}//FIN DE LA FUNCIÓN
function Responder()
{
	var resultado;


	if (operadorMat == 1) 
	{
		resultado = numeroUno + numeroDos;
	}
	if (operadorMat == 2) 
	{
		resultado = numeroUno - numeroDos;
	}
	if (operadorMat == 3) 
	{
		resultado = numeroUno / numeroDos;
	}
	if (operadorMat == 4) 
	{
		resultado = numeroUno * numeroDos;
	}
	
	resultado = alert(resultado);












}//FIN DE LA FUNCIÓN
/*"PrimerNumero"="Primer número">"Operador"="Operador matemático" >"SegundoNumero"="Segundo número">"Respuesta"="Tu respuesta">*/