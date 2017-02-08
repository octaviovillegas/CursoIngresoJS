function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño= document.getElementById('mes').value;
switch(mesDelAño)
{
	case("Febrero"):
	{
		console.log("Este mes no tiene mas de 29 dias.");
		break;
	}
	default:
	{
		console.log("Este mes tiene 30 dias o mas");
		break;
	}
}
}//FIN DE LA FUNCIÓN