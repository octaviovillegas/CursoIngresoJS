 	function mostrar()
{

/*var clave = prompt("ingrese el número clave.");

while (clave != "utn750") 
{
	alert("Clave Invalida");
	clave = prompt("vuelve a ingresar la clave","******");
}
alert("Clave Valida");*/


	var clave;

	clave = prompt("Ingrese la clave"); //pedir clave

	while (clave != "utnFRA") //introducir clave y exeptuar todo lo incorrecto
	{
		alert("Clave inválida"); //aviso de incorrección
		clave = prompt("Vuelve a ingresar la clave", "XXXXX"); //segundo pedido de clave 			
	}

	alert("Clave válida"); //aviso clave correcta
























}//FIN DE LA FUNCIÓN
