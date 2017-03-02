function Mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);
if(!(edad >= 13 && edad <=17)) alert("No es adolescente");
}//FIN DE LA FUNCIÓN