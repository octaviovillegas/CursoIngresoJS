function Mostrar()
{
//tomo la edad  
   var edad;
   var estCivil;

   edad = document.getElementById('edad').value;
   estCivil = document.getElementById("estadoCivil").value;

   if (edad < 18 && estCivil!= "Soltero"){
   	alert("Es muy pequeño para NO ser soltero.");
   }

	


}//FIN DE LA FUNCIÓN