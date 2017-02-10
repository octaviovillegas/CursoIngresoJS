function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){

    case "Febrero":
    alert(mesDelAño +" Este mes no tiene más de 29 días.")
    break

    default:
    alert(mesDelAño + " Este mes tiene 30 o más días")

}

}//FIN DE LA FUNCIÓN