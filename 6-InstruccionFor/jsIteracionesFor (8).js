function Mostrar()
{
	var num;
	var continuar=true;
    
	

	for (var i =1; i>=0 ; i++) 
	{
        num=parseInt(prompt("ingrese un numero."));
		if(num%2 == 0)
        {
			console.log("el numero "+num+" es primo");
		}
		else if(num%2!= 0)
		{
			console.log("este numero "+num+" NO es primo");

	    }
        continuar = confirm("quiere ingresar otro numero?");
        if(continuar == false)
        {
            break;
        }
    }




}//FIN DE LA FUNCIÓN