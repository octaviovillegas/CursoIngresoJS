// Angel Farina.

function mostrar()
{
	var clave;
	
	clave=prompt('Ingresar clave');

	while (clave!='utn750'){
		alert('❌ Clave erronea');
		clave=prompt('Ingresar clave');
	}
	alert('✅ Welcome');
}