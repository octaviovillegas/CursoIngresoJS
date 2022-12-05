function mostrar()
{
	var mes=txtIdMes.value;
	
	switch (mes){
		default:
			alert('nada');
			break;
		case 'Enero':
			alert("que comiences bien el año!!!.");
			break;
		case 'Marzo':
			alert('a clases!!!.');
			break;
		case 'Julio':
			alert('se vienen las vacaciones!!!.');
			break;
		case 'Diciembre':
			alert('felices fiestas!!!.');
	}
}