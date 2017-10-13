function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case "Febrero":{
            console.log("Este mes no tiene mas de 29 dias.");
            break;
        }
        default:
            console.log("Este mes tiene 30 o mas dias");
            
    }


}//FIN DE LA FUNCIÓN