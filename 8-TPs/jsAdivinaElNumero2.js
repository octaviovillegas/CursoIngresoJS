/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
		//alert(numeroSecreto );
	contadorIntentos = 0;
	alert("It's SHOWTIME!");
	document.getElementById("intentos").value = contadorIntentos;

}

function verificar()
{
	var numero = parseInt(document.getElementById("numero").value);
	switch(true){
		case contadorIntentos==0:
			if(numero == numeroSecreto){
				alert("USTED ES UN PSIQUICO");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case contadorIntentos==1:
			if(numero == numeroSecreto){
				alert("EXCELENTE PERCEPCION");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case contadorIntentos==2:
			if(numero == numeroSecreto){
				alert("ESTO ES SUERTE");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case contadorIntentos==3:
			if(numero == numeroSecreto){
				alert("EXCELENTE TECNICA");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case contadorIntentos==4:
			if(numero == numeroSecreto){
				alert("USTED ESTA EN LA MEDIA");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case contadorIntentos>= 5 && contadorIntentos <= 10:
			if(numero == numeroSecreto){
				alert("FALTA TECNICA");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		default:
			if(numero == numeroSecreto){
				alert("AFORTUNADO EN EL AMOR");
				location.reload();
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
	}
	document.getElementById("intentos").value = contadorIntentos;
}