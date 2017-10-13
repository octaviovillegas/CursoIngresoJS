function Mostrar()
{

	var contador=0;
	// declarar variables
	var min;
	var max;
	var numero;
	var respuesta=true;

	while(respuesta==true)
	{ 
	  contador++;
	  numero=parseInt(prompt("ingrese un numero."));
	  respuesta=confirm("quiere ingresar otro numero? ")
  
      if(contador == 1){
      	min=numero;
      	max=numero;
      }
      if(contador>1 && max<numero){
      	max=numero;
      }
      if(contador>1 && min>numero){
      	min=numero;
      }

	}
	console.log("El numero maximo es "+max+" y el minimo es "+min);
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN