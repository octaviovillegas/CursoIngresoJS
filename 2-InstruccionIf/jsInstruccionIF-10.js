// Angel Farina.

function mostrar()
{
	var examen;

	examen=Math.floor(Math.random()*11);
	console.log(examen);

	if (examen<4){
		alert('⛔️ Vamos, la proxima se puede');
	} else if (examen>3&&examen<9){
		alert('✅ APROBÓ');
	} else{
		alert('✅ EXCELENTE');
	}
}