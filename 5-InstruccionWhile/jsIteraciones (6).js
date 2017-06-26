function Mostrar()
{

	var cont=0;
	var acum=0;
	var num;

	while (cont<5)
	{
			cont++;
			num=prompt("suma");
			num=parseInt(num);
			acum+=num;

	}
			alert (acum);
			alert (acum/cont);


}//FIN DE LA FUNCIÓN