function mostrar()
{
	var num;
	var positivo=0;
	var negativo=1;

	while (confirm('Quiere ingresar mas numeros?')){
		num=parseInt(prompt(''));

		if (num>=0){
			positivo+=num;
		}else {
			negativo*=num;
		}
	}
	txtIdSuma.value=positivo;
	txtIdProducto.value=negativo;
}