/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var grados;
    var temperatura;

    grados=document.getElementById("Temperatura").value;
    grados=parseInt(grados);

    temperatura=((grados - 32)*(5/9));
        temperatura=parseInt(temperatura);
        
        alert(grados + " grados Fahrenheit son " +temperatura +"grados Centigrados")
}

function CentigradosFahrenheit () 
{
	var grados;
    var temperatura;

    grados=document.getElementById("Temperatura").value;
    grados=parseInt(grados);

    temperatura=(grados*1.8 + 32)
     temperatura=parseInt(temperatura)
        
        alert(grados +" grados Centigrados son "+temperatura +" grados Fahrenheit")
}
