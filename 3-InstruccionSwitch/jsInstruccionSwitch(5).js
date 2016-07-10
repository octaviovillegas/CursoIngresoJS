function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
//alert (laHora);
var horaNumero=parseInt(laHora);
switch(horaNumero)
{
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	{
		alert ("Es de mañana");
		break;
	}
}
}//FIN DE LA FUNCIÓN