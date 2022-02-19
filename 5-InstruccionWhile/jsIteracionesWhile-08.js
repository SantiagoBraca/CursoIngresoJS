//WHILE 8
//Bracamonte Santiago
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	//tiene un IF

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>-1)
		{
			sumaPositivos=sumaPositivos+numeroIngresado
			contador=contador+1;
			respuesta=prompt("Presione si para continuar agregando numeros, de lo contrario, solo presionar aceptar");
		}
		else
		{
			if(numeroIngresado<1)
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado
			contador=contador+1;
			respuesta=prompt("Presione si para continuar agregando numeros, de lo contrario, solo presionar aceptar");
		}	
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN