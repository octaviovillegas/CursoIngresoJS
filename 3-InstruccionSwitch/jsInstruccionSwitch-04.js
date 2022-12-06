function mostrar()
{
	var mes=txtIdMes.value;

	switch (mes){
		default:
			alert(`${mes} tiene 31 días.`);
			break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			alert(`${mes} tiene 30 días.`);
			break;
		case 'Febrero':
			alert(`${mes} tiene 28 días.`)
	}
}