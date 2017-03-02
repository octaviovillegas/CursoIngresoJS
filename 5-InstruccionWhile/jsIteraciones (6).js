function Mostrar()
{

	var contador=0;
	var acumulador=0;
	while(contador < 5){
		var ingreso = parseInt(prompt("Ingrese el número a sumar."));
		//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
		if (!isNaN(ingreso))acumulador += ingreso; 
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN