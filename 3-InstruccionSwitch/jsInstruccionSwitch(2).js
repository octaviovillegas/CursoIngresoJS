function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño) 
	{
		case "Febrero":
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!")
			break;
	}


}//FIN DE LA FUNCIÓN