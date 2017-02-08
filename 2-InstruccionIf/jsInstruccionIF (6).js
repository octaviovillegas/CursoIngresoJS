function Mostrar()
{
//tomo la edad  
var edad;
    
    edad=document.getElementById("edad").value;
    
         if(edad <=12)
    {
        alert("Usted es Menor de Edad")
    }
         if (edad>=13 && edad <=17) {
       
        alert ("usted es adolescente")
        
     }
         else (edad >18)
        
         alert ("usted es mayor")

}//FIN DE LA FUNCIÓN