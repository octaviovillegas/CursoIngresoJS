function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
	case "Enero":{
		console.log("tiene 31 dias");
		break;
	}
	case "Febrero":{
		console.log("tiene 28 dias");
		break;
	}
	case "Marzo":{
		console.log("tiene 31 dias");
		break;
	}
	case "Abril":{
		console.log("tiene 30 dias");
		break;
	}
	case "Mayo":{
		console.log("tiene 31 dias");
		break;
	}
	case "Junio":{
		console.log("tiene 30 dias");
		break;
	}
	case "Julio":{
		console.log("tiene 31 dias");
		break;
	}
	case "Agosto":{
		console.log("tiene 31 dias");
		break;
	}
	case "Septiembre":{
		console.log("tiene 30 dias");
		break;
	}
	case "Octubre":{
		console.log("tiene 31 dias");
		break;
	}
	case "Noviembre":{
		console.log("tiene 30 dias");
		break;
	}
	case "Diciembre":{
		console.log("tiene 31 dias");
		break;
    }

	default:
	   console.log("no especificado");
	}

}//FIN DE LA FUNCIÓN