function Mostrar()
{
//tomo el mes  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){
	case 'Febrero':
		alert("Este mes no tiene mas de 29 de días");
		break;
	default:
		alert("Este mes tiene 30 o más días");
		break;
}
	
}//FIN DE LA FUNCIÓN