var secuenciaSecretaDeColores;
var secuenciaIngresada=new Array("vacio","vacio","vacio","vacio");
var contadorDeIntentos=0;
function Comenzar()
{
	 //en esta funcion deberiamos generar una secuencia random 
	 //de los cuatro colores sin repetir colores
	 secuenciaSecretaDeColores=["Amarillo","Rojo","Azul","Verde"];
	 console.info("colores cargados",secuenciaSecretaDeColores);
}

function Responder(parametroColor) 
{
	var i;
	for(i=0;i<4;i++)
	{
		if(secuenciaIngresada[i]=="vacio")
		{
			secuenciaIngresada[i]=parametroColor;
			console.info("colores ingresados",secuenciaIngresada);
			break;
		}
	}

	
}

function Verificar()
{
	var mensaje;
	var aciertosConseguidos=0;
	contadorDeIntentos++;

	for(i=0;i<4;i++)
	{
		if(secuenciaIngresada[i]==secuenciaSecretaDeColores[i])
		{
			aciertosConseguidos++;
		}
	}
	if(aciertosConseguidos==4)
	{
		mensaje="  excelente !!!";
	}else
	{
		mensaje=" ..Correctas: "+aciertosConseguidos;
		if(contadorDeIntentos==4)
		{
			alert("Casi lo logras... mas suerte la proxima ! ! !");
			alert(secuenciaSecretaDeColores);
		}
	}

	
	switch(contadorDeIntentos)
	{
		case 1:
			txtIdPrimerIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 2:
			txtIdSegundoIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 3:
			txtIdTercerIntento.value=secuenciaIngresada+" " +mensaje;
		break;
		case 4:
			txtIdCuartoIntento.value=secuenciaIngresada+" " +mensaje;
		break;
	}

	
	secuenciaIngresada=new Array("vacio","vacio","vacio","vacio");
}