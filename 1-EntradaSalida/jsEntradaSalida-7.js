/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var uno;
var dos;
function sumar()
{	
	uno = document.getElementById('numeroUno').value;
	uno = parseInt(uno);
	dos = document.getElementById('numeroDos').value;
	dos = parseInt(dos);
	alert("La suma es " + (uno + dos));
}

function restar()
{
	uno = document.getElementById('numeroUno').value;
	uno = parseInt(uno);
	dos = document.getElementById('numeroDos').value;
	dos = parseInt(dos);
	alert("La suma es " + (uno - dos));
}

function multiplicar()
{ 
	uno = document.getElementById('numeroUno').value;
	uno = parseInt(uno);
	dos = document.getElementById('numeroDos').value;
	dos = parseInt(dos);
	alert("La suma es " + (uno * dos));
}

function dividir()
{
	uno = document.getElementById('numeroUno').value;
	uno = parseInt(uno);
	dos = document.getElementById('numeroDos').value;
	dos = parseInt(dos);
	alert("La suma es " + (uno / dos));
}

