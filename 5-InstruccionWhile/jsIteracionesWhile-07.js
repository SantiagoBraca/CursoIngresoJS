//WHILE 7 V1
//Bracamonte Santiago
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/*
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
	*/

	let alturaPorCentimetros;
	let edadIngresada;
	let temperatura;
	let sexoIngresado;
	let notaIngresada;
	let nombreIngresado;
	let contador;
	let deseaContinuar;

	deseaContinuar="si"

	alturaPorCentimetros=prompt("Ingrese altura validada(0 hasta 250)");
	while(alturaPorCentimetros<0 || alturaPorCentimetros>250)
	{
		alturaPorCentimetros=parseInt(alturaPorCentimetros);
		alturaPorCentimetros=prompt("Error, reingrese");
	}

	edadIngresada=prompt("Ingrese edad valida(0 hasta 99)");
	while(edadIngresada<0 || edadIngresada>99)
	{
		edadIngresada=parseInt(edadIngresada);
		edadIngresada=prompt("Error, reingrese");
	}

	temperatura=prompt("Ingrese temperatura valida(-20 hasta 50)");
	while(temperatura<-20 || temperatura>50)
	{
		temperatura=parseInt(temperatura);
		temperatura=prompt("Error, reingrese");
	}

	sexoIngresado=prompt("Ingrese sexo valido(m, f, o nb)");
	while(sexoIngresado!="m" && sexoIngresado!="f" && sexoIngresado!="nb")
	{
		sexoIngresado=prompt("Error, reingrese");
	}

	notaIngresada=prompt("Ingrese nota valida(0 a 10)");
	while(notaIngresada<0 || notaIngresada>10)
	{
		notaIngresada=parseInt(notaIngresada);
		notaIngresada=prompt("Error, reingrese");
	}

	while(deseaContinuar=="si")
	{
		nombreIngresado=prompt("Ingrese nombre de 5 estudiantes de la UTN");
		contador=contador+1
		deseaContinuar=prompt("Si desea continuar, escriba si, de lo contrario, presione aceptar");
	}
}//FIN DE LA FUNCIÓN