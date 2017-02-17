function Mostrar()
{

	var num;
	var positivo=0;
	var negativo=1;
	
	while (confirm("true"));
		num=prompt("");
		num=parseInt(num);

		if (num >=0){
		positivo+=num;}
			else
{			negativo*=num;
		}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN