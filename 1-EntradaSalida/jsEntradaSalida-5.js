/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
var nombre
var edad
function Mostar()
{
    nombre = dato = document.getElementById("elNombre").value;
    edad = dato = document.getElementById("laEdad").value;
    alert ("usted se llama " + nombre);
    alert ("y tiene" + edad);

}

