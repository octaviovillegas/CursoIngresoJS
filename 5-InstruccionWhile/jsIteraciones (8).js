function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	
		while(respuesta == "si"){
			var ingreso = parseInt(prompt("Ingrese un número positivo suma, negativo multiplica."));
			//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
			if (!isNaN(ingreso)){
				if(ingreso >= 0){
					positivo += ingreso;
				}else{
					negativo *= ingreso;
				}
			}
			contador++;
			respuesta = prompt("¿Desea seguir sumando? (si/no)");
			while(!(respuesta == "si" || respuesta == "no")){
				respuesta = prompt("¿Desea seguir sumando? (si/no)");
			}
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN