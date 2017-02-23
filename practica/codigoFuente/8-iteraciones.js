//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var edad;
	var sexo;
	var banderaUno=true;
	var banderaDos=true;
	var banderaTres=true;
	var pregunta=true;
	var acumAños=0;
	var masViejo;
	var mascViejo;
	var femJoven;
	var edadPar=0;
	var promAños;
	var i=0;

	while(pregunta==true)
	{
		i++;

		edad=parseInt(prompt("ingrese una edad entre 18 y 65 años"));
		while(edad<18 || edad>65)
		{
			edad=prompt("ingrese una edad entre 18 y 65 años");
		}

		sexo=prompt("ingrese el sexo. f/m");
		
		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("ingrese el sexo. f/m");
		}

		if(banderaUno==true && sexo=="m")
		{
			banderaUno=false;
			mascViejo=edad;
		}
		else if(banderaDos==true && sexo=="f")
		{
			banderaDos=false;
			femJoven=edad;
		}
		if(banderaTres==true)
		{
			banderaTres=false;
			masViejo=edad;

		}

		if(edad%2==0)
		{
			edadPar++;
		}

		if(sexo=="m")
		{
			acumAños+=edad;
		}

		if(edad>masViejo)
		{
			masViejo=edad;
		}

		if (edad>mascViejo && sexo=="m")
		{
			mascViejo=edad;
		}

		if(edad<femJoven && sexo=="f")
		{
			femJoven=edad;
		}

		pregunta=confirm("quiere ingresar a otra persona?");


	}

	promAños=acumAños/i;

	document.write("La cantidad de numeros pares es "+edadPar+"<br>");
	document.write("El promedio de edad masculino es  "+promAños+"<br>");
	document.write("La edad de la persona mas vieja es "+masViejo+"<br>");
	document.write("La edad de la persona del sexo masculino mas vieja es "+mascViejo+"<br>");
	document.write("La edad de la persona de sexo femenino mas joven es "+femJoven+"<br>");

}

