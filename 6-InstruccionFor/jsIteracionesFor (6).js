function Mostrar()
{
	var num;
	var par=0;
	num= parseInt(prompt("ingrese un numero"));

	for (var i =1; i <= num; i++) {
		if(i % 2 == 0){
			console.log(i);
			par++;
		}
	}

console.log("hay "+par+" numeros par.");





}//FIN DE LA FUNCIÓN