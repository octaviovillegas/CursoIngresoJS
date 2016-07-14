function Mostrar()
{
//tomo la edad  
var mesDelAño=document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Enero":
	
		alert("Que comiences bien el año");
		break;
	
	case "Marzo":
	
		alert("a clases");
		break;
	
	case "Julio":
	
		alert("Se vienen las vacaciones");
		break;
	
	case "Diciembre":
	
		alert("Felices fiestas");
		break;
	
}
/*si pongo:
var mes=documet.getElementById('mes').value;
alert(mes);
me va a mostrar el mes que seleccioné.
*/
}//FIN DE LA FUNCIÓN