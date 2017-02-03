/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	
    var importe,resultado;
       
                importe=document.getElementById("importe").value;
                importe=parseInt(importe);
                 resultado=importe - ((importe * 25)/100)
                 document.getElementById("resultado").value=resultado;
}
