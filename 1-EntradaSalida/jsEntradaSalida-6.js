/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero;
	
	numero = parseInt(document.getElementById('numeroUno').value);
	numero += parseInt(document.getElementById('numeroDos').value);
	
	//concatenar con un string castea la variable
	alert("la suma es: "+ numero);
}

