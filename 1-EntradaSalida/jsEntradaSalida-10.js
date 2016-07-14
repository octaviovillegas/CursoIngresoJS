/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var importe=document.getElementById('importe').value;
var importeNumeroEntero=parseInt(importe);
var resultado=importeNumeroEntero-importeNumeroEntero*0.25;
document.getElementById('resultado').value=+resultado;
}