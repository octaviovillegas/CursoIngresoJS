#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    int i=0;
    int pares=0;
    int impares=0;
    int acumImpares=0;
    int acumNum=0;
    float promedio;
    int max;
    int impMin;
    int limite1=0;
    int limite2=0;
    int limite3=0;
    char pregunta;
    char bandera1='s';
    char bandera2='s';
    int sumNumImp=0;
    int x;
    int z;

    do
    {
        printf("\ningrese un numero positivo\n");
        scanf("%d",&num);
        i++;
        while(num<=0)
            {
                printf("reingrese un numero positivo\n");
                scanf("%d",num);

            }
        acumNum+=num;
        if(num%2==0)
            {
                pares++;
            }
        else
            {
                impares++;
                acumImpares+=num;

                if(bandera2=='s')
                    {
                        bandera2='n';
                        impMin=num;
                    }
                if(impMin>num)
                    {
                        impMin=num;
                    }
            }

        if(bandera1=='s')
            {
                bandera1='n';
                max=num;
            }
        if(num>max)
            {
                max=num;
            }
        if(num>=3 && num<=15)
            {
                limite1++;
            }
        if(num>=16 && num<=29)
            {
                limite2++;
            }
        if(num>=30)
            {
                limite3++;
            }
        printf("quiere ingresar otro numero? s/n\n");
        pregunta=tolower(getch());

    }while(pregunta=='s');

    printf("la cantidad de numero pares es: %d\n",pares);
    printf("la cantidad de numeros impares es: %d\n",impares);
    printf("la sumatoria de todos los numeros impares es: %d\n",acumImpares);
    promedio=(float)acumNum/i;
    printf("el promedio de todos los numeros es: %f\n",promedio);
    printf("el mayor numero ingresado fue: %d\n",max);
    printf("el numero impar menor ingresado fue: %d\n",impMin);
    printf("los numeros entre 3 - 15 son: %d\n",limite1);
    printf("los numeros entre 16 - 29 son: %d\n",limite2);
    printf("los numeros mayores a 30 son: %d\n",limite3);

    for(x=impares;x>0;x--)
        {
            sumNumImp+=x;
            printf("numero: %d\nsuma de los anteriores: %d\n",x,sumNumImp);

        }

}

