function mostrar()
{
	edad=txtIdEdad.value;

	//numero de 1 digito, sale sos mayor
	//numero de 3 digitos sale sos menor
	if (edad >= 18){
		alert("sos mayor");
	} else{
		alert("sos menor");
	}
}
