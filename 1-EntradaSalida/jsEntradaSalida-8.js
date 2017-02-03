/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	        var a;
            var b;
            var resultado;
                a=document.getElementById("numeroDividendo").value;
                a=parseInt (a);
                b=document.getElementById("numeroDivisor").value;
                b=parseInt (b);
                resultado= a % b;
                alert(resultado)

}
