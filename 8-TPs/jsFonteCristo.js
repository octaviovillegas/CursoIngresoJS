/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var ingreso;
var contadorDivisores;
var contadorPares;
var contadorImpares;
var contadorDivisible;
var contadorPrimos;
var primo;

function ComenzarIngreso () 
{
	ingreso = document.getElementById('numero').value;
	ingreso = parseInt(ingreso);
	if(ingreso<0){
		alert("ingrese un numero positivo");
		document.getElementById('numero').value = null;
		event.preventDefault();
		return false;
	}else
	{
		return true;
	}
}

function NumerosPares(){
	contadorPares = 0;
	contadorImpares = 0;
	//alert(event.currentTarget.innerHTML.charAt(0));
	for(var i = 0; i<=ingreso; i++)
	{
		if(i % 2 == 0)
		{
			contadorPares++;
		}else
		{
			contadorImpares++
		}
	}
	if(event.currentTarget.innerHTML.charAt(0) == 'a')
	{
		alert("La cantidad de numeros pares desde el numero ingresado a cero son: " + contadorPares);
	}
	else if(event.currentTarget.innerHTML.charAt(0) == 'b')
	{
		alert("La cantidad de numeros impares desde el numero ingresado a cero son: " + contadorImpares);
	}
}

function NumerosDivisibles(){
	contadorDivisible = 0;
	for(var i = 1; i <= 100; i++)
	{
		if(i % ingreso == 0)
		{
			contadorDivisible++;
		}
	}
	alert("la cantidad de numeros divisibles por el numero ingresado entre el 1 y el 100 son: " + contadorDivisible);
}

function VerificarPrimo() 
{
	contadorDivisores = 0;
 	for(var i = 1; i <= ingreso; i++)
 	{
 		console.log("el modulo de " + numero.value + " por " + i + " es igual a: " + (ingreso % i));
 		if(ingreso % i == 0)
 		{
 			contadorDivisores ++;
 		}
 	}
 	if(contadorDivisores > 2 || ingreso == 0 || ingreso == 1)
 	{
 		alert("El numero ingresado no es primo");
 	}
 	else if(contadorDivisores > 1)
 	{
 		alert("El numero ingresado es primo");
 	}
}

function NumerosPrimos(){
	var h = 0;
	contadorPrimos = 0;
	primo = new Array(ingreso);
	for(var i = 0; i <= ingreso; ingreso--)
	{
		contadorDivisores = 0;
		for(var j = 0; j <= ingreso; j++)
		{
			if(ingreso % j == 0)
			{
				contadorDivisores ++;
			}
		}
		if(contadorDivisores == 2)
		{
			contadorPrimos++;
			primo[h] = ingreso;
			h++
		}
	}
	alert("La cantidad de numeros primos es: " + contadorPrimos);
	for(var i = 0; i < primo.length; i++)
	{
		console.log(primo[i]);
	}
}