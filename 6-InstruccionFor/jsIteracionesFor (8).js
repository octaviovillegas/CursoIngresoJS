function Mostrar()
{
	var num;
	var primo;
	var noPrimo;
	num=parseInt(prompt("ingrese un numero."));

	for (var i =1; i<=num ; i++) 
	{
		if(num%2 ==0){
			console.log("el numero "+num+" es primo");
		}
		else
		{
			console.log(num+" este numero NO es primo")

	    }
    }




}//FIN DE LA FUNCIÓN