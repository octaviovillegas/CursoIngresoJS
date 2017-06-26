function Mostrar()
{

var  num;
num = prompt("ingrese Un numero");
num=parseInt(num)
var contDiv=0;

for(var i=1 ; i<=num ; i++)
{
    if(num%i==0){
    console.log(i);
    contDiv++;}
}
 console.log("cantidad de divisores " +contDiv);


}//FIN DE LA FUNCIÓN