function Mostrar()
{
	var max;
	var min;
	// declarar variables
	var respuesta=true;
	var numero;
	var primera=true
	while(respuesta)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if (primera)
		{
			max=numero;
			min=numero;
			primera=false;
		}
		else
		{
			if(numero>max)
			{
				max=numero;
			}
			if(numero<min)
			{
				min=numero;
			}
		}
		respuesta=confirm("Quiere continuar?");
	}
	document.getElementById('maximo').value=max
	document.getElementById('minimo').value=min
}//FIN DE LA FUNCIÓN