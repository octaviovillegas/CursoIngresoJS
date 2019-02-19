function mostrar()
{
var Planetas;
//var mensaje;

Planetas = document.getElementById('Planetas')

Planetas = prompt("Favor de colocar planetas que se encuentren en el sistema solar");

switch (Planetas) 
{

	case "Mercurio":
	case "Venus":
	case "Marte":
		alert("acá hace más calor");
		break;
	case "Tierra":
		alert( "acá vivimos");
		break;
	case "Marte":
	case "Júpiter":
	case "Saturno":
	case "Urano":
	case "Neptuno":
		alert("acá hace más frio");
		break;
	default:
		alert("no es válido " + Planetas);
		break;

}

























}
