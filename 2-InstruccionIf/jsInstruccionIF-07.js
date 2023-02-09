// Angel Farina.

function mostrar()
{
	var edad;
	var estado;
	var mensaje;
	
	edad=parseInt(txtIdEdad.value);
	estado=estadoCivil.value;
	mensaje='⛔️ Es muy pequeño para NO ser soltero'

	if (edad<18&&estado!='Soltero'){
		alert(mensaje);
	}
}