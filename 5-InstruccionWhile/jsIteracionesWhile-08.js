// Angel Farina.

function mostrar()
{
	var num;
	var positivo;
	var negativo;
	
	positivo=0;
	negativo=1;

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