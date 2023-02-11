// Angel Farina.

function mostrar()
{
	var mes;
	var mensaje;
	
	mes = txtIdMes.value;
	
	switch (mes){
		default:
			mensaje ='nada';
			break;
		case 'Enero':
			mensaje = 'que comiences bien el año!!!.';
			break;
		case 'Marzo':
			mensaje = 'a clases!!!.';
			break;
		case 'Julio':
			mensaje ='se vienen las vacaciones!!!.';
			break;
		case 'Diciembre':
			mensaje ='felices fiestas!!!.';
	}
	alert(mensaje);
}