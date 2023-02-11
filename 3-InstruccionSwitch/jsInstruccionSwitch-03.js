// Angel Farina.

function mostrar()
{
	var mes;
	var mensaje;
	
	mes = txtIdMes.value;

	switch (mes){
		default:
			mensaje = 'Este mes tiene 30 o más días';
			break;
		case 'Febrero':
			mensaje = 'Este mes no tiene más de 29 días.';
	}
	alert(mensaje);
}