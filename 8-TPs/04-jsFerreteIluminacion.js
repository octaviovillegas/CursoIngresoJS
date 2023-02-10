/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un puento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un puento del 40 % 
y si es de otra marca el puento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
puento del 25 % y si es de otra marca el puento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el puento es del 15%, si es  
“FelipeLamparas” se hace un puento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con puento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = txtIdCantidad.value;
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
    totalConDescuento = 

    if()
}
