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
 	var precio=35;
 	var numLamp;
 	var marca;
 	var valorFinal;
 	var impuesto

 	numLamp= document.getElementById('Cantidad').value;
 	marca= document.getElementById('Marca').value;

 	if(numLamp>=6)
 	{
 		valorFinal= (precio*numLamp)*0.5;
 		console.log(valorFinal);
 		if(valorFinal>120)
 		{
 		    impuesto=valorFinal*0.1;
 		    valorFinal=valorFinal*1.1;
 		    console.log("Usted pago "+valorFinal+" de IIBB. siendo "+impuesto+" el impuesto que se pagó.");

 		}

 	}
 	else if(numLamp<=2)
 	{
 		valorFinal= (precio*numLamp);
 		console.log(valorFinal);

 	}
 	else if(numLamp==5)
 	{
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			{
 				valorFinal=(precio*numLamp)*0.6;
 				console.log(valorFinal);
 				break;
 			}
 			default:
 			valorFinal=(precio*numLamp)*0.7;
 			console.log(valorFinal);
 		}
 		if(valorFinal>120)
 		{
 		    impuesto=valorFinal*0.1;
 		    valorFinal=valorFinal*1.1;
 		    console.log("Usted pago "+valorFinal+" de IIBB. siendo "+impuesto+" el impuesto que se pagó.");

 		}
 		
 	}
 	else if(numLamp==4)
 	{
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			{
 				valorFinal=(precio*numLamp)*0.75;
 				console.log(valorFinal);
 				break;

 			}
 			case "FelipeLamparas":
 			{
 				valorFinal=(precio*numLamp)*0.75;
 				console.log(valorFinal);
 				break;

 			}
 			default:
 			    valorFinal=(precio*numLamp)*0.8;
 				console.log(valorFinal);
 	}
 	    
    }
 	else if(numLamp==3)
 	{
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			{
 				valorFinal=(precio*numLamp)*0.85;
 				console.log(valorFinal);
 				break;

 			}
 			case "FelipeLamparas":
 			{
 				valorFinal=(precio*numLamp)*0.9;
 				console.log(valorFinal);
 				break;

 			}
 			default:
 			valorFinal=(precio*numLamp)*0.95;
 				console.log(valorFinal);
 			
 		}
 		
 	}
 	
}
