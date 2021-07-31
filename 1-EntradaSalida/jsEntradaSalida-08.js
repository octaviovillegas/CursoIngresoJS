/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	let numero1;
	let numero2;
	let resto;
	numero1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resto = numero1 % numero2;
	alert("El resultado es " + resto);
}
