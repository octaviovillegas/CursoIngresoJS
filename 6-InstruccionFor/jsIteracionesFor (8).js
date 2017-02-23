function Mostrar()
{

var  num;
num = prompt("ingrese Un numero");
num=parseInt(num)
var contDiv=0;

for(var i=1 ; i<=num ; i++)
{
    if(num%i==0){
    contDiv++;}
}
if (contDiv==2){
 console.log(num+" es un Numero Primo");
}
else {
    console.log(num+" no es un numero primo")
}


}//FIN DE LA FUNCIÓN