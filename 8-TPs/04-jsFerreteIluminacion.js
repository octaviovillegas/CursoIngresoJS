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
    var precio;
    var cantidad;
    var marca;
    var precioFinal;
    var porcentaje;
    var iibb;
    var mensaje;
    
    precio=35;
    cantidad=parseInt(txtIdCantidad.value);
    marca=Marca.value;
    precioFinal=txtIdpreciopuento.value;
    mensaje=`Usted pago ${iibb} de IIBB.`

    if (cantidad > 5){
        porcentaje = 50;
    }else if(cantidad==5){
        if(marca=="ArgentinaLuz"){
            porcentaje = 40;
        }
    }
}
