function mostrar()
{
//tomo la edad  
//var laHora = document.getElementById('hora').value;

//alert (laHora);
	

	/*switch (laHora) 
	{
		case (laHora):
		if (laHora && 6 > 11) 
		{
			alert("Es de mañana");
		} 
		break;
	}*/

		/*switch (laHora) 
	{
		case "7" :
		case "8" :
		case "9" :
		case "" :
		alert("Es de mañana");
		break;
	}*/

/* cada habitaciòn de un hotel tiene un precio hay promociones seg el tipo de pago si es con tarjeta visa un 10% paypal
15% mercador pago 10% efectivo 20% otro mediio 5&
paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento
si pagas en efectivo tenes varias opciones el paquete "soloDesayuno" te suma un 10% al descuento si el paquete es "todoIncluido" te suma un 15% y para el resto de los paquetes non tiene descuento adicional
*/
/*var visa;
var paypal;
var mercadoPago;
var efectivo;
var otro;*/
var habitacionP;
var formaPago;
var descuento;
var paquete;

//var descuentoAdicional;
//var paqueteS;

habitacionP = parseFloat(habitacionP);

descuento =  habitacionP * formaPago;
//descuentoAdicional = descuento - (habitacionP * descuentoAdicional);
habitacionP = prompt("Ingrese precio habitaciòn");
formaPago = prompt("Ingrese forma de pago");
paquete = prompt=("Favor de ingresar su paquete");



formaPago = "visa" , "paypal", "mercadoPago","efectivo","otro";
paquete = "todoIncluido", "soloDesayuno";

switch (formaPago) 
{
case "visa":
case "mercadoPago":
	descuento = habitacionP * 0.9;
	break;
case "paypal":
	descuento = habitacionP * 0.85;
		switch ("paquete")
		{	
			case "todoIncluido":
				descuento = habitacionP * 0.75;
				break;
		}
		break;
case "efectivo":
	descuento = habitacionP * 0.8;
		switch ("paquete") 
		{ 
			case "todoIncluido":
				descuento = habitacionP * 0.65; 
				break;
		}
	break;
case "otro":
	descuento = habitacionP * 0.95;
	break;
	case "paquete":
		descuento = habitacionP 
		break;
case "todoIncluido" && "efectivo";
	descuento = habitacionP * 0.65;
	break;
}

alert("Su precio es: " + descuento); 








































}//FIN DE LA FUNCIÓN