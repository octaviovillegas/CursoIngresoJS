function Mostrar()
{

	var contador=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var numero;
	var positivo=0;
	var negativo=0;
	//declarar contadores y variables 
	var respuesta=true;
	while(respuesta)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			contador++
			negativo+=numero;
		}
		else
		{
			if(numero==0)
			{
				contador3++;
			}
			else
			{
				if(numero>0)
				{
					contador2++;
					positivo+=numero;
				}
				if(numero%2==0);
				{
					contador4++;
				}
			}
		}
		respuesta=confirm("Quiere continuar?");
	}
document.write("Suma de los negativos= "+negativo);
document.write("Suma de los positivos= "+positivo);
document.write("Cantidad de positivos= "+contador2);
document.write("cantidad de negativos= "+contador);
document.write("cantidad de ceros= "+contador3)
document.write("cantidad de pares= "+contador4)
}//FIN DE LA FUNCIÓN
//numero%2==0