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
 	var cantidad = parseInt(document.getElementById("Cantidad").value);
	var marca = document.getElementById("Marca").value;
	var resultado = document.getElementById("precioDescuento");
	// DETERMINA LA CANTIDAD DE LAMPARAS BAJO CONSUMO
	switch(cantidad){
		case 6:
			resultado.value = 35 * cantidad * 0.5;
			break;
		case 5:
			//DISCRIMINA POR MARCA PARA HACER DESCUENTOS
			if(marca == "ArgentinaLuz"){
				resultado.value = 35 * cantidad * 0.6;
			}else{
				resultado.value = 35 * cantidad * 0.7;
			}
			break;
		case 4:
			//DISCRIMINA POR MARCA PARA HACER DESCUENTOS
			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
				resultado.value = 35 * cantidad * 0.75;
			}else{
				resultado.value = 35 * cantidad * 0.8;
			}
			break;
		case 3:
			//DISCRIMINA POR MARCA PARA HACER DESCUENTOS
			if(marca == "ArgentinaLuz"){
				resultado.value = 35 * cantidad * 0.85;
			}else if(marca == "FelipeLamparas"){
				resultado.value = 35 * cantidad * 0.9;
			}else{
				resultado.value = 35 * cantidad * 0.95;
			}
			break;
	}
	//SUMA LOS INGRESOS BRUTOS SEGUN CORRESPONDA Y LE DA UN TOQUE FINAL
	if(parseFloat(resultado.value) > 120){
		var iibb = parseFloat(resultado.value) * 0.1;
		resultado.value = parseFloat(resultado.value) + iibb;
		resultado.value = "$" + resultado.value;
		alert("Usted pagó $" + iibb + " de Ingresos Brutos");
	}else{
		resultado.value = "$" + resultado.value;
	}
}
