// Angel Farina.

function FahrenheitCentigrados () 
{
	var temp;
    var conv;
    var mensaje;

    temp=parseInt(txtIdTemperatura.value);
    conv=(temp-32)*5/9;
    mensaje=`${temp} Fahrenheit son ${conv.toFixed(1)} centígrados`;

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temp;
    var conv;
    var mensaje;

    temp=parseInt(txtIdTemperatura.value);
    conv=(temp*9/5)+32;
    mensaje=`${temp} centígrados son ${conv.toFixed(1)} Fahrenheit`;

    alert(mensaje);
}