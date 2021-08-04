let hora ;
	hora = parseInt(document.getElementById("txtIdHora").value);

	if (hora>=7 && hora <= 11){
		switch(hora){
			case hora :
				alert("Es de mañana");
				break ;
		}
	}
	else if (hora >= 12 && hora <= 19){
		switch(hora){
			case hora :
				alert("Es de tarde");
				break ;
		}
	}
	else if (hora>=20 && hora<=24 || hora>=0 && hora<=6){
		switch(hora){
			case hora :
			alert("Es de noche");
			break;
		}
	}
	else {
		alert("La hora no existe");
	}