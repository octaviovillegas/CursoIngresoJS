/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/



function mostrar()
{ 
	let nombre; 

// guardo en la variable el nombre el texto que escribo en usuario dentro de la ventana prompt	
nombre = prompt ("ingrese su nombre");

// copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina 
document.getElementById ("txtIdNombre").value = nombre;


}

