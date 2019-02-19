function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño) 
	{
		case "Febrero":
		alert("si tiene 28 días");
			break;
	
		case "Marzo":
		case "Abril":
		case "Septiembre":
		case "Junio":
		case "Noviembre":
		alert("si tiene 30 días");
			break;
		
		case "Julio":
		case "Agosto":
		case "Enero":
		case "Octubre":
		case "Diciembre":
		case "Mayo":
		alert("si tiene 31 días");
			break;
	}
	



}//FIN DE LA FUNCIÓN