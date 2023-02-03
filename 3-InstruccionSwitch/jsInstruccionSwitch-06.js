// Angel Farina.

function mostrar()
	{
		var hora;
		
		hora=txtIdHora.value;
	
		switch(true){
			default:
				alert('⛔️ la hora no existe.');
				break;
			case ["7", "8", "9", "10", "11"].includes(hora):
				alert('🌔 Es de mañana');
				break;
			case ["12", "13", "14", "15", "16", "17", "18", "19"].includes(hora):
				alert('☀ Es de tarde.');
				break;
			case ["20", "21", "22", "23", "24"].includes(hora):
				alert('🌙 Es de noche.');
		}
		
		/*switch(true){
			default:
				alert('⛔️ la hora no existe.');
				break;
			case '7':
			case '8':
			case '9':
			case '10':
			case '11':
				alert('🌔 Es de mañana');
				break;
			case '12':
			case '13':
			case '14':
			case '15':
			case '16':
			case '17':
			case '18':
			case '19':
				alert('☀ Es de tarde.');
				break;
			case '20':
			case '21':
			case '22':
			case '23':
			case '24':
				alert('🌙 Es de noche.');
		}*/
	}