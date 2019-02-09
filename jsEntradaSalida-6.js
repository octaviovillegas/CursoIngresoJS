/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var primerNumero;
	var segundoNumero;
	var suma;
 
 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;
 
 primerNumero = parseInt(primerNumero);
 segundoNumero = parseInt(segundoNumero);
 
 suma = primerNumero + segundoNumero;
 
 alert( "La suma es " + suma);
	

//alert( primerNumero + segundoNumero);
/*var numeroUno;
var numeroDos;
var numero;


numeroUno = document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

numeroUno =parseInt(numeroUno);
numeroUno =parseInt(numeroDos);

suma = numeroUno + numeroDos;

alert ("Su suma es: " + suma);*/

}

