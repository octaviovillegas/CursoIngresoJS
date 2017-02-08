function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	case "Julio":
	case "Agosto":
	{
		console.log("Abrigate que hace frio.");
		break;
	}
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	{
		console.log("Ya pasamos el frio, ahora calor!!!.")
		break;
	}
	default:
	{
		console.log("Falta para el invierno.")
		break;
	}

}
}//FIN DE LA FUNCIÓN