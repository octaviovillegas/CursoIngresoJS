// Angel Farina.

function mostrar()
{
	var mes;
	var mensaje;
	
	mes = txtIdMes.value;

	switch(true){
		default:
			mensaje = 'Falta para el invierno.';
			break;
		case ["Julio", "Agosto"].includes(mes):
			mensaje = 'Abrigate que hace frio.';
			break;
		case ["Septiembre", "Octubre", "Noviembre", "Diciembre"].includes(mes):
			mensaje = 'Ya pasamos el frio, ahora calor!!!.';
	}
	alert(mensaje);
}