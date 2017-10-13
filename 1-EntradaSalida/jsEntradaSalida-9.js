/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var num1;

function MostrarAumento()
{
    num1 = document.getElementById("sueldo").value;
    var sueldo = parseInt(num1);
    var aumento = (sueldo * 10)/100;
    var nuevoSueldo = sueldo + aumento;
    
    document.getElementById("resultado").value=nuevoSueldo;

	
}
