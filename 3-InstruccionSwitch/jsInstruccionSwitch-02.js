function mostrar()
{
	var mes=txtIdMes.value;

	switch(true){
		default:
			alert('Falta para el invierno.');
			break;
		case ["Julio", "Agosto"].includes(mes):
			alert('Abrigate que hace frio.');
			break;
		case ["Septiembre", "Octubre", "Noviembre", "Diciembre"].includes(mes):
			alert('Ya pasamos el frio, ahora calor!!!.');
	}
}