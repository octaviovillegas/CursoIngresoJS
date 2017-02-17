/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
	document.getElementById("Respuesta").focus();
	//ASIGNA DOS NUMEROS RANDOM DEL 1 AL 10
	var primerNumero = Math.floor(Math.random() * 10) + 1;
	var operador = Math.floor(Math.random() * 4) + 1;
	var segundoNumero = Math.floor(Math.random() * 10) + 1;
	
	
	//DETERMINA LA OPERACION A REALIZAR CON UN NUMERO DEL 1 AL 4 (1 = SUMA; 2 = RESTA; 3 = MULTIPLICA; 4 = DIVIDE)
	switch(operador){
		case 1:
			//operador.value = "SUMAR";
			respuesta = primerNumero + segundoNumero;
			document.getElementById("Operador").value = "SUMAR";
			break;
		case 2:
			//operador.value = "RESTAR";
			respuesta = primerNumero - segundoNumero;
			document.getElementById("Operador").value = "RESTAR";
			break;
		case 3:
			//operador.value = "MULTIPLICAR";
			respuesta = primerNumero * segundoNumero;
			document.getElementById("Operador").value = "MULTIPLICAR";
			break;
		case 4:
			//operador.value = "DIVIDIR";
			respuesta = primerNumero / segundoNumero;
			document.getElementById("Operador").value = "DIVIDIR";
			break;
	}
	document.getElementById("PrimerNumero").value = primerNumero;
	document.getElementById("SegundoNumero").value = segundoNumero;
	temporizador = setInterval(Responder, 4000);
}//FIN DE LA FUNCIÓN
function Responder()
{
	
if(document.getElementById("Respuesta").value == respuesta){
		alert("FELICITACIONES ELIGIO EL NUMERO CORRECTO");
		location.reload();
	}else{
		alert("NO ES EL NUMERO CORRECTO VUELVA A INTENTAR");
	}


}//FIN DE LA FUNCIÓN
