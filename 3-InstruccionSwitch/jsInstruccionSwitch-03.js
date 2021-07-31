function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Febrero":
			alert("Este mes tiene 29 dias");
			break;
		default:
			alert("Este mes tiene 30 dias");
			break;


	}


}//FIN DE LA FUNCIÓN