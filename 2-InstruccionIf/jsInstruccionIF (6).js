function Mostrar()
{
//tomo la edad  
var edad;
    
    edad=document.getElementById("edad").value;
    
         if(edad <=12)
    {
        alert("Usted es Menor de Edad")
    }
      else if (edad >=18){

        alert ("usted es mayor")
        
     }
         else {
        
         alert ("usted es adolescente")
         }
}//FIN DE LA FUNCIÓN