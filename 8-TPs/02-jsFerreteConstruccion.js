/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let cantidad;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cantidad = (largo * 2 + ancho * 2) * 3

    alert("Se necesita " + cantidad + " de alambre")



}
function Circulo() {

    let radio;
    let circunferencia;
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    circunferencia = (radio * 3.14 * 2) * 3
    alert("Se necestian " + circunferencia + " de alambre")


}
function Materiales() {
    let largo;
    let ancho;
    let cal;
    let cemento;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cal = (largo * ancho) * 3
    cemento = (largo * ancho) * 2
    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolas de cal")



}