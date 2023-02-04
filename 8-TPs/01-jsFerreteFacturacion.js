// Angel Farina.

function Sumar () 
{
    var p1;
	var p2;
	var p3;
    var res;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);

    alert("El resultado es " + res);	
}
function Promedio () 
{
    var p1;
	var p2;
	var p3;
    var res;
    var res2;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);
    res2=res/3;

    alert("El resultado es " + res2);
}
function PrecioFinal () 
{
    var p1;
	var p2;
	var p3;
    var res;
    var res2;

    p1=txtIdPrecioUno.value;
    p2=txtIdPrecioDos.value;
    p3=txtIdPrecioTres.value;
    res=parseInt(p1)+parseInt(p2)+parseInt(p3);
    res2=(res*21)/100;

    alert("El resultado es " + res2);
}