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

	numeroSecreto = Math.floor((Math.random() * 100) +1);

	console.log(numeroSecreto);

	contadorIntentos = 0;

}

function verificar()
{

	var numeroIngresado;

	var numeroIntento;

	numeroIngresado = numero.value;
	
	numeroIntento = intentos.value; 

	contadorIntentos = contadorIntentos + 1;

	if (contadorIntentos == 1 &&  numeroIngresado == numeroSecreto) 
	{
		alert("usted es un Psíquico");
	}
	 if (contadorIntentos == 2 &&  numeroIngresado == numeroSecreto) 
	{
		alert("excelente percepción");
	}
	 if (contadorIntentos == 3 &&  numeroIngresado == numeroSecreto) 
	{
		alert("Esto es suerte");
	}
	 if (contadorIntentos == 4 &&  numeroIngresado == numeroSecreto) 
	{
		alert("Excelente técnica");
	}
	 if (contadorIntentos == 5 &&  numeroIngresado == numeroSecreto) 
	{
		alert("usted está en la media");
	}
	if (contadorIntentos > 5 && contadorIntentos < 10 &&numeroIngresado == numeroSecreto) 
	{
		alert("falta técnica");
	}
	if (contadorIntentos > 10 &&  numeroIngresado == numeroSecreto) 
	{
		alert("afortunado en el amor!!");
	}
	




/*"Ingrese número" id="numero">
readonly id="intentos">*/

/*En esta oportunidad el juego evaluará tus aptitudes a partir de la cantidad de intentos, por lo cual se informará los siguientes: 
1° intento: “usted es un Psíquico”. 
2° intento: “excelente percepción”. 
3° intento: “Esto es suerte”. 
4° intento: “Excelente técnica”. 
5° intento: “usted está en la media”. 
Desde 6 Intentos hasta 10:”falta técnica” 
Más de 10 intentos: “afortunado en el amor!!”.*/ 


































}