function mostrar()
{

	var suma=0 ;
	var acumulador=0 ;
	var num ;


for ( acumulador = 0 ; acumulador < 5 ; acumulador = acumulador + 1){

	num = parseInt(prompt('INGRESE NUMERO'));
	suma = num + suma;


	}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN
