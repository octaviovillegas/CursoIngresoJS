/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
var dato
function Mostar()
{
	dato = prompt ("ingrese su nombre");
 document.getElementById("elNombre").value = dato;


	
}

