function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){

    case "Julio":
    case "Agosto":
    
    alert(mesDelAño +" Estamos en Invierno")
    break

    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":

    alert(mesDelAño + " Falta para el invierno")
    break
   
    default:
    alert(mesDelAño +" Ya paso el invierno, ahora viene el calor")
}

}//FIN DE LA FUNCIÓN