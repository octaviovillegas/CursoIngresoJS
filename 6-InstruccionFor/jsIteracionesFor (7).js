function Mostrar()
{
	var contador=0
	var numero
	numero=prompt()
	numero=parseInt(numero)
	for(var comienzo=0;comienzo<=numero;comienzo++)
	{
		if(numero%comienzo==0)
		{
		contador++
		console.log(comienzo)
		}
	}
	console.log(contador)
}//FIN DE LA FUNCIÓN