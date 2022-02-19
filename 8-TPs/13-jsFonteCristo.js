/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadDePositivos;//o contadorDePositivos
	let cantidadDeNegativos;//o contadorDeNegativos
	let cantidadDeCeros;//o ContadorDeCeros
	let cantidadDeNumerosPares;//O ContadorDeNumerosPares
	let promedioDePositivos;
	let promedioDeNegativos;
	let diferenciaPositivaNegativa;

	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadDePositivos=0;
	cantidadDeNegativos=0;
	cantidadDeCeros=0;
	cantidadDeNumerosPares=0;

	numeroIngresado=document.getElementById('txtIdNumero').value;
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>-1)
	{
		if(numeroIngresado%2==0)
		{
			cantidadDeNumerosPares=cantidadDeNumerosPares+1;
		}
	}

	document.write("A)Cantidad de numeros pares:" + cantidadDeNumerosPares);







	/*while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>-1)
		{
			//A-Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
			sumaPositivos=sumaPositivos+1;
			if(numeroIngresado%2==0)
			{
				cantidadDeNumerosPares=cantidadDeNumerosPares+1;
			}
		}
		respuesta=prompt("Si desea continuar escribir si, de lo contrario presionar aceptar")
	}
	*/
}
