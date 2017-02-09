/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var resultado;
    var a;
    var b;
    var c;
    
     a =document.getElementById("PrecioUno").value;
	 a=parseInt(a);
   
     b =document.getElementById("PrecioDos").value;
     b=parseInt(b);
    
     c=document.getElementById("PrecioTres").value;
     c=parseInt(c);
    
    resultado= a + b + c;

    alert ("El total es " +resultado);
}
function Promedio () 
{
	 var resultado;
     var a;
     var b;
     var c;
     a =document.getElementById("PrecioUno").value;
	 a=parseInt(a);
   
     b =document.getElementById("PrecioDos").value;
     b=parseInt(b);
    
     c=document.getElementById("PrecioTres").value;
     c=parseInt(c);
    
    resultado= (a + b + c)/3;

    alert ("El total es " +resultado);
}
function PrecioFinal () 
{
	 var resultado;
     var a;
     var b;
     var c;
     a =document.getElementById("PrecioUno").value;
	 a=parseInt(a);
   
     b =document.getElementById("PrecioDos").value;
     b=parseInt(b);
    
     c=document.getElementById("PrecioTres").value;
     c=parseInt(c);
    
    resultado= (a + b + c)*1.21;

    alert ("El total es " +resultado)
}