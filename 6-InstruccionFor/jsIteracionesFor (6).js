function Mostrar()
{
var numero;
var contador=0
numero=prompt();
numero=parseInt(numero);
for(var comienzo=1;comienzo<=numero;comienzo++)
{
	if(comienzo%2==0)
	{
		console.log(comienzo)
		contador++
	}
}
console.log(contador)
}//FIN DE LA FUNCIÓN