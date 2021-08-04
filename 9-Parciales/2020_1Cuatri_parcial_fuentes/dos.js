/*  let cantidad;
  let material;
  let precio;
  let cantidadAre = 0;
  let cantidadCal = 0;
  let cantidadCem = 0;
  let maxUnidades;
  let maxValor;
  let precioCal = 0;
  let precioAre = 0;
  let precioCem = 0;
  let precioTotal = 0;
  let cantidadTotal = 0;
  let precioDescuento;
  do {
    material = prompt("Ingrese el material a comprar (Cal/Arena/Cemento) ").toLowerCase();
    while (material != "cal" && material != "arena" && material != "cemento") {
      material = prompt("Error. Material incorrecto, ingrese un material valido (Cal/Cemento/Arena)")
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
    while (isNaN(cantidad) || cantidad < 1) {
      cantidad = parseInt(prompt("Por favor ingrese una cantidad valida"))
    }

    precio = parseInt(prompt("Ingrese el precio del material por unidad"));

    while (isNaN(precio) || precio < 1) {
      precio = parseInt(prompt("Ese no es un precio valido, por favor reingrese el precio"))
    }
    if (material = "cal") {
      cantidadCal = cantidadCal + cantidad;
      precioCal = cantidadCal * precio;


    } else if (material = "arena") {
      cantidadAre = cantidadAre + cantidad;
      precioAre = cantidadAre * precio;


    } else {
      cantidadCem = cantidadCem + cantidad;
      precioCem = cantidadCem * precio;


    }

    precioTotal = precioCem + precioCal + precioAre;
    cantidadTotal = cantidadCem + cantidadCal + cantidadAre;

    respuesta = prompt("Desea registrar mas productos? Si/No").toLowerCase();
  } while (respuesta == "si");

  alert("El total bruto a pagar es " + precioTotal);
  if (cantidadTotal >= 10 && cantidadTotal <= 30) {
    precioDescuento = precioTotal * 0.85;
    alert("El precio a pagar con importeNeto por haber comprado entre 10 y 30 unidades es " + precioDescuento);
  } else if (cantidadTotal > 30) {
    precioDescuento = precioTotal * 0.75;
    alert("El precio a pagar con importeNeto por haber comprado mas de 30 unidades es " + precioDescuento);
  } else {
    alert("El total a pagar sin descuentos por una compra menor a las 10 unidades es " + precioTotal);
  }
  if (cantidadCem > cantidadAre && cantidadCem > cantidadCal) {
    maxUnidades = ("Cemento");

  } else if (cantidadAre > cantidadCem && cantidadAre > cantidadCal) {
    maxUnidades = ("Arena");
  } else {
    maxUnidades = ("Cal");
  }
  alert("El producto con mayor cantidad de unidades es " + maxUnidades)*/

function mostrar() {
  let material;
  let cantidad;
  let precio;
  let importeNeto;
  let importeBruto = 0;
  let importeNeto;
  let acumBolsas = 0;
  let mayorPrecio;
  let mayorTipo;
  let flag = 1;
  let acumCem = 0;
  let acumAre = 0;
  let acumCal = 0;
  let cantMaxBolsas;
  let tipoMaxBolsas;
  let cantBolsas;
  let importe;

  do {
    material = prompt("Ingrese el material a comprar (Cal/Arena/Cemento) ").toLowerCase();
    while (material != "cal" && material != "arena" && material != "cemento") {
      material = prompt("Error. Material incorrecto, ingrese un material valido (Cal/Cemento/Arena)")
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
    while (isNaN(cantidad) || cantidad < 1) {
      cantidad = parseInt(prompt("Por favor ingrese una cantidad valida"))
    }

    precio = parseInt(prompt("Ingrese el precio del material por unidad"));

    while (isNaN(precio) || precio < 1) {
      precio = parseInt(prompt("Ese no es un precio valido, por favor reingrese el precio"))
    }
    importe = cantidad * precio;
    acumBolsas = acumBolsas + cantidad;
    importeBruto = importeBruto + importe;

    if (material == "cal") {
      acumCal = acumCal + cantidad;



    } else if (material == "arena") {
      acumAre = acumAre + cantidad;



    } else {
      acumCem = acumCem + cantidad;
    }
    if (flag = 1 || precio > mayorPrecio) {
      mayorPrecio = precio
      mayorTipo = material
      flag = 0

    }



    respuesta = prompt("Desea registrar mas productos? Si/No").toLowerCase();
  } while (respuesta == "si");
  alert("El precio bruto a pagar es" + importeBruto)
  if (acumBolsas > 30) {
    importeNeto = importeBruto * 0.75;
    alert("El precio a pagar con importeNeto por haber comprado entre 10 y 30 unidades es " + importeNeto);
  } else if (acumBolsas > 10) {
    importeNeto = importeBruto * 0.85;
    alert("El precio a pagar con descyebti por haber comprado mas de 30 unidades es " + importeNeto);
  } else {
    alert("El total a pagar sin descuentos por una compra menor a las 10 unidades es " + importeBruto);
  }
  if (acumAre > acumCal && acumAre > acumCem) {
    tipoMaxBolsas = ("arena");
    cantMaxBolsas = acumAre;

  } else if (acumCem > acumAre && acumCem > acumCal) {
    tipoMaxBolsas = ("cemento");
    cantMaxBolsas = acumCem;
  } else {
    tipoMaxBolsas = ("Cal");
    cantMaxBolsas = acumCal
  }
  alert("El producto con mayor cantidad de unidades es " + tipoMaxBolsas + " con una cantidad de " + cantMaxBolsas + " unidades.")
  alert("El producto mas caro es " + mayorTipo + " con un precio de " + mayorPrecio)

  document.write("a) El importe total a pagar es " + importeBruto + " <br>");
  if (importeNeto > 0) {
    document.write("b) El importe total a pagar con descyebti es " + importeNeto + "<br>")
  }
  document.write("c) Tipo con mas cantidad de bolsas " + tipoMaxBolsas + " con " + cantMaxBolsas + "bolsas<br>")
  document.write("d) Tipo mas caro " + mayorTipo + " precio" + mayorPrecio + " <br>")



}



