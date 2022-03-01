/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
} 
function NumerosPares()
{
    let numeroIngresadoPositivo;

    numeroIngresadoPositivo=0;

    numeroIngresadoPositivo=document.getElementById('txtIdNumero').value;
    numeroIngresadoPositivo=parseInt(numeroIngresadoPositivo);

    while(numeroIngresadoPositivo>0 && numeroIngresadoPositivo%2==0)
    {
        numeroIngresadoPositivo=numeroIngresadoPositivo-2
        alert(numeroIngresadoPositivo);
    }
}
function NumerosImpares()
{
    let numeroIngresadoPositivo;

    numeroIngresadoPositivo=0;

    numeroIngresadoPositivo=document.getElementById('txtIdNumero').value;
    numeroIngresadoPositivo=parseInt(numeroIngresadoPositivo);

    while(numeroIngresadoPositivo>0 && numeroIngresadoPositivo%2==1)
    {
        numeroIngresadoPositivo=numeroIngresadoPositivo-2
        alert(numeroIngresadoPositivo);
    } 
}
function NumerosDivisibles()
{
    let numeroIngresadoPositivo;
    let numeroDivisible;
    let contador;

    numeroIngresadoPositivo=0;
    numeroDivisible=0;
    contador=0;

    numeroIngresadoPositivo=document.getElementById('txtIdNumero').value;
    numeroIngresadoPositivo=parseInt(numeroIngresadoPositivo);
    numeroDivisible=parseInt(numeroDivisible)

    if(contador%2==0)
    {
        contador=contador+1
        alert("es divisible por " + contador);
    } 
}

