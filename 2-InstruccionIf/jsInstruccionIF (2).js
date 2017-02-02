function Mostrar()
{
//tomo la edad  
var años;
años = document.getElementById("edad").value;

if (años >= 18) {
	confirm(true);
	alert("Es mayor de edad");
}
else{

	confirm(false);
	alert("Es menor de edad");
}


}//FIN DE LA FUNCIÓN