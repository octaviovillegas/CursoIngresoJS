# **CursoIngresoJS**
-----
Curso de ingreso con JavaScript

ejercitación y TP para rendir el examen de ingreso 
# **UTNFRA**
## **Técnico superior en programación**

[Pagina en la WEB](http://octaviovillegas.github.io/CursoIngresoJS/index.html)


![QR](http://octaviovillegas.github.io/CursoIngresoJS/img/qrInicio.png)


-----

### ¿Cómo está organizado?
 
* Cada concepto abordado tiene una serie de ejercicios a resolver. 

* Se debe realizar los ejercicios en el orden que se presentan.

* Los ejercicios tienen un incremento de complejidad que acompaña la complejidad del tema abordado.

* Es necesario comprender el tema anterior para continuar con los siguientes temas.

* Cada tema tiene en los enunciados el objetivo que se deben cumplir.


### ¿Que debo hacer para poder programar y responder a los enunciados.?
 


* 1 . Crear una cuenta en GitHub (lo más recomendable).
>Hacer FORK del repositorio.

![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/fork.png)

 

 * 2 . Descargar el ZIP
>Tengas o no cuenta en GitHub.
se debe descargar el .ZIP


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/bajarzip.gif)


* 3 . Utilizar un editor de texto liviano y de software libre******

>Se puede utilizar el que quieran, si no conocen ninguno, aca le paso el link de uno liviano , portable multiplataforma y de software libre.


>[SublimeText](https://www.sublimetext.com/3)

* 4 . Mostrar el curso de ingreso en el navegador de internet**

>Después de descomprimir la carpeta, ingresamos, tomamos el archivo index.html y lo abrimos/lanzamos en el navegador.




### ¿Qué debo hacer para proponer mejoras o hacer consultas sobre errores ?
 
* Debo entrar en la issues **

>Este espacio de las "ISSUES" es para solucionar temas Como
>* funcionales de la WEB.
>* consultas sobre enunciados
>* textos con errores que imposibiliten el funcionamiento

*las que**No se resonden**, son las consultas sobre programación*



![issues](http://octaviovillegas.github.io/CursoIngresoJS/img/issues.png)





-----
## Ingreso a la Web 


**Menú Principal**
>Una vez que tenemos todo correcto deberíamos ver la siguiente página con el menú de acceso a todos los ejercicios.
>Este menú te lleva por cada tema explorado en este curso de ingreso.


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/principal.gif)



-----
# Entrada y salida de datos 
-----


**Entrada y salida de datos**

**Objetivos**
* Interactuar con el usuario.
* Mostrar información acorde a lo pedido.
* Tomar datos como cadena de caracteres y transformarlos a número.
* Manejo de porcentajes dinámicos sobre valores dinámicos.

**Ejercicios del TP**
* 1-Ferrete facturación.
* 2-Ferrete construción.
* 3-Ferrete pinturas.

[PDF de los TPs](http://octaviovillegas.github.io/CursoIngresoJS/Guia%20de%20TPs%20curso%20de%20ingreso.pdf)


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/cjsentreadasalida.png)



-----
## Ejemplo 


```javascript
function mostrarImporteDeUnViaje()
{
   //definición de variables
   var destino;
   var importe;
   var porcentajeDeImpuestos;
   var valorDelImpuesto;
   var importeTotal;
   
   //Entrada de datos
   destino= prompt("ingrese destino", "La costa atlántica");
   porcentajeDeImpuestos = prompt("ingrese porcentaje impositivo", "25");
   porcentajeDeImpuestos=parseInt(porcentajeDeImpuestos);
   importe =document.getElementById('importe').value;
   importe=parseInt(importe);
   
   //Operaciones
   valorDelImpuesto=importe * porcentajeDeImpuestos/100;
   importeTotal=importe+valorDelImpuesto;
   
   //Salidad de datos
   document.getElementById('resultado').value =importeTotal;
   alert("el viaje a "+destino+" tiene un costo total de :$"+importeTotal);
}

```



-----
## Cuestionario 
[Cuestionario entrada y salida de datos](https://forms.gle/QY8L3362sKLCE5kx8)


**A tener en cuenta**
* Los cuestionarios se habilitan en ciertas fechas ya estipuladas.
* Se debe contestar sin buscar en la web las respuestas.
* Se debe contestar sin realizar pruebas de código.
* Se debe iniciar sesion en google para ingresar a los cuestionarios.
* Solo se puede contestar una vez cada cuestionario.

**Las respuestas recibidas  son analizadas para:**
* Hacer una mejora continua del curso.
* Reforzar conceptos que sean necesarios.
* Tener la evolución del alumno durante el curso.





