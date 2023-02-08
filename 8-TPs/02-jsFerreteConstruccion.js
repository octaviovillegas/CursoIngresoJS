// Angel Farina.

function Rectangulo () 
{
    var largo;
    var ancho;
    var res;
    var mensaje;

    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    res=parseInt(largo*2)+parseInt(ancho*2)*3/3;
    mensaje=`Se debe comprar ${res} cantidad de alambre`

    alert(mensaje);
}
function Circulo () 
{
	var radio;
    var res;
    var mensaje;

    radio=txtIdRadio.value;
    res=(2*3.14*parseInt(radio))*3/3;
    mensaje=`Se debe comprar ${res} cantidad de alambre`;

    alert(mensaje);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    var mensaje;

    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    area=parseInt(largo)*parseInt(ancho);
    cemento=area*2
    cal=area*3
    mensaje=`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`;

    alert(mensaje);
}