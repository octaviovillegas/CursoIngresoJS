function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var ingreso;
	
	var respuesta='si';
	
		while(respuesta != "no"){
			ingreso = prompt("Ingrese un número positivo suma, negativo multiplica.");
			ingreso = parseInt(ingreso);
			//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
			if (!isNaN(ingreso)){
				if(ingreso >= 0){
					positivo += ingreso;
				}else{
					negativo *= ingreso;
				}
			}
			if(contador > 0){
				respuesta = prompt("¿Desea seguir ingresando datos? (si/no)");
				while((respuesta != "si" && respuesta != "no")){
					respuesta = prompt("¿Opcion incorrecta, desea seguir ingresando datos? (si/no)");
				}
			}
			contador++;			
		}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN