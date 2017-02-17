function Mostrar()
{

	 var primera=true;
	 var contpos, contneg, contcero, contpares;
	 var acumpos, acumneg;
	var num;
	 
	 while (confirm("")){
	
        num=prompt("")
		num=parseInt(num)
	 }
	 		if (num < 0)
	{
		contneg++;
		acumneg+=num
	}
			else if (num >0){
		contpos++;
		acumpos++;
	}
			else
			contceros++;
			
			if (num%2==0)
			contpares++;




}//FIN DE LA FUNCIÓN