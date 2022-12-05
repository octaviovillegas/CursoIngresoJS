function mostrar()
{
	var mes=txtIdMes.value;

	switch(mes){
		default:
			alert('Falta para el invierno.');
			break;
		case 'Julio':
		case 'Agosto':
			alert('Abrigate que hace frio.');
			break;
		case 'Septiembre':
		case 'Octubre':
		case 'Noviembre':
		case 'Diciembre':
			alert('Ya pasamos el frio, ahora calor!!!.');
	}
}