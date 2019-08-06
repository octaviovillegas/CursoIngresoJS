function mostrar()
{

var num;
var maximo;
var minimo;
var flag = 0;


do{
	num = parseInt(prompt("INGRESE NUMERO"));
	while(isNaN(num)){
		num = parseInt(prompt("NO ES NUMERO , INGRESE NUMERO"));
	}

	if(num > maximo || flag == 0 ){
		maximo = num + maximo;}

	if(num < minimo || flag == 0){
		minimo = num + minimo;
	
	}

	flag = 1;

}while(confirm("DESEA INGRESAR OTRO NUMERO?"));

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN