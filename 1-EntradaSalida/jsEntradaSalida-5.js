/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
    var edad;
    var mostrar;
   
        nombre=document.getElementById("elNombre").value;
        edad=document.getElementById("laEdad").value;
        mostrar="Usted se llama "+nombre + "y su edad es " +edad +" años"
        
        alert(mostrar);

}

