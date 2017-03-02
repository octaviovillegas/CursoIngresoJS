

function Mostrar()
{
	/*
		ITERACION HASTA QUE EL USUARIO QUIERA
	*/
	var respuesta = "si";
	var contador = 0;
	var contadorAprobados = 0;
	var contadorHombres = 0;
	var contadorHombresAprobadosVeinticinco = 0;
	var contadorMujeres = 0;
	var contadorMujeresAprobadas = 0;
	var contadorMujeresMenoresVeinte = 0;
	
	var sumadorNota = 0;
	var sumadorNotaHombre = 0;
	var sumadorNotaMujer = 0;
	
	var primerDiez;
	var sexoPrimerDiez;
	
	var promedioNota;
	var nota;
	var edad;
	var nombre;
	var sexo;
	var masViejo;
	var edadMasViejo;
	
	var mejorNotaMujer;
	var nombreMejorNotaMujer;
	var mejorNotaHombre;
	var nombreMejorNotaHombre;

	while(respuesta != "no")
	{
		contador++;
		//Pido nota
		nota = prompt("por favor ingrese su nota");
		nota = parseInt(nota);
		while(nota < 0 || nota > 10)
		{
			nota = prompt("por favor ingrese su nota");
			nota = parseInt(nota);
		}
	
		sumadorNota += nota;
		
		//Pido edad
		edad = prompt("por favor ingrese su edad");
		edad = parseInt(edad);
		while(edad<0 || edad > 100){
			edad = prompt("por favor ingrese su edad");
			edad = parseInt(edad);
		}
		
		//Pido nombre
		nombre = prompt("por favor ingrese su nombre");
		
		//Pido sexo
		sexo = prompt("Ingrese si es hombre o mujer (M o F)");
		sexo = sexo.toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese 'M' si es hombre o 'F' si es mujer");
			sexo = sexo.toLowerCase();
		}
		
		//El mas viejo del curso
		if(contador == 1){
			masViejo = nombre;
			edadMasViejo = edad;
		}else if(edad > edadMasViejo)
		{
			masViejo = nombre;
			edadMasViejo = edad;	
		}
		
		//La mujer con mejor nota
		if(sexo == "f" && contador == 1)
		{
			nombreMejorNotaMujer = nombre;
			mejorNotaMujer = nota;
		}else if(nota > mejorNotaMujer && sexo == "f"){
			nombreMejorNotaMujer = nombre;
			mejorNotaMujer = nota;
		}
		
		//El hombre con mejor nota
		if(sexo == "m" && contador == 1)
		{
			nombreMejorNotaHombre = nombre;
			mejorNotaHombre = nota;
		}else if(nota > mejorNotaHombre && sexo == "m"){
			nombreMejorNotaHombre = nombre;
			mejorNotaHombre = nota;
		}
		
		//cantidad de mujeres aprobadas
		if(nota >= 4 && sexo == "f")
		{
			contadorMujeresAprobadas++;
		}
		
		//cantidad de mujeres menores a 20 años
		if(sexo == "f" && edad < 20){
			contadorMujeresMenoresVeinte++;
		}
		
		//cantidad de hombres mayores a 25 años aprobados
		if(sexo == "m" && edad > 25 && nota >= 4)
		{
			contadorHombresAprobadosVeinticinco++;
		}
		
		//Para el promedio de nota de hombres y mujeres
		if(sexo == "m")
		{
			sumadorNotaHombre = sumadorNotaHombre + nota;
			contadorHombres++;
		}
		else
		{
			sumadorNotaMujer = sumadorNotaMujer + nota;
			contadorMujeres++;
		}
		
		//cxantidad de aprobados
		if(nota >= 4)
		{
			contadorAprobados++;
		}
		if(nota == 10 && primerDiez === undefined)
		{
			primerDiez = nombre;
			sexoPrimerDiez = sexo;
		}
		respuesta = prompt("ingrese no para finalizar la carga");//Ultima linea del while
	}// aca termino la carga de datos
	
	
	//comenzamos a hacer las operaciones necesarias
	/*
	cantidad de mujeres aprobadas
	cantidad de hombres mayores a 25 aprobados
	cantidad de mujeres menores a 20
	el nombre de la mujer con mejor nota
	el nombre de el hombre con mejor nota
	promedio de nota de los hombres y mujeres
	porcentaje de aprobados y desaprobados
	el sexo y el nombre de la primer persona que se saque diez
	*/
	
	
	promedioNota = sumadorNota/contador;
	document.write("El promedio de las notas ingresadas es: " + promedioNota + "<br>");
	document.write("La cantidad de mujeres aprobadas son " + contadorMujeresAprobadas + "<br>");
	document.write("La cantidad de hombres mayores a 25 años aprobados son " + contadorHombresAprobadosVeinticinco + "<br>");
	document.write("La cantidad de mujeres menores a 20 años son " + contadorMujeresMenoresVeinte + "<br>");
	document.write("La mujer con mejor nota se llama " + nombreMejorNotaMujer + "<br>");
	document.write("El hombre con mejor nota se llama " + nombreMejorNotaHombre + "<br>");
	document.write("El promedio de nota de los hombres es " + sumadorNotaHombre / contadorHombres + "<br>");
	document.write("El promedio de nota de las mujeres es " + sumadorNotaMujer / contadorMujeres + "<br>");
	document.write("El porcentaje de aprobados es igual al " + (contadorAprobados * 100 / contador ) + "%<br>");
	document.write("El porcentaje de desaprobados es igual al " + ((contador - contadorAprobados) * 100 / contador ) + "%<br>");
	document.write("El nombre del primer diez es " + primerDiez + " y es " + sexoPrimerDiez);
	
}//FIN DE LA FUNCIÓN