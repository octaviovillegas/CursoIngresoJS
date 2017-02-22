function Mostrar()
{
	var numero=prompt()
	var final
	numero=parseInt(numero)
	for(var comienzo=1; comienzo<=numero; comienzo++)
	{
		console.log(comienzo)
		final=prompt("Ingrese 9 para terminar: ")
		final=parseInt(final)
		if (final==9)
		{
			break
		}
	}
}//FIN DE LA FUNCIÓN