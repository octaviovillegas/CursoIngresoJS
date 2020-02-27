function mostrar()
{
	var precioProducto;
	var descuentoUsuario;
	var descuentoTotal;
	var descuento;

	precioProducto = prompt("Coloque el precio del producto: ");

	descuentoUsuario = prompt("Coloque su descuento: ");

	descuento = (precioProducto * descuentoUsuario) / 100;

	descuentoTotal = precioProducto - descuento;

	alert("El precio del producto es de $" + descuentoTotal);
}
