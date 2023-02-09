/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

  let precio1;
  let precio2;
  let precio3;
  let sumatoria;
  let promedio;
  let porcentajeIva;
  
  


function obtenerDatos()
{
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
   
}
function Sumar () 
{ 

  obtenerDatos();
  
  sumatoria = precio1 + precio2 + precio3;
  alert ("el resultado de la suma es " + sumatoria); 


	
}
function Promedio () 

{ 
    
    obtenerDatos();

    promedio = (precio1 + precio2 + precio3) / 3;

    alert ("el resultado del promedio es " + promedio);

}
function PrecioFinal () 
{
    obtenerDatos();
    
    porcentajeIva = (precio1 + precio2 + precio3) * 1.21;

alert ("el precio final es " + porcentajeIva);
	
}