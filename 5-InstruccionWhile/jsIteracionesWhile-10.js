//WHILE 10
//Bracamonte Santiago
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
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

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			//1 Suma de los negativos
			sumaNegativos=sumaNegativos+numeroIngresado;

			//4 Cantidad de Negativos
			cantidadDeNegativos=cantidadDeNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				//2 Suma de los positivos
				sumaPositivos=sumaPositivos+numeroIngresado;

				//3 Cantidad de positivos
				cantidadDePositivos=cantidadDePositivos+1;//Forma 1 de solucion
				
				//cantidadDePositivos++//Forma 2 de solucion

				//Errores de la forma 2 de solucion:

				//cantidadDePositivos=cantidadDePositivos++;
				//cantidadDePositivos+cantidadDePositivos+;
				//cantidadDePositivos++cantidadDePositivos+1;
			}
			else
			{
				//5 Cantidad de ceros
				cantidadDeCeros=cantidadDeCeros+1;
			}
		}

		if(numeroIngresado%2==0)
		{
			//6 Cantidad de numeros pares
			cantidadDeNumerosPares=cantidadDeNumerosPares+1;
		}

		//7 Promedio de positivos
		//promedioDePositivos=sumaPositivos/cantidadDePositivos;//FUNCIONA, pero esta MAL UBICADO, no va dentro del WHILE

		respuesta=prompt("Si desea continuar escriba SI, de lo contrario presione aceptar");
	}//fin del while

	//7 Promedio de positivos
	if(cantidadDePositivos>0)
	{
	promedioDePositivos=sumaPositivos/cantidadDePositivos;//FUNCIONA, BIEN UBICADO
	}
	else
	{
		//8 Promedio de negativos
		promedioDeNegativos=sumaNegativos/cantidadDeNegativos;//FUNCIONA, BIEN UBICADO
	}

	//9-Diferencia entre positivos y negativos, (positvos-negativos)
	diferenciaPositivaNegativa=sumaPositivos-sumaNegativos;//;//FUNCIONA, BIEN UBICADO

	document.write("<br>1)La suma de negativos es :"+sumaNegativos);
	document.write("<br>2)La suma de positivos es :"+sumaPositivos);
	document.write("<br>3)La cantidad de positivos es :"+cantidadDePositivos);
	document.write("<br>4)La cantidad de negativos es :"+cantidadDeNegativos);
	document.write("<br>5)La cantidad de ceros es :"+cantidadDeCeros);
	document.write("<br>6)La cantidad de numeros pares es :"+cantidadDeNumerosPares);
	document.write("<br>7)El promedio de positivos es :"+promedioDePositivos);
	document.write("<br>8)El promedio de negativos es :"+promedioDeNegativos);
	document.write("<br>9)La diferencia entre positivos y negativos es :"+diferenciaPositivaNegativa);

}//FIN DE LA FUNCIÓN