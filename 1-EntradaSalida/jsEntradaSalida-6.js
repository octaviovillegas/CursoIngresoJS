/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
        var a;
        var b;
        var resultado;
                a=document.getElementById("numeroUno").value;
                a=parseInt (a);
                b=document.getElementById("numeroDos").value;
                b=parseInt (b);
                resultado= a + b;
                alert("El resultado es: " +resultado)


}

