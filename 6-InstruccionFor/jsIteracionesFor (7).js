function Mostrar()
{
	var num;
	var divisores;
	var cantidad=0;

	num=parseInt(prompt("ingrese un numero."));

	for (var i = 1; i <= num; i++) 
	{
		if(num % i == 0){
			console.log(i);
			cantidad++;
		}
	}

	console.log("la cantidad de divisores de este numero es "+cantidad);




}//FIN DE LA FUNCIÓN