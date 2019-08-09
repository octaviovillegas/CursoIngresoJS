function mostrar()
{
//tomo la edad

var edad = parseInt(document.getElementById("edad").value);

if ( edad > 18 ){
  alert('es mayor');
}

else if ( edad >= 13 && edad <=18){
  alert('es adolcente'); }

else {
  alert('es menor');
}


}//FIN DE LA FUNCIÓN
