/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let marca;
    let precio = 35;
    let descuento;
    let precioDescuento;
    let cantidadLamp = 0;
    let ingresosBrutos;
    let precioFinal;
    let total;


    cantidadLamp = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidadLamp >= 6) {
        descuento = 0.5;
    }
    else if (cantidadLamp == 5) {
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 0.4;
                break;
            default:
                descuento = 0.3;
                break;
        }
    }
    else if (cantidadLamp == 4) {
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 0.25;
                break;
            default:
                descuento = 0.2;
                break;
        }
    }
    else if (cantidadLamp == 3) {
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 0.15;
                break;
            case "FelipeLamparas":
                descuento = 0.1;
                break;
            default:
                descuento = 0.05;
                break;
        }
    }
    else {
        descuento = 0;
    }
    precioDescuento = precio - precio * descuento;
    total = precioDescuento * cantidadLamp;

    document.getElementById("txtIdprecioDescuento").value = precioDescuento;
    alert("El precio total es " + total);

    if (total >= 120) {
        ingresosBrutos = total * 0.1;
        precioFinal = total + ingresosBrutos;
        alert("IIBB Usted pago " + ingresosBrutos);
        alert("El precio final sera " + precioFinal);
    }

}