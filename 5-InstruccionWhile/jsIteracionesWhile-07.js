//WHILE 7
//Bracamonte Santiago
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';//Primera parte del While

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado
		contador=contador+1;
		respuesta=prompt("Presione si para continuar agregando numeros, de lo contrario, solo presionar aceptar");
	}


	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN