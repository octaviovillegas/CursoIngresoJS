/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(numero>9){
		numero = parseInt(prompt("Numero invalido ingrese un numero entre 0 y 10"));
		
	}
	
	document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN