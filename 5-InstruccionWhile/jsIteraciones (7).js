function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){
		var ingreso = parseInt(prompt("Ingrese el número a sumar."));
		//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
		if (!isNaN(ingreso))acumulador += ingreso; 
		contador++;
		respuesta = prompt("¿Desea seguir sumando? (si/no)");
		while(!(respuesta == "si" || respuesta == "no")){
			respuesta = prompt("¿Desea seguir sumando? (si/no)");
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN