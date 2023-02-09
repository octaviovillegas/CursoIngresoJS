// Angel Farina.

function mostrar()
{
	var edad;
	var mensaje;
	
	edad=parseInt(txtIdEdad.value);
	mensaje='no es adolescente'

	if (edad>12&&edad<18){
		void(0);
	} else{
		alert(mensaje);
	}

	/*
	if (!(edad>=13&&edad<=17)){
		alert(mensaje);
	}*/
}