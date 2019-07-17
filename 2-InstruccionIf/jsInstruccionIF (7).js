function mostrar() {
    var edad;
    var EstadoCivil;

    edad = parseInt(document.getElementById("edad").value);
    EstadoCivil = document.getElementById("estadoCivil").value;


    if (edad < 18 && EstadoCivil != "Soltero") {

        alert("es muy pequeño para NO ser soltero");

    }

}//FIN DE LA FUNCIÓN