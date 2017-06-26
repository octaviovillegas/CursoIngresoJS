function Mostrar()
{
//alert (mesDelAño);
	
	var mesDelAño = document.getElementById('mes').value;

        switch (mesDelAño){

            case "Febrero":
            alert (mesDelAño+ " tiene 28 dias.")
            break;

            case "Enero":
            case "Marzo":
            case "Mayo":
            case "Julio":
            case "Agosto":
            case "Octubre":
            case "Diciembre":
            alert (mesDelAño+ " tiene 31 dias.")
            break;

            default: 
            alert(mesDelAño+ " tiene 30 dias." )

        }

}//FIN DE LA FUNCIÓN