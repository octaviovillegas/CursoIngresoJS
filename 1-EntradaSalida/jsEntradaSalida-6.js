/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resultado=numerouno+numerodos;
	alert("la suma es "+resultado);
}

