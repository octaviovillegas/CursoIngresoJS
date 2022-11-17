/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
    var nombre;		
	nombre=prompt("Ingresa tu nombre");		
	document.getElementById('txtIdNombre').value=nombre;
}