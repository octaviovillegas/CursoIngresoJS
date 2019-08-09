function mostrar()
{
//tomo la edad
estadocivil = document.getElementById('estadoCivil').value;
edad = parseInt(document.getElementById('edad').value);

if ( edad > 18 && estadocivil == 'Soltero'){
	alert('es soltero y no es menor');
	
}



}//FIN DE LA FUNCIÓN
