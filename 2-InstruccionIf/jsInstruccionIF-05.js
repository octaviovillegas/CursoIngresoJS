function mostrar()
{
	edad=parseInt(txtIdEdad.value);

	if (edad>='13'&&edad<=17){
		void(0);
	} else{
		alert('no es adolescente');
	}
}
/*{
	edad=parseInt(txtIdEdad.value);

	if (!(edad>='13'&&edad<='17')){
		alert('no es adolescente');
	}
}*/