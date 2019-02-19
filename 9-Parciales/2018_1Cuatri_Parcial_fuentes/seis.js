function mostrar()
{
var hora;

hora = document.getElementById('laHora');

if (hora > 5 && hora < 12) 
{
 alert("es de mañana"); 
 else
 	if (hora > 11 && hora <19) 
 	{
 		alert("es de tarde");
 	}//hora > 11 && hora <19
}//hora > 5 && hora < 12
else
{
	alert("es de noche");
}












}
/*switch (true) 
{
	case (laHora > 5 && laHora < 12):
		alert("es de mañana");
		break;
}*/
