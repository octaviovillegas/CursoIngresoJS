/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo=document.getElementById('sueldo').value;
var sueldoNumero=parseInt(sueldo);//LEER!!!-->DEBO HACER UNA VARIABLE MAS PARA PASAR EL ELEMENTO TOMADO POR ID A ENTERO POR MEDIO DE LA FUNCION PARSE(I)NT!!!!
var resultado=((sueldoNumero*10)/100)+sueldoNumero;
document.getElementById('resultado').value="Su aumento: "+resultado;
}
