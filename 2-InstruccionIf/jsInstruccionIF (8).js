function Mostrar()
{
//tomo la edad  
var años
var civil
años=document.getElementById('edad').value;
civil=document.getElementById("estadoCivil").value;
if (años>=18 && civil!="soltero") 
{
	alert("Es soltero y no es menor")
}
	


}//FIN DE LA FUNCIÓN