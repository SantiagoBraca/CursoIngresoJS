/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
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


	respuesta="si";
	numeroIngresado=0;
	cantidadDeNumerosPares=0;
	cantidadNumerosImpares=0;
	cantidadDeCeros=0;
	
	while(respuesta=="si")
	{
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

		if(numeroIngresado%2==0)
		{
			cantidadDeNumerosPares=
		}
		else
		{
			numeroIngresado=numeroIngresado-2;
			//cantidadDeNumerosImpares=numeroIngresado;
		}

		respuesta=prompt("Si desea continuar escriba SI, de lo contrario presione aceptar");
	}

	document.write("<br>A)Cantidad de numeros pares " + cantidadDeNumerosPares)//cantidadDeNumerosPares)
	//document.write("<br>B)Cantidad de numeros impares " + numeroIngresado)//cantidadDeNumerosImpares)
}
