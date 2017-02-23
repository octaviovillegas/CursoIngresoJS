function Mostrar()
{
var  num;
num = prompt("ingrese Un numero");
num=parseInt(num)
var contPares=0;
for(var i=1 ; i<=num ; i++)
{
    if(i%2==0){
    console.log(i);
    contPares++;}
}
 console.log("los pares son "+contPares)

}//FIN DE LA FUNCIÓN
