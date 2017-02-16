function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var ingreso;


	//validar por la negativa
	while(respuesta == "si"){
		ingreso = prompt("Ingrese el número a sumar.");
		ingreso = parseInt(ingreso);
		//ITERA HASTA QUE INGRESE UN VALOR VALIDO
		while(isNaN(ingreso)){
			ingreso = prompt("Ingrese el número a sumar.");
			ingreso = parseInt(ingreso);
		}
		//suma todos los numeros ingresados
		acumulador += ingreso;
		//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
		//if (!isNaN(ingreso))acumulador += ingreso; 
		contador++;
		
		if(contador > 1){
			respuesta = prompt("¿Desea seguir sumando? (si/no)");
			while(!(respuesta == "si" || respuesta == "no")){
				respuesta = prompt("Opcion incorrecta, ¿desea seguir sumando? (si/no)");
			}
		}
	}//cierra el while

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN