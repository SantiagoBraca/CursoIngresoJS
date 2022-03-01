/*
Parcial 2019 EJ 8
Bracamonte Santiago
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	let letraIngresada;
	let numeroIngresado;
	let respuesta;
	let cantidadDeNumerosPares;
	let cantidadDeNumerosImpares;
	let cantidadDeCeros;
	let promedioDePositivos;
	let sumaDePositivos;
	let sumaDeNegativos;
	let cantidadDePositivos;
	let contador;
	let letraMaxima;
	let numeroMaximo;
	let letraMinima;
	let numeroMinimo;


	respuesta="si";
	cantidadDeNumerosPares=0;
	cantidadDeNumerosImpares=0;
	cantidadDeCeros=0;
	sumaDePositivos=0;
	sumaDeNegativos=0;
	cantidadDePositivos=0;
	contador=0;
	
	while(respuesta=="si")
	{	
		contador=contador+1;

		letraIngresada=prompt("Ingrese una letra de la A a la Z", "Letra de la A a la Z");
		switch(letraIngresada)
		{
			case "a":
			case "b":
			case "c":
			case "d":
			case "e":
			case "f":
			case "g":
			case "h":
			case "i":
			case "j":
			case "k":
			case "l":
			case "m":
			case "o":
			case "p":
			case "q":
			case "r":
			case "s":
			case "t":
			case "u":
			case "v":
			case "w":
			case "x":
			case "y":
			case "z":
			break;

			default:
			letraIngresada=prompt("Error, ingrese una letra valida(de la A a la Z");
			break;
		}

		numeroIngresado=prompt("Por favor, ingrese un numero entre -100 y 100", "Numero entre -100 y 100");
		numeroIngresado=parseInt(numeroIngresado);
		while(numeroIngresado<(-100) || numeroIngresado>100)
		{
			numeroIngresado=prompt("Error, ingrese un numero valido");
			numeroIngresado=parseInt(numeroIngresado);
		}

		//a) La cantidad de números pares.
		if(numeroIngresado%2==0)
		{
		  cantidadDeNumerosPares=cantidadDeNumerosPares+1;
		}
		else//b) La cantidad de números impares.
		{
			cantidadDeNumerosImpares=cantidadDeNumerosImpares+1;
		}
		//c) La cantidad de ceros.
		if(numeroIngresado==0)
		{
			cantidadDeCeros=cantidadDeCeros+numeroIngresado;
		}
		//d) El promedio de todos los números positivos ingresados.
		if(numeroIngresado>0)
		{
			sumaDePositivos=sumaDePositivos+numeroIngresado;
			cantidadDePositivos=cantidadDePositivos+1
		}
		else//e) La suma de todos los números negativos.
		{
			sumaDeNegativos=sumaDeNegativos+numeroIngresado;
		}
		//f) El número y la letra del máximo y el mínimo.
		if(contador==1)
		{
			letraMaxima=letraIngresada;
			numeroMaximo=numeroIngresado;
			letraMinima=letraIngresada;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				letraMaxima=letraIngresada;
				numeroMaximo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado<numeroMinimo)
				{
					letraMinima=letraIngresada;
					numeroMinimo=numeroIngresado;
				}
			}
		}
		respuesta=prompt("Si desea continuar escriba SI, de lo contrario presione aceptar");
	}

	//d) El promedio de todos los números positivos ingresados.
	promedioDePositivos=sumaDePositivos/numeroIngresado;

	document.write("<br>A)Cantidad de numeros pares es: " + cantidadDeNumerosPares);
	document.write("<br>B)Cantidad de numeros impares es: " + cantidadDeNumerosImpares);
	document.write("<br>C)Cantidad de ceros es: " + cantidadDeCeros);
	document.write("<br>D) El promedio de todos los números positivos ingresados: " + promedioDePositivos);
	document.write("<br>E)La suma de todos los números negativos: " + sumaDeNegativos);
	document.write("<br>f) El número y la letra del máximo y el mínimo:Maximo=" + letraMaxima + numeroMaximo + ". Minimo=" + letraMinima + numeroMinimo);
}