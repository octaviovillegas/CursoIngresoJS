/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	
	/*var marcaLamparas;
	var cantidadLamparas;
	var descuentoLamparas;
	var precio;
	var importeFinal;
	var final;

	marcaLamparas = document.getElementById('Marca').value;
	cantidadLamparas = document.getElementById('Cantidad').value;
	descuentoLamparas = document.getElementById('precioDescuento').value;


	precio = 35 * cantidadLamparas;



	if (cantidadLamparas > 5) 
	{
		descuentoLamparas = precio * 0.5;
	}
	

	
	if (cantidadLamparas == 5 && marcaLamparas == "ArgentinaLuz") 
	{
		descuentoLamparas = precio * 0.6;	
	}
	else if (cantidadLamparas == 5 && (marcaLamparas != "ArgentinaLuz"))
	{
		descuentoLamparas = precio * 0.7;
	}
	


	if  (cantidadLamparas == 4 && marcaLamparas == "ArgentinaLuz") 
	{
		descuentoLamparas = precio * 0.75;	
	}
	else if (cantidadLamparas == 4 && marcaLamparas != "ArgentinaLuz") 
	{
		descuentoLamparas = precio * 0.8;
	}



	if (cantidadLamparas == 3 && marcaLamparas == "ArgentinaLuz") 
	{
		descuentoLamparas = precio * 0.85;
	}
	else if (cantidadLamparas == 3 && marcaLamparas == "FelipeLamparas") 
	{
		descuentoLamparas = precio * 0.9;
	}
	else if (cantidadLamparas == 3 && marcaLamparas != "ArgentinaLuz" != "FelipeLamparas") 
	{
		descuentoLamparas = precio * 0.95;
	}



	if (cantidadLamparas < 3) 
	{
		descuentoLamparas = precio;
	}



	if (descuentoLamparas > 120) 
	{
		importeFinal = descuentoLamparas / 10;
		final = importeFinal + descuentoLamparas; 
		alert("IIBB usted pagó: $" + final + " siendo: $" + importeFinal + " impuesto que pagó.");
	}
	else
	{
		descuentoLamparas = alert("Precio a pagar: $" + descuentoLamparas);
	}*/









































	/*var cantidadLamparas;
	var marcaLamparas;
	var precioLampara;
	var descuentoLamparas;

	cantidadLamparas = document.getElementById('Cantidad');
	descuentoLamparas = document.getElementById('precioDescuento');
	marcaLamparas = document.getElementById('Marca');

	cantidadLamparas = parseFloat(cantidadLamparas);
	descuentoLamparas = parseFloat(descuentoLamparas);
	precioLampara = parseFloat(precioLampara);

	precioLampara = 35 * cantidadLamparas;

	if (cantidadLamparas > 5) 
	{
		descuentoLamparas = precioLampara * 0.5;
	}*/

	/*if (cantidadLamparas == 5 || marcaLamparas == ArgentinaLuz) 
	{
		descuentoLamparas = precioLampara * 0.6;
	}*/
	
	/*else if (cantidadLamparas == 5 || ! marcaLamparas == ArgentinaLuz) 
	{
		descuentoLamparas = precioLampara * 0.7;
	}*/

	/*descuentoLamparas = alert("$" + descuentoLamparas);*/


var valUno;
var valDos;
var valTres;
var valCuatro;
var resultado;
var final;
//var mensaje;

valUno = pareInt(valUno);
valDos = pareInt(valDos);
valTres =pareInt(valTres);
valCuatro = pareInt(valCuatro);


valUno = prompt("V1");
valDos =  prompt("V2");
valTres = prompt("V3");
valCuatro  = prompt("V4");

resultado = valUno + valDos + valTres + valCuatro;

if (valUno == valDos == valTres == valCuatro) 
{
	alert(valUno + valDos + valTres + valCuatro);

}
else if (resultado > 100) 
{
	final = resultado * 0.5 
	alert(resultado);
}
else if (resultado > 50) 
{
	resultado = 
	alert(resultado);  
}
else if (resultado < 50) 
{
	resultado =
	alert(resultado);
}
else if (valUno >= valDos) && (valUno >= valTres)  && (valUno >= valCuatro) 

	alert(valUno);
} 
else if (valDos >= valUno) && (valDos >= valTres) && (valDos >= valCuatro) 
{
 	alert(valDos);
}
else if (valTres >= valDos) && (valTres >= valUno) && (valTres >= valCuatro ) 
{
 	alert(valTres);
}
else if () 
{
	alert(valCuatro);
}
























































	/*var marcaLamparas;
	var cantidadLamparas;
	var descuentoLamparas;
	var precio;
	
	marcaLamparas = document.getElementById('Marca').value;
	cantidadLamparas = document.getElementById('Cantidad').value;
	descuentoLamparas = document.getElementById('precioDescuento').value;
	
	marcaLamparas = parseFloat(marcaLamparas);
	cantidadLamparas = parseFloat(cantidadLamparas);
	descuentoLamparas = parseFloat(descuentoLamparas);

	precio = 35 * cantidadLamparas;

	if (cantidadLamparas > 5) 
	{
		descuentoLamparas = precio * 0.5;
	}
	
	if (cantidadLamparas == 5 || marcaLamparas == "ArgentinaLuz") 
	{
		descuentoLamparas = precio * 0.6;	
	}
	
	else if (marcaLamparas == "FelipeLamparas" /== JeLuz == HazIluminacion == Osram) 
	{
		descuentoLamparas = precio * 0.7;	
	}
	
	else if (cantidadLamparas > 3 || marcaLamparas == ArgentinaLuz == FelipeLamparas) 
	{
		descuentoLamparas = precio * 0.75;	
	}

	if	(cantidadLamparas > 3 || marcaLamparas == JeLuz == HazIluminacion == Osram)
	{
		descuentoLamparas = precio * 0.8;
	}
	
	else if (cantidadLamparas > 2) 
	{
		descuentoLamparas = precio * 0.85;	
	}
	/*else if (descuentoLamparas > 120) 
	{
		impuesto = marcaLamparas / 10;
		descuentoLamparas = impuesto + marcaLamparas;
	}
	descuentoLamparas = alert("IIBB usted pagó $" + descuentoLamparas + " , siendo " + impuesto"" + " el impuesto que pagó.");*/

}
