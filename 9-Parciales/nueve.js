function mostrar()
{
var producto;
var peso;
var temperatura;
var contadorTemp = 0;
var masPesado;
var flag = 0;
var cantidadProd = 0;
var menosPesado;
var promedio;
var pesoTotal = 0;
var productoTotal = 0;

do{

    peso = parseInt(prompt("INGRESE PESO DEL PRODUCTO"));

    while(peso < 1 || peso > 100 || isNaN(peso)){
        peso = parseInt(prompt("REINGRESE PESO DEL PRODUCTO"));
    }

    temperatura = parseInt(prompt("INGRESE TEMPERATURA DE ALMACENAMIENTO"));

    while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
        temperatura = parseInt(prompt("REINGRESE TEMPERATURA DE ALMACENAMIENTO"));
    }

    producto = prompt("INGRESE MARCA DEL PRODUCTO");

    if(temperatura %2 ==0){
        contadorTemp++;
    }

    if(peso > masPesado || flag == 0){
        masPesado = peso;
        menosPesado = peso;
        marcaPesado = producto;
        flag = 1; }


    if(peso > masPesado){
        masPesado = peso;
        marcaPesado = producto;
    }

    else if (peso < menosPesado){
        menosPesado = peso;
    }

    if (temperatura < 0){
        cantidadProd++;
    }

    pesoTotal = peso + pesoTotal;
    productoTotal = productoTotal + 1;


}while(confirm("DESEA CONTINUAR?"))

promedio = pesoTotal / productoTotal;

alert("LA CANTIDAD DE TEMPERATURAS PARES ES " + contadorTemp);
alert("LA MARCA DEL PRODUCTO MAS PESADO ES  " + marcaPesado);
alert("LA CANTIDAD DE DE PRODUCTOS QUE SON MENORES A CERO SON  " + cantidadProd);
alert("EL PROMEDIO DEL PESO CON TODOS LOS LOS PROD ES DE  " + promedio);
alert("EL PESO MAXIMO ES  "+ masPesado + " Y EL MINIMO ES " + menosPesado);


}

