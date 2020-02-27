/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   

   var sueldo;
   var sueldoConAumento;
   var aumento;


    sueldo = document.getElementById('sueldo').value;
    //sueldo = document.getElementById('sueldoConAumento').value; 
    sueldo = parseFloat(sueldo);
    	
    		aumento = sueldo * 0.1;
    	
    			sueldoConAumento = sueldo + aumento;
    	
    				document.getElementById('resultado').value = sueldoConAumento;


      



        //sueldoConAumento = sueldo * 1.1;


        //alert("Su aumento es: " + sueldoConAumento)


        //porcentaje = sueldo * 20 / 100;
        //sueldoConAumento = sueldo + porcentaje;
           






       /*salario = sueldo.value;
       aumento = mostrarAumento.value;
       numeroDecimal = 1.1;

          salario = parseInt.value;
          sueldoaPagar = parseInt.value;


             aumento = salario * numeroDecimal;


                alert("RESULTADO: " + aumento);*/






/*<h1>Ingrese Dos números</h1>
				<input type="text"  placeholder="Ingrese sueldo" id="sueldo">

				<input type="text" readonly  placeholder="Resultado" id="resultado">
		
			
			<a  class="MiBotonUTNnav"  onclick="mostrarAumento()" >Mostrar aumento</a>
			
	</form>				
   
  </div>

  <div class="col-3 col-s-12">
    <div class="aside animated bounceInUp">
  <h2>Enunciado:</h2>
			
				<h3>
					Debemos lograr tomar el importe por ID ,
					</br>transformarlo a entero (parseInt), luego
					</br>mostrar el importe con un aumento del 10 %. en el cuadro de texto "RESULTADO"
*/	
}
