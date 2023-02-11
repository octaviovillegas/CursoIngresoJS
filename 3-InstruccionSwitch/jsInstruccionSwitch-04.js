// Angel Farina.

function mostrar()
{
	var mes;
	var mensaje;
	
	mes = txtIdMes.value;

	switch (true){
		default:
			mensaje = `${mes} tiene 31 días.`;
			break;
		case ["Abril", "Junio", "Septiembre", "Noviembre"].includes(mes):
			mensaje = `${mes} tiene 30 días.`;
			break;
		case ["Febrero"].includes(mes):
			mensaje = `${mes} tiene 28 días.`;
	}
	alert(mensaje);
}