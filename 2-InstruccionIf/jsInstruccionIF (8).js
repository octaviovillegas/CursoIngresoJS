function Mostrar()
{
//tomo la edad  
   var edad;
   var estCivil;
   edad = document.getElementById('edad').value;
   estCivil = document.getElementById('estadoCivil').value;

   if (edad > 17 && estCivil == "Soltero") {
   	alert('Es soltero y no es menor.');
   }

	


}//FIN DE LA FUNCIÓN