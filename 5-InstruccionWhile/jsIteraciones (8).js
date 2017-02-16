function Mostrar()
{

	var contador=0;
	var contador2=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta=true;
	while(respuesta)
	{
		numero=prompt("Ingresar numero");
		if(numero>0)
		{
			contador++;
			numero=parseInt(numero);
			positivo+=numero;
		}
		else
		{
			contador2++;
			numero=parseInt(numero);
			negativo*=numero;
		}
	respuesta=confirm("Quiere continuar?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN