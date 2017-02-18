function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

while (confirm ("")){
	
		contador++;
		num=prompt("");
		num=parseInt(num)
		acumulador+=num;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN