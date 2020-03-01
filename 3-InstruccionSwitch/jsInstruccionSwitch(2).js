function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
  case 'Marzo' :
  case 'Abril':
  case 'Junio':
  alert('falta para el verano');
  break;

  case "Julio":
  case "Agosto":
  alert("Abrigate que hace frio.");
  break;

  default:
  alert('verano');
  break;
}






}//FIN DE LA FUNCIÓN
