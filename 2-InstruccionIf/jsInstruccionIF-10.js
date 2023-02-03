// Angel Farina.

function mostrar()
{
	var examen;

	examen=Math.floor(Math.random()*11);
	console.log(examen);

	if (examen<='3'){
		alert('⛔️ Vamos, la proxima se puede');
	} else if (examen>='4'&&examen<='8'){
		alert('✅ APROBÓ');
	} else{
		alert('✅ EXCELENTE');
	}
}