// Angel Farina.

function Sumar () 
{
    var p1;
	var p2;
	var p3;
    var res;
    var mensaje;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);
    mensaje="El resultado es " + res;

    alert(mensaje);	
}
function Promedio () 
{
    var p1;
	var p2;
	var p3;
    var res;
    var res2;
    var mensaje;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);
    res2=res/3;
    mensaje="El resultado es " + res2;

    alert(mensaje);
}
function PrecioFinal () 
{
    var p1;
	var p2;
	var p3;
    var res;
    var res2;
    var mensaje;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);
    res2=(res*21)/100;
    mensaje="El resultado es " + res2;

    alert(mensaje);
}