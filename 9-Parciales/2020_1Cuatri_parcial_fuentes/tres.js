/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/



function mostrar() {
    let nombre;
    let gener;
    let edad;
    let estadoCivil;
    let temperatura;
    let nombreMaxTemp;
    let maxTemp;
    let acumMayoresViudos = 0;
    let acumHombresVS = 0
    let acumMayoresSolteros = 0;
    let acumMayoresFiebre = 0;
    let acumEdadHombresolteros = 0;
    let flag = 1
    let promedioSolteros;
    let respuesta


    do {
        nombre = prompt("Ingrese su nombre").toLowerCase()
        while (nombre.length == 0) {
            nombre = prompt("Ingreso invalido, por favor ingrese su nombre")
        }
        gener = prompt("Ingrese su sexo (F/M)").toLowerCase()
        while (gener != "f" && gener != "m") {

            gener = prompt("No es un sexo valido. Ingrese su sexo nuevamente (F/M)").toLowerCase()
        }
        edad = parseInt(prompt("Ingrese su edad"))
        while (!(edad != 0)) {

            edad = parseInt(prompt("Error. Edad invalida, ingrese su edad nuevamente"))
        }
        estadoCivil = prompt("Ingrese su estado civil. (Soltero/Casado/Viudo)").toLowerCase()
        while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
            estadoCivil = prompt("Estado civil invalido. Ingreselo nuevamente (Soltero/Casado/Viudo")

        }
        temperatura = parseInt(prompt("Ingrese su temperatura corporal"))
        while (!(temperatura >= 34 && temperatura <= 42)) {
            temperatura = parseInt(prompt("Temperaturas invalidas. Compruebe su temperatura nuevamente."))
        }

        if (flag == 1 || maxTemp < temperatura) {
            nombreMaxTemp = nombre
            maxTemp = temperatura
            flag = 0


        }
        if (edad >= 18 && estadoCivil == "viudo") {
            acumMayoresViudos++
        }
        if (gener == "m" && (estadoCivil == "viudo" || estadoCivil == "soltero")) {
            acumHombresVS++

        }
        if (edad >= 60 && temperatura >= 38) {
            acumMayoresFiebre++
        }
        if (gener == "m" && estadoCivil == "soltero")
            acumEdadHombresolteros = acumEdadHombresolteros + edad
        acumMayoresSolteros++


        respuesta = prompt("Desea ingresar informacion de otro pasajero? (Si/No)").toLowerCase()

    } while (respuesta == "si")
    promedioSolteros = acumEdadHombresolteros / acumMayoresSolteros

    document.write("El nombre de la persona con mayor temperatura es " + nombreMaxTemp + " con una temperatura de " + maxTemp + "°<br>")
    document.write("La cantidad de personas mayores de 18 años viudas es " + acumMayoresViudos + "<br>")
    document.write("La cantidad de personas solteras o viudas que hay es de " + acumHombresVS + "<br>")
    document.write("La cantidad de personas de la tercera edad con temperaturas mayores a 38° es de " + acumMayoresFiebre + "<br>");
    document.write("El promedio de edad entre hombres solteros es de " + promedioSolteros + "<br>")
}
