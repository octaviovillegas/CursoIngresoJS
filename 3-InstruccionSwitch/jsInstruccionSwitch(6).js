function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora){
	
    case "7":{
		console.log("Es de mañana.");
		break;
	}
	case "8":{
		console.log("Es de mañana.");
		break;
	}
	case "9":{
		console.log("Es de mañana.");
		break;
	}
	case "10":{
		console.log("Es de mañana.");
		break;
	}
	case "11":{
		console.log("Es de mañana.");
		break;
	}
	case "12":{
		console.log("Es de tarde.");
		break;
	}
	case "13":{
		console.log("Es de tarde.");
		break;
	}
	case "14":{
		console.log("Es de tarde.");
		break;
	}
	case "15":{
		console.log("Es de mañana.");
		break;
	}
	case "16":{
		console.log("Es de tarde.");
		break;
	}case "17":{
		console.log("Es de tarde.");
		break;
	}
	case "18":{
		console.log("Es de tarde.");
		break;
	}
	case "19":{
		console.log("Es de tarde.");
		break;
	}
	case "20":{
		console.log("Es de noche.");
		break;
	}
	case "21":{
		console.log("Es de noche.");
		break;
	}
    case "22":{
		console.log("Es de noche.");
		break;
	}
	case "23":{
		console.log("Es de noche.");
		break;
	}
    case "24":{
		console.log("Es de noche.");
		break;
	}
    case "1":{
		console.log("Es de noche.");
		break;
	}
    case "2":{
		console.log("Es de noche.");
		break;
	}
    case "3":{
		console.log("Es de noche.");
		break;
	}
    case "4":{
		console.log("Es de noche.");
		break;
	}
    case "5":{
		console.log("Es de noche.");
		break;
	}
    case "6":{
		console.log("Es de noche.");
		break;
	}
    case "0":{
		console.log("Es de noche.");
		break;
	}    
	
	default:
	   if(laHora > "24"){
           console.log("la hora no existe");
       } else if(laHora < 0){
           console.log("la hora no existe");
       }
        
	}


}//FIN DE LA FUNCIÓN