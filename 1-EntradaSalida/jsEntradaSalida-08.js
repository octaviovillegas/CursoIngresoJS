/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let dividendoParseado;
	let divisorParseado;
	let resto;
	let respuesta;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendoParseado = parseInt(dividendo);
	divisorParseado = parseInt(divisor);

	resto = dividendoParseado % divisorParseado;

	respuesta = "el resto es de " + resto;

	alert(respuesta);


}
