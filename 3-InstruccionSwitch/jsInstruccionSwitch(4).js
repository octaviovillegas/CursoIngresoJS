function Mostrar()
{
//tomo la edad  
var mesDelAño 
mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case ("Febrero"):
	{
		console.log("28 dias");
		break;
	}
	case ("Enero"):
	case ("Marzo"):
	case ("Mayo"):
	case ("Julio"):
	case ("Agosto"):
	case ("Octubre"):
	case ("Diciembre"):
	{
		console.log("31 dias");
		break;
	}
	default:
	{
		console.log("30 dias");
	}
}
}//FIN DE LA FUNCIÓN