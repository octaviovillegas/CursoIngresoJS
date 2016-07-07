function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*if(edad>=18){alert("Usted es mayor de edad");}
if(edad<18){alert("Usted es menor de edad");}*/ //si en la conficion de if pongo (edad>17) me da lo mismo
//si en la condicion de if pongo (edad=>18) no da.
if(edad>17)
	{
		alert("Es mayor");
	}
else
	{
		alert("Es menor");
	}
}//FIN DE LA FUNCIÓN