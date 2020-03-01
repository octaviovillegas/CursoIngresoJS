function mostrar()
{
var precio;
var descuento;

precio = parseInt(precio);
descuento = parseInt(descuento);

precio = prompt('indique precio');

descuento = prompt('indique descuento');

descuentoecho = precio * descuento / 100;

document.getElementById('elPrecioFinal').value = precio - descuentoecho;



}
