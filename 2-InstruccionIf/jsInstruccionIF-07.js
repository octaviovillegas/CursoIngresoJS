function mostrar()
{
	edad=txtIdEdad.value;
	estado=estadoCivil.value;

	if (edad<='17'&&estado!='Soltero'){
		alert('⛔️ Es muy pequeño para NO ser soltero');
	}
}