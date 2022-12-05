function mostrar()
{
	var estacion=txtIdEstacion.value;
	var destino=txtIdDestino.value;
	var base=15000
        var pre20=(base*20)/100;
	var pre10=(base*10)/100;

	switch(estacion+"|"+destino){
		default:
			break;
		case 'Invierno|Bariloche':
		case 'Verano|Mar del plata':
			alert('Precio Final: '+(base+pre20));
			break;
		case 'Invierno|Mar del plata':
		case 'Verano|Bariloche':
			alert('Precio Final: '+(base-pre20));
			break;
		case 'Verano|Cordoba':
		case 'Otoño|Bariloche':
		case 'Primavera|Bariloche':
		case 'Otoño|Cataratas':
		case 'Primavera|Cataratas':
		case 'Verano|Cataratas':
		case 'Otoño|Mar del plata':
		case 'Primavera|Mar del plata':
			alert('Precio Final: '+(base+pre10));
			break;
		case 'Invierno|Cataratas':
		case 'Invierno|Cordoba':
			alert('Precio Final: '+(base-pre10));
			break;
		case 'Otoño|Cordoba':
		case 'Primavera|Cordoba':
			alert('Precio Final: '+(base));
	}
}
