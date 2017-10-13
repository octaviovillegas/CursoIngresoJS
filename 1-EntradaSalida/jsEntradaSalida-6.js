/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var sumaTotal = x + y;
    
    alert("la suma es " + sumaTotal);

}

