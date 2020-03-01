function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero ;
	var respuesta = 'si';


do{

numero = parseInt(prompt("ingrese nota"));

respuesta = prompt("¿Quiere ingresar otro numero?");

contador = contador + 1;


if (numero < 0){
			negativo = numero * negativo;
		}

else {
			positivo = numero + positivo;
		}

} while(respuesta == "si");



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
