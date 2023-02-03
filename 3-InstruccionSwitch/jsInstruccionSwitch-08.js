// Angel Farina.

function mostrar()
{
	var destino;
	
	destino=txtIdDestino.value;

	switch(true){
		default:
			void(0);
		break;
		case ["Bariloche", "Ushuaia"].includes(destino):
			alert(`🥶 En ${destino} hace frio.`);
		break;
		case ["Cataratas", "Mar del plata"].includes(destino):
			alert(`🔥 En ${destino} hace calor.`);
		break;
	}
}