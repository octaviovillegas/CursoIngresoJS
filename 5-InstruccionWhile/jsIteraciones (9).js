function Mostrar()
{
	var num;
	var maximo;
	var minimo;
	var primera = true;

	while (confirm(""))
{
	num=prompt("");
	num=parseInt(num);

	if (primera){
		primera=false;
		maximo=num;
	    minimo=num;}
	else {
		if (num > maximo)
		
		maximo=num;

		if (num < minimo)
		minimo=num
	}

	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
	
	
}//FIN DE LA FUNCIÓN