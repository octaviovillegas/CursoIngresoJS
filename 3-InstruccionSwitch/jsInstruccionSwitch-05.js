/*function mostrar()
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
}*/

function mostrar()
{
	var hora=txtIdHora.value;

	switch (true){
		case ["7", "8", "9", "10", "11"].includes(hora): 
			alert('✅ Es de mañana');
			break;
		default:
			alert('⛔️ No es de mañana')
	}
}