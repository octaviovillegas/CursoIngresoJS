function mostrar()
{
	var hora;

	hora = document.getElementById('laHora').value;

	switch(hora)
	{	

		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("es de mañana");
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			alert("es de tarde");
			break;
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "5":
			alert(" es de noche");
		if (hora > "19" || hora < "6")
			{
				alert("a dormir");
			}
			break;
		default:
			alert("hora no es válida");
			break;
	}


































}




























/*switch (true) 
{
	case (laHora > 5 && laHora < 12):
		alert("es de mañana");
		break;
}*/
/*if (hora > 5 && hora < 12) 
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

}*/


/**/