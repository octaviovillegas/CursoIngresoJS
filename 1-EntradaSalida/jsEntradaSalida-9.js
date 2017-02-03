/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
        var sueldo,resultado;
       
                sueldo=document.getElementById("sueldo").value;
                sueldo=parseInt(sueldo);
                 resultado=sueldo * 1.1
                 document.getElementById("resultado").value=resultado;

}