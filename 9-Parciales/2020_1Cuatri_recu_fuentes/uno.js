/*Realizar el algoritmo que permita ingresar los datos de una compra de productos 
alimenticios, hasta que el cliente quiera. Por cada item  de la compra  se ingresa:<br>
Tipo: (validar "yerba", "harina", "fideo").<br>
marca,
Cantidad de paquetes. (más de cero).<br>
Precio por paquete (más de cero).<br>

a)	El importe total a pagar bruto, sin descuento.<br>
b)	El importe total a pagar con descuento (solo si corresponde)<br>
Si se compra total tiene  más de 5 paquetes se obtiene un 25% de descuento sobre el total a <br>pagar.<br>
Si se compra más de 10 paquetes en total se obtiene un 30% de descuento sobre el total a pagar.<br>
Se pide mostrar por pantalla:<br>


c)	Informar el tipo con más cantidad de paquetes.<br>
d)	El tipo , marca y cantidad  de la item mas caro de la compra. (sobre el Bruto sin descuento)<br>
*/
function mostrar() {
	let tipo;
	let marca;
	let cantidad;
	let precio;
	let importe;
	let importeBruto = 0;
	let acumCantidad = 0;
	let importeDescuento = 0;
	let contadorYerba = 0;
	let contadorHarina = 0;
	let contadorFideo = 0;
	let tipoMasCant;
	let descuento;
	let cantMaxTipo;
	let marcaMax;
	let tipoMax;
	let cantidadMax;
	let precioMax;
	let flag = 1;

	do {
		tipo = prompt("Ingrese el producto a cargar (Yerba/Harina/Fideo)").toLowerCase();
		while (tipo != "yerba" && tipo != "harina" && tipo != "fideo") {
			tipo = prompt("Error. Producto invalido, por favor ingrese nuevamente un producto valido. (Yerba/Harina/Fideo)");
		}
		marca = prompt("Ingrese la marca del producto cargado");
		while (marca.length == 0) {
			marca = prompt("Error. Ingrese la marca del producto deseado");

		}
		cantidad = parseInt(prompt("Ingrese la cantidad de paquetes del producto "));
		while (cantidad < 1) {
			cantidad = parseInt(prompt("Cantidad invalida, por favor ingrese nuevamente la cantidad"));
		}
		precio = parseInt(prompt("Ingrese el precio del producto"));
		while (precio < 1) {
			precio = parseInt(prompt("Error, ingrese un precio valido"));
		}
		importe = precio*cantidad
		importeBruto = importeBruto + importe;
		acumCantidad = acumCantidad + cantidad;
		if (flag == 1 || precioMax < precio) {
			precioMax = precio
			marcaMax = marca
			cantidadMax = cantidad
			tipoMax = tipo
			flag = 0
		}
		switch (tipo) {
			case "yerba":
				contadorYerba += cantidad;
				break;
			case "fideo":
				contadorFideo += cantidad;
				break;
			case "harina":
				contadorHarina += cantidad;

		}
		


		respuesta = prompt("Desea cargar otro producto? (Si/No)");
	} while (respuesta == "si");

	if (acumCantidad > 10) {
		importeDescuento = importeBruto * 0.75;


	} else if (acumCantidad > 5) {
		importeDescuento = importeBruto * 0.70;

	}
	if (contadorFideo > contadorHarina && contadorFideo > contadorYerba) {
		tipoMasCant = "fideo";
		cantMaxTipo = contadorFideo;
	} else if (contadorHarina > contadorFideo && contadorHarina > contadorYerba) {
		tipoMasCant = "harina";
		cantMaxTipo = contadorHarina;
	} else {
		tipoMasCant = "yerba";
		cantMaxTipo = contadorYerba;
	}




	document.write("a) El importe total a pagar sin descuentos es " + importeBruto + "<br>");
	if (importeDescuento > 0) {
		document.write("b) El importe a pagar con decuento si corresponde es " + importeDescuento + "<br>");
	}
	document.write("c)El tipo con mas cantidad es " + tipoMasCant + " con un total de " + cantMaxTipo + "<br>")
	document.write("d) La compra mas cara fue la de " + tipoMax + " con una cantidad de " + cantidadMax + " de la marca " + marcaMax + " y un precio total de " + precioMax + "por unidad <br>")


}
