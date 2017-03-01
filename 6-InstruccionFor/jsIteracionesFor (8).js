var esDivisor =0;
var numero;
function Mostrar()
{
	numero = prompt("Ingrese un numero positivo mayor a 2");
	numero = parseInt(numero);
	while(numero <= 2)
	{
		alert("Ingrese un numero positivo mayor a 2");
		numero = prompt("Ingrese un numero primo");
		numero = parseInt(numero);
	}
for(var h = 2; h < numero; numero--)
{

	for(var i = 2; i <= (numero/2); i++)
	{
		if(numero % i == 0)
		{
			//esDivisor++;
			//alert("El numero " + numero + " no es primo");
			break;
		}
	}
	if(numero % i != 0)
	{
		console.log("El numero " + numero + " efectivamente es un numero primo");
	}
}

}//FIN DE LA FUNCIÓN