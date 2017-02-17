/*
	Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function Mostrar()
{

	//var contador=0;
	//declarar contadores y variables 
	var ingreso;
	var negativoContador = 0;
	var positivoContador = 0;
	var positivos = 0;
	var negativos = 0;
	var pares = 0;
	var ceros = 0;
	var respuesta="si";

	while(respuesta!="no")
	{
		ingreso = prompt("Ingrese un numero.");
		ingreso = parseInt(ingreso);
		if(ingreso % 2 == 0){
			pares++;
		}
		if(ingreso > 0){
			positivos += ingreso; 
			positivoContador++;
		}else{
			if(ingreso < 0){
				negativos += ingreso;
				negativoContador++;
			}else{
				if(ingreso == 0){
					ceros++;
				}
			}
		}
		respuesta = prompt("¿Desea seguir Ingresando numeros? (si/no)");
	}

	document.write("Suma de los negativos: " , negativos + " <br>");
	document.write("Suma de los positivos: " , positivos + " <br>");
	document.write("Cantidad de positivos: " , positivoContador + " <br>");
	document.write("Cantidad de negativos: " , negativoContador + " <br>");
	document.write("Cantidad de ceros: " , ceros + " <br>");
	document.write("Cantidad de números pares: ", pares + " <br>");
	document.write("Promedio de positivos: " , positivos/positivoContador + " <br>");
	document.write("Promedios de negativos: " , negativos/negativoContador + " <br>");
	document.write("Diferencia entre positivos y negativos, (positvos-negativos): " , (positivos-negativos) + " <br>");


}//FIN DE LA FUNCIÓN