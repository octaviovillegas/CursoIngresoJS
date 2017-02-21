function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var ingreso;
	while(respuesta == "si"){
		ingreso = prompt("Ingrese el número a sumar ('no' para dejar de sumar).")
		if (ingreso == "no"){
			respuesta = "no";
			break;
		}
		ingreso = parseInt(ingreso);
		//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
		if (!isNaN(ingreso))acumulador += ingreso; 
		contador++;
		if(contador > 5){
			respuesta = prompt("¿Desea seguir sumando? (si/no)");
			while(!(respuesta == "si" || respuesta == "no")){
				respuesta = prompt("¿Desea seguir sumando? (si/no)");
			}
		}
	}

document.getElementById('suma').value=acumulador;
if(contador != 0){
	document.getElementById('promedio').value=acumulador/contador;
}else{
	document.getElementById('promedio').value=0;
}

}//FIN DE LA FUNCIÓN