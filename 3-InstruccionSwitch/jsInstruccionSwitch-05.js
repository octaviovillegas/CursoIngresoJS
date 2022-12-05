function mostrar()
{
	var hora=txtIdHora.value;

	switch (hora){
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
			alert('✅ Es de mañana')
			break;
		default:
			alert('⛔️ No es de mañana')
	}
}

/*function mostrar()
{
	var hora=txtIdHora.value;

	switch (hora){
		case hora='7'&&'11':
			alert('✅ Es de mañana')
			break;
		default:
			alert('⛔️ No es de mañana')
	}
}*/