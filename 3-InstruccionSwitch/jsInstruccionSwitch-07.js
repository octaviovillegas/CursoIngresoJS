function mostrar()
{
	var destino=txtIdDestino.value;

	switch(destino){
		default:
			void(0);
		break;
		case 'Bariloche':
			alert(destino+' se encuentra al Oeste');
		break;
		case 'Cataratas':
			alert(destino+' se encuentra al Norte')
		break;
		case 'Mar del plata':
			alert(destino+' se encuentra al Este');
		break;
		case 'Ushuaia':
			alert(destino+' se encuentra al Sur');
	}
}