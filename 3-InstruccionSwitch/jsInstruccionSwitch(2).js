function Mostrar()
{
//tomo la edad  
var mesDelAño=document.getElementById('mes').value;
/*alert (mesDelAño);*/
switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
	{
		alert("Abrigate que hace frio.");
		break;
	}
	case "Junio":
	case "Mayo":
	case "Abril":
	case "Marzo":
	case "Febrero":
	case "Enero":
	{
		alert("Falta para el invierno");
		break;
	}
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	{
		alert("Ya pasamos el frio, ahora calor!!!");
		break;
	}
}
}//FIN DE LA FUNCIÓN