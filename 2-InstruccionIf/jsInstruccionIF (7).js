function Mostrar()
{
//tomo la edad  

	var edad;
    var ecivil;

    var edad=document.getElementById("edad").value;
    var ecivil=document.getElementById("estadoCivil").value;

if (ecivil !="Soltero" && edad <18)
{
    alert ("Usted es muy joven para NO ser soltero")
}
}//FIN DE LA FUNCIÓN