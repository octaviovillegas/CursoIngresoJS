function Mostrar()
{
//tomo la edad  
    
    var años;
    años = document.getElementById('edad').value;

    if (años > 12 && años < 18) {
    	alert("Es un adolecente de entre 13 y 17 años");

    }
    else{
    	alert("No es un adolecente");
    }


}//FIN DE LA FUNCIÓN