/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
var num1;
function MostrarAumento()
{
	num1 = document.getElementById("importe").value;
    var importe = parseInt(num1);
    var descuento = importe * 0.25;
    var nuevoImporte = importe - descuento;
    
    document.getElementById("resultado").value=nuevoImporte;
}
