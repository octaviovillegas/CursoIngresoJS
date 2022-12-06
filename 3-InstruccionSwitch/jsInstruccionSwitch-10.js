function mostrar()
{
	var estacion=txtIdEstacion.value;
	var destino=txtIdDestino.value;

	switch(estacion+"|"+destino){
		default:
			alert('✅ Se viaja.');
			break;
		case 'Invierno|Cataratas':
		case 'Invierno|Mar del plata':
		case 'Invierno|Cordoba':
		case 'Verano|Bariloche':
		case 'Verano|Cordoba':
		case 'Primavera|Bariloche':
			alert('⛔️ No se viaja.');
	}
}