function mostrar() {
    var edad;
    var estadocivil;

    estadocivil = document.getElementById('estadoCivil').value;
    edad = parseInt(document.getElementById('edad').value);

    if ( edad < 18 && estadocivil != 'Soltero'){
      alert('es pequeno');
    }



}//FIN DE LA FUNCIÓN
