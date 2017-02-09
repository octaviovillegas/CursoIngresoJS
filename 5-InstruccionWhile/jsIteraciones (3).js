function Mostrar()
{
var contraseña;
while(contraseña!="utn750")
{
	contraseña=prompt("La Contraseña es:");
	switch (contraseña)
	{
		case "utn750":
		{
			console.log("Contraseña correcta");
			break;
		}
		default:
		{
			console.log("Contraseña incorrecta");
			break;
		}
	}
	console.log(contraseña)
}
}//FiN DE LA FUNCIÓN