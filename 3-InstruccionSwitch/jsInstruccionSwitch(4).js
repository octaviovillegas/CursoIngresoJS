function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){
	case 'Febrero':
	alert('este mes no tiene mas de 28 dias');
	break;

	case 'Abril':
	case 'Julio':
	case 'Septiembre':
	case 'Noviembre':
	alert('tiene 30 dias');
	break;

	default:
	alert('tiene 31 dias');
	break;

}


}//FIN DE LA FUNCIÓN
