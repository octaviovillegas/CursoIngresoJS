function mostrar()
{
	var num;
	num=prompt("ingrese un número entre 0 y 9.");

	while (num>9){
		alert('Numero Invalido');
		num=prompt('ingrese un número entre 0 y 9.');
	}
	txtIdNumero.value=num;
}