
function mostrar()
{

	var largo;
	var ancho;
	var perimetro

	largo = prompt("Por favor ingrese largo");
	ancho =  prompt("Por favor ingrese ancho");

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = largo * ancho;

	alert("Su perimetro es: " + perimetro);
}
