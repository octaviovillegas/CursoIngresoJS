function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero > 11){
		numero = prompt('ingrese nuevamente');

	}

	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN
