/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = prompt ("ingrese nombre");
	
	//alert (nombre);

	let apellido = prompt ("ingrese apellido");

	alert ("El nombre y apellido ingresado es: " + nombre + "  " + apellido );
}

