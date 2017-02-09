function Mostrar()
{
	var contador=0;
	//declarar contadores y variables 
	var numero;
	var positivo=0;
	var negativo=0;
	var sumaPositivo=0;
	var sumaNegativo=0;
	var promedioPositivos;
	var promedioNegativos;
	var ceros=0;
	var par=0;
	var respuesta=true;
	var diferencia;

	while(respuesta==true)
	{
		contador++;
		numero=parseInt(prompt("ingrese un numero."));
		respuesta=confirm("quiere agregar otro numero.");
		if(numero>0)
		{
			positivo++;
			sumaPositivo=sumaPositivo+numero;
			promedioPositivos=sumaPositivo/positivo;

        }
        if(numero<0)
        {
        	negativo++;
        	sumaNegativo=sumaNegativo+numero;
        	promedioNegativos=sumaNegativo/negativo;
        }
        if(numero==0)
        {
        	ceros++;
        }
        if(numero%2 == 0)
        {
        	par++;
        }
     
	}
	diferencia= sumaPositivo + sumaNegativo;
	document.write("la suma de los positivos es "+sumaPositivo+"<br>");
	document.write("la suma de los negativos es "+sumaNegativo+"<br>");
	document.write("la cantidad de positivos es "+positivo+"<br>");
	document.write("la cantidad de negativos es "+negativo+"<br>");
	document.write("la cantidad de ceros es "+ceros+"<br>");
	document.write("la cantidad de numeros pares es "+par+"<br>");
	document.write("el promedio de los positivos es "+promedioPositivos+"<br>");
	document.write("el promedio de los negativos es "+promedioNegativos+"<br>");
	document.write("la diferencia entre los positivos y los negativos es "+diferencia+"<br>");




}//FIN DE LA FUNCIÓN