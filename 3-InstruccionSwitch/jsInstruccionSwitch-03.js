function mostrar()
{
	var mes=txtIdMes.value;

	switch (mes){
		default:
			alert('Este mes tiene 30 o más días');
			break;
		case 'Febrero':
			alert('Este mes no tiene más de 29 días.');
	}
}