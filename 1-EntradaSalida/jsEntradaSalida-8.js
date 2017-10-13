/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
var num1;
var num2;

function SacarResto()
{
    num1 = document.getElementById("numeroDividendo").value;
    num2 = document.getElementById("numeroDivisor").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var resto = x % y;
    alert("El resto es " + resto)
	
}
