/*Ejercicio 1

Utilizando lo aprendido escribir el código necesario para que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avión*/




let distancia_del_usuario = 2300;
let medio_final ="";

if (distancia_del_usuario > 0 && distancia_del_usuario < 1000)
{
    medio_final = "pie";
}else if (distancia_del_usuario > 1000 && distancia_del_usuario < 10000)
{
    medio_final = "bicicleta";
}else if (distancia_del_usuario > 10000 && distancia_del_usuario < 30000)
{
    medio_final = "colectivo";
}else if (distancia_del_usuario > 30000 && distancia_del_usuario < 100000 )
{
    medio_final = "auto";
}else if (distancia_del_usuario > 100000)
{
    medio_final = "avión";
}else 
{
    medio_final = "Inválido";
}
console.log(medio_final);
/*Ejercicio 2

Haciendo uso de los bucles, recorrer un array de números y determinar cual es el mayor*/

let arr = [1, 2, 3, 5, 9, 6, 42, 12];
let numMasGrande

for (let i = 0; i < arr.length; i++)
{
    if (i === 0)
    {
        numMasGrande = arr[i];
    }
    else 
    {
        if (arr[i] > numMasGrande)
        {
            numMasGrande = arr[i];
        }
    }
}
console.log("El numero mas grande es " + numMasGrande);