function mostrar()
{
	var destino=txtIdDestino.value;

	switch(destino){
		default:
			void(0);
		break;
		case 'Bariloche':
		case 'Ushuaia':
			alert(`🥶 En ${destino} hace frio.`);
		break;
		case 'Cataratas':
		case 'Mar del plata':
			alert(`🔥 En ${destino} hace calor.`);
		break;
	}
}