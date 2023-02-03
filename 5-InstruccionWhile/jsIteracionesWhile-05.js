// Angel Farina.

function mostrar()
{
	var sexo;
	
	sexo=prompt("ingrese f ó m .");

	while (sexo!=='f'&&sexo!=='m'){
		alert('sexo invalido');
		sexo=prompt("ingrese f ó m .");
	}
	txtIdSexo.value=sexo;
}