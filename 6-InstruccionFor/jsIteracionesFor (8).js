function Mostrar()
{
	var num;
<<<<<<< HEAD
	var continuar=true;
    
=======
	var primo;
	var noPrimo;
>>>>>>> origin/master
	

	for (var i =1; i>=0 ; i++) 
	{
<<<<<<< HEAD
        num=parseInt(prompt("ingrese un numero."));
		if(num%2 == 0)
        {
=======
		num=parseInt(prompt("ingrese un numero."));
		if(num%2 ==0){
>>>>>>> origin/master
			console.log("el numero "+num+" es primo");
			document.getElementById('')
		}
		else if(num%2!= 0)
		{
<<<<<<< HEAD
			console.log("este numero "+num+" NO es primo");

	    }
        continuar = confirm("quiere ingresar otro numero?");
        if(continuar == false)
        {
            break;
        }
=======
			console.log("el numero "+num+" NO es primo")

	    }
	    if(isNaN(num))
	    {
	    	break;
	    }
>>>>>>> origin/master
    }




}//FIN DE LA FUNCIÓN