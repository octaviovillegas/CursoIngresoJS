// Angel Farina.

function mostrar()
{
	var mes;
	
	mes=txtIdMes.value;

	switch (true){
		default:
			alert(`${mes} tiene 31 días.`);
			break;
		case ["Abril", "Junio", "Septiembre", "Noviembre"].includes(mes):
			alert(`${mes} tiene 30 días.`);
			break;
		case ["Febrero"].includes(mes):
			alert(`${mes} tiene 28 días.`)
	}
}