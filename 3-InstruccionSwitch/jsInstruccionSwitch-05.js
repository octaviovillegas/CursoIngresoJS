// Angel Farina.

function mostrar()
{
	var hora;
	var mensaje;
	
	hora = txtIdHora.value;

	switch (true){
		case ["7", "8", "9", "10", "11"].includes(hora): 
			mensaje = '✅ Es de mañana';
			break;
		default:
			mensaje = '⛔️ No es de mañana';
	}
	alert(mensaje);

	/*switch (hora){
		case '7':
		case '8':
		case '9':
		case '10':
		case '11':
			mensaje ='✅ Es de mañana';
			break;
		default:
			mensaje ='⛔️ No es de mañana';
	}*/
}