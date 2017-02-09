/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var resultado;
    var a;
    var b;
   
     a=document.getElementById("Largo").value;
	 a=parseInt(a);
   
     b=document.getElementById("Ancho").value;
     b=parseInt(b);
    
     resultado= ((a*2) + (b*2))*3

        alert("Se necesitan "+resultado +" MTR de alambre")
}
function Circulo () 
{
	var resultado;
    var a;
   
     a=document.getElementById("Radio").value;
	 a=parseInt(a);

     resultado= Math.floor(Math.PI * (a*2))*3

     alert("Se necesitan "+resultado +" MTR de alambre")

}
function Materiales () 
{
	var resultado1;
    var resultado2;
    var a;
    var b;

         a=document.getElementById("Largo").value;
	     a=parseInt(a);
   
         b=document.getElementById("Ancho").value;
         b=parseInt(b);

         resultado1= a*b*2
         resultado2= a*b*3
         alert("Se necesitan " +resultado1 + " bolsas de cemento y "+resultado2 +" bolsas de cal")


}