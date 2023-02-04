// Angel Farina.

function Rectangulo () 
{
    var largo;
    var ancho;
    var res;

    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    res=parseInt(largo*2)+parseInt(ancho*2)*3/3;

    alert(`Se debe comprar ${res} cantidad de alambre`);
}
function Circulo () 
{
	var radio;
    var res;

    radio=txtIdRadio.value;
    res=(2*3.14*parseInt(radio))*3/3;

    alert(`Se debe comprar ${res} cantidad de alambre`);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo=txtIdLargo.value;
    ancho=txtIdAncho.value;
    area=parseInt(largo)*parseInt(ancho);
    cemento=area*2
    cal=area*3
    
    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}