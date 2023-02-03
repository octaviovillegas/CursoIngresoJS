// Angel Farina.

function mostrar()
{
	var edad;
	
	edad=parseInt(txtIdEdad.value);

	if (edad<'13'){
		alert('niño');
	} else if (edad>='13'&&edad<='17'){
		alert('adolescente');
	} else {
		alert('mayor');
	}
}