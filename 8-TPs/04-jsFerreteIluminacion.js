// Angel Farina

// SOLO IF(MARCA)
/*
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    var descuento;
    var totalConImpuesto;
    var MENSAJE;
    

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    EMPRESA = Marca.value;
    
    if(EMPRESA == "ArgentinaLuz")
    {
        if(cantidadLamparas == 5)
        {
            descuentoAplicado = 40;
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                descuentoAplicado = 25;
            }
            else
            {
                descuentoAplicado = 15;
            }
        }
    }
    else
    {
        if(EMPRESA == "FelipeLamparas")
        {
            if(cantidadLamparas == 4)
            {
                descuentoAplicado = 25;
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    descuentoAplicado = 10;
                }
            }
        }
        else
        {
            if(cantidadLamparas > 5)
            {
                descuentoAplicado = 50;
            }
            else
            {
                if(cantidadLamparas == 5)
                {
                    descuentoAplicado = 30;
                }
                else
                {
                    if(cantidadLamparas == 4)
                    {
                        descuentoAplicado = 20;
                    }
                    else
                    {
                        if(cantidadLamparas == 3)
                        {
                            descuentoAplicado = 5;
                        }
                    }
                }
            }
        }
    }

    totalSinDescuento = cantidadLamparas*PRECIO_LAMPARAS;
    descuento = (totalSinDescuento*descuentoAplicado)/100;
    totalConDescuento = totalSinDescuento-descuento;
    IMPUESTO_IIBB = (totalConDescuento*IMPUESTO_IIBB)/100;
    totalConImpuesto = totalConDescuento+IMPUESTO_IIBB;
    MENSAJE = `Usted pago $${IMPUESTO_IIBB.toFixed(2)} de IIBB`;

    if(totalConDescuento > 119,99){
        alert(MENSAJE);
    }

    txtIdprecioDescuento.value = totalConDescuento;

    console.log(`
    Total sin descuento: $${totalSinDescuento}
    Descuento: $${descuento}
    Total con descuento $${totalConDescuento}
    Impuesto IIBB: $${IMPUESTO_IIBB}
    Total con impuesto: $${totalConImpuesto}
    `)
}*/

// SOLO IF(CANTIDAD)
/*
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    var descuento;
    var totalConImpuesto;
    var MENSAJE;
    

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    EMPRESA = Marca.value;
    

    if(cantidadLamparas > 5)
    {
        descuentoAplicado = 50;
    }
    else
    {
        if(cantidadLamparas  == 5)
        {
            if(EMPRESA == "ArgentinaLuz")
            {
                descuentoAplicado = 40;
            }
            else
            {
                descuentoAplicado = 30;           
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(EMPRESA == "ArgentinaLuz")
                {
                    descuentoAplicado = 25;
                }
                else
                {
                    if(EMPRESA == "FelipeLamparas")
                    {
                        descuentoAplicado == 25;
                    }
                    else
                    {
                        descuentoAplicado == 20;
                    }
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(EMPRESA == "ArgentinaLuz")
                    {
                        descuentoAplicado = 15;
                    }
                    else
                    {
                        if(EMPRESA == "FelipeLamparas")
                        {
                            descuentoAplicado = 10;
                        }
                        else
                        {
                            descuentoAplicado = 5;
                        }
                    }
                }
            }
        }
    }

    totalSinDescuento = cantidadLamparas*PRECIO_LAMPARAS;
    descuento = (totalSinDescuento*descuentoAplicado)/100;
    totalConDescuento = totalSinDescuento-descuento;
    IMPUESTO_IIBB = (totalConDescuento*IMPUESTO_IIBB)/100;
    totalConImpuesto = totalConDescuento+IMPUESTO_IIBB;
    MENSAJE = `Usted pago $${IMPUESTO_IIBB.toFixed(2)} de IIBB`;

    if(totalConDescuento > 119,99){
        alert(MENSAJE);
    }

    txtIdprecioDescuento.value = totalConDescuento;

    console.log(`
    Total sin descuento: $${totalSinDescuento}
    Descuento: $${descuento}
    Total con descuento $${totalConDescuento}
    Impuesto IIBB: $${IMPUESTO_IIBB}
    Total con impuesto: $${totalConImpuesto}
    `)
}
*/