function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='s';

	while(respuesta=="s"){
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero>0){
			positivo=positivo+numero;
		}else{
			negativo=negativo*numero;
		}
		respuesta=prompt("quiere ingresar otro numero. s/n");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN