function mostrar()
{

var numero;
var numeroP = 0;
var numeroN = 0;
var contadorP = 0;
var contadorN = 0;
var contadorC = 0;
var contadorPar = 0;
var promedioP = 0;
var promedioN = 0;
var diferencia;



do{
	numero = parseInt(prompt("ingrese numero"));
	while(isNaN(numero)){
		numero = parseInt(prompt("No es un numero , ingrese numero"));
	}

	if(numero > 0){
		numeroP = numero + numeroP;
		contadorP = contadorP + 1;

	}
	
	else if (numero < 0 ){
		numeroN = numero + numeroN;
		contadorN = contadorN + 1;
	}

	else{
		contadorC = contadorC +1;
	}

	if(numero %2==0){
		contadorPar = contadorPar + 1;

	}

}while(confirm("desea ingresar otro numero?"));


		promedioP = numeroP / contadorP;
		promedioN = numeroN / contadorN;
		diferencia = numeroP - numeroN;
	

	document.write("la suma de numeros positivos da: " + numeroP + "<br>");
	document.write("la suma de numeros negativos da: " + numeroN + "<br>");
	document.write("cantidad de positivos: " + contadorP + "<br>");
	document.write("cantidad de negativos: " + contadorN + "<br>");
	document.write("cantidad de ceros: " + contadorC + "<br>");
	document.write("cantidad de pares: " + contadorPar + "<br>");
	document.write("promedio de positivos es: " + promedioP + "<br>");
	document.write("promedio de negativos es: " + promedioN + "<br>");
	document.write("la diferencia es: " + diferencia + "<br>");




}//FIN DE LA FUNCIÓN