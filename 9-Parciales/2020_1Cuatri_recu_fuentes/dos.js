/*Nos dedicamos a la venta exclusiva de Discos rígidos. <br>
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los <br>
siguientes datos:<br>
Tipo: (validar "HDD", "SSD" o "SSDM2")<br>
Precio: (validar entre 5000 y 18000),<br>
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).<br>
Marca: (validar “Seagate”, “WD”, “Kingston”)<br>
Capacidad: (validar 250, 500, 1, 2)<br>
Se debe Informar al usuario lo siguiente:<br>
a) Del más barato de los SSD, la cantidad de unidades y marca.<br>
b) que tipo tiene mas unidades vendidas en total  <br>
c) Cuántas unidades de HDD hay en total.<br>
d) el porcentaje que tiene HDD, SSD y SSDM2 sobre el total de unidades compradas.
*/
function mostrar() {
  let tipo;
  let precio;
  let cantidad;
  let marca;
  let capacidad;
  let ssdBar;
  let ssdBarMarca;
  let ssdBarCant;
  let maxUnidades;
  let cantTotal;
  let contadorHDD = 0;
  let acumHDD = 0;
  let contadorSDD = 0;
  let acumSDD = 0;
  let contadorSSDM2 = 0;
  let acumSSDM2 = 0;
  let flag = 1
  let porcentaje;


  for (let i = 0; i < 2; i++) {

    tipo = prompt("Ingrese el producto a cargar (HDD/SDD/SSDM2").toLowerCase();
    while (tipo != "hdd" && tipo != "sdd" && tipo != "ssdm2") {
      tipo = prompt("Producto incorrecto, por favor ingrese un producto valido. (HDD/SDD/SSDM2)");
    }
    precio = parseInt(prompt("Ingrese el precio del producto"));
    while (!(precio >= 5000 && precio <= 18000)) {
      precio = parseInt(prompt("Precio invalido, por favor ingrese nuevamente un precio"))
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de productos a cargar"));
    while (!(cantidad >= 1 && cantidad <= 50)) {
      cantidad = (parseInt(prompt("Cantidad invalida, por favor ingrese una cantidad valida")))

    }
    marca = prompt("Ingrese la marca del producto (Seagate/WD/Kingston)").toLowerCase();
    while (marca != "seagate" && marca != "wd" && marca != "kingston") {

      marca = prompt("Marca invalida, ingrese nuevamente la marca (Seagate/WD/Kingston)")
    }
    capacidad = parseInt(prompt("Ingrese la capacidad del producto (250/500/1/2)"))
    while (capacidad != 250 && capacidad != 500 && capacidad != 1 && capacidad != 2) {
      capacidad = parseInt(prompt("Capacidad incorrecta, por favor ingrese una capacidad valida (250/500/1/2)"))

    }
cantTotal=cantTotal+cantidad;
    switch (tipo) {

      case "sdd":
        contadorSDD = contadorSDD + cantidad;
        acumSDD++
        if (flag == 1 || ssdBar > precio) {
          ssdBar = precio
          ssdBarCant = cantidad
          ssdBarMarca = marca
          flag = 0

        }
        break;
      case "hdd":
        contadorHDD = contadorHDD + cantidad;
        acumHDD++;
        break;
      case "ssdm2":
        contadorSSDM2 = contadorSSDM2 + cantidad;
        acumSSDM2++;
        break;
    }





  }

  if (contadorHDD > contadorSDD && contadorHDD > contadorSSDM2) {
    maxUnidades = "HDD";
  }
  else if (contadorSDD > contadorHDD && contadorSDD > contadorSSDM2) {
    maxUnidades = "SDD";
  }
  else {
    maxUnidades = "SSDM2";

  }












}
