function mostrar()
{
	edad=parseInt(txtIdEdad.value);
	estado=estadoCivil.value;

	if (edad>='18'&&estado=='Soltero'){
		alert('Es soltero y no es menor');
	}
}