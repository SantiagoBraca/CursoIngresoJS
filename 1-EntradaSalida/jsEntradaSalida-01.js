/* BRACAMONTE SANTIAGO

APUNTES PARA EL PARCIAL

function mostrar()
{//Alert("Hola"); esto no funciona alert("Hola");// funcion de salida}


PROMPT, ALERT, DOCUMENT WRITE, GETELEMENBYID Y CONCATENACION:

	ejemplo=prompt("ingrese aqui"); EL PROMPT se usa para escribir algo en una ventana emergente

	alert("mensaje")EL ALERT se usa para mostrar algo en una ventana emergente al presionar el boton mostrar o despues de terminar el prompt, SOLO 1 ALERT POR FUNCION

	document.write("<br>EJEMPLO") Se usa para mostrar los resultados en una pagina nueva

	document.getElementById('txtResultado').value; Se usa para poder escribir sobre el id marcado

	document.getElementById('txtResultado').value=resultado; se usa para que luego de realizar algo, se muestre en este lugar el resultado

	Para concatenar se debe agregar una variable y sumarla a otra. EJ: variable1 + variable2 

//////////////////////////////////////////////////////

IF Y ELSE

IF SE USA PARA SABER SI EN UNA SITUACION PASA ALGO
ELSE SE USA DESPUES DE UN IF SI QUIERO SABER QUE PASA SI OCURRE LO CONTRARIO AL IF

if[Si esta condicion pasa](edad>10)
{
	[Entonces...entra al if y ocurre esto]

	mensaje(usted es mayor de 10 años)
} 
else[De lo contrario...]
{
	mensaje(usted es menor de 10 años)
}

Se puede hacer un if dentro de otro if o un if dentro de un else infinitas veces para hacer cumplir infinitas condiciones(es recomendable hacer un switch para esto), pero NUNCA se puede hacer esto

elseif(DESAPROBADO AUTOMATICAMENTE)

AND(&&):Se usa cuando hay mas de una condicion en el if/switch/while, significa "si pasa esto y esto"(AMBOS TIENEN QUE OCURRIR)
OR(||):Se usa cuando hay mas de una condicion en el if/switch/while, significa "si pasa esto o esto"(SOLO UNO DEBE OCURRIR)

///////////////////////////////////

SWTICH

se usa parecido como al if pero mucho mas facil

switch(tipoDeObjeto)
{
	case "1":[se usa ":" y no ";" ]   toma la posibilidad de si es el 1
	{
		aca coloco una condicion si es que la hay 
	}
	break;

	default: 	toma la posibilidad de si es el resto de numeros
	{
		aca coloco otra condicion si es que la hay 
	}
	break;
}

///////////////////////////////////////////////////////

CONTADORES

contador=0; SE CREA EL CONTADOR, SIEMPRE EN 0(salvo algunas excepciones...)

El WHILE SE USA COMO UN REPETIDOR,SIEMPRE EN NEGATIVO(Mientras esto NO sea asi, entrara al while y esto pasara, 
hasta que sea de la forma correcta)

while(contador<10) SE PONE UNA CANTIDAD MAXIMA PARA EL CONTADOR
{
	contador=contador+1  EL CONTADOR EMPIEZA A DAR LA 1ER VUELTA Y DESPUES DE TERMINAR TODO ARRANCA LA 2DA VUELTA HASTA LA 10
}

//
Cuando se realiza una suma de una cantidad especifica, se debe iniciar un ACUMULADOR

acumuladorSumaDePositivos=acumuladorSumaDePositivos+numeroIngresado;
//

si la consigna pide "hasta que el usuario quiera", se hace lo siguiente:

respuesta=si
while(respuesta=="si")
{
	aca coloco un contador de vueltas

	vueltas=vueltas+1

	aca coloco lo que pide 

	En el FINAL del while creo un prompt con la respuesta
	respuesta=prompt("desea seguir?");
}

////////////////////////////////////////////////////////////////////


BANDERAS

Las banderas señalan el mayor, el menor, el primero, el ultimo, el mas alto, el mas bajo, es decir un maximo o un minimo
(ejemplo abajo, en el maximo y minimo)

SACAR MAXIMO Y MINIMO

	banderaDelPrimero="es el primero"; SE CREA UNA BANDERA 
	respuesta='si';
	while(respuesta=="si") NO OLVIDAR EL "=="
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;

			banderaDelPrimero="no es el primero";
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
	}

---------------------------------------------------------------------------------------------------------------------


COPYPASTEO DE CUENTAS

LOS NUMEROS SE PARSEAN!!!!!!!!!
(numeroIngresado=parseInt(numeroIngresado))

CUENTAS:

SUMA= +
RESTA= -
MULTIPLICACION= * 
DIVISION= /
RESTO= %

sacar promedio
{
	suma=7+8+9
	promedio=suma/3
}

/////////////////////////////

sacar el resto
{
	dividendo=numeroDividiendo%numeroDivisor

	se escribe el numero que va a ser dividido(10) junto al signo "%" y al numero divisor(2), con esto tambien se sabra 
	si el numero es par (su resto es cero=0), o impar(su resto es uno=1)
}

////////////////////////////

resultado con aumento/recargo/iva
{
	FORMA 1 esta forma la uso solamente si necesito saber el precio antes del aumento:

	sueldo=num1+num2+num3
	aumento=((porcentajeDeAumento/100)*sueldo);
    resultado=aumento+sueldo;

    FORMA 2

    resultado=sueldo +((porcentajeDeAumento/100)*sueldo);
}

//////////////////////

resultado con descuento(igual al aumento, solo cambiamos el + por un - )
{
	FORMA 1 esta forma la uso solamente si necesito saber el precio antes del descuento:

	sueldo=num1+num2+num3
	aumento=((porcentajeDeAumento/100)*sueldo);
    resultado=aumento-sueldo;

    FORMA 2

    resultado=sueldo - ((porcentajeDeAumento/100)*sueldo);
}

/////////////////////////////////

Generar numero aleatorio del 1 al 10
{
	mostrar=Math.floor(Math.random() * 10) + 1;
}

//////////////////////////////////////

FAHRENHEIT A CENTIGRADOS:
	
	FORMA 1

	temperatura=temperatura
	resta=temperatura-32
	gCentigrados=resta/1.8
	resultado=gCentigrados

	FORMA 2

	resultado=((temperatura-32)/1.8)

//////////////////////////////

CENTIGRADOS A FAHRENHEIT:
	
	FORMA 1

	temperatura=temperatura
	resta=temperatura*1.8
	gFahrenheit=resta+32
	resultado=gFahrenheit

	FORMA 2

	resultado= ((temperatura*1.8)+32)

	
---------------------------------------------------------------------------------------------------------------------


EJERCICIOS POR SI LLEGA A HABER ALGO PARECIDO

7-Promedio de positivos./B)Promedio de peso masculino
(dentro del while)
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
(fuera del while)
//7 Promedio de positivos
	if(cantidadDePositivos>0)
	{
		promedioDePositivos=sumaPositivos/cantidadDePositivos;//FUNCIONA, BIEN UBICADO
	}

/////////////////////////////////////////

//9-Diferencia entre positivos y negativos, (positvos-negativos)
diferenciaPositivaNegativa=sumaPositivos-sumaNegativos;//;//FUNCIONA, BIEN UBICADO

/////////////////////////////////////////

A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
cuenta=largo+largo+ancho+ancho;
	resultado=cuenta*3;

///////////////////////////

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
cuenta=((radio*Math.PI)*2);
	resultado=cuenta*3;

//////////////////////////////

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
	cemento=2;
	cal=3;

	//LOS VALORES YA ESTAN DEFINIDOS, PERO SI NO ESTUVIERAN ENTONCES QUEDARIA A ELECCION DE EL USUARIO EL DARLE UN
	VALOR NUMERICO

	multiplicacionCemento=largo*ancho;
	totalCemento=multiplicacionCemento*2;

	multiplicacionCal=largo*ancho;
	totalCal=multiplicacionCal*3;

///////////////////////////////////////////	

B V1)Nombre edad y sexo del mas pesado

if(banderaMasPesado=="es el mas pesado")
{
		masPesado=ingresePeso;
		nombreMasPesado=ingreseNombre;
		temperaturaMasPesado=ingreseTemperatura;
		banderaMasPesado="ya no;"
}
else
{
		if(masPesado < ingresePeso)
		masPesado=ingresePeso;
		nombreMasPesado=ingreseNombre;
		temperaturaMasPesado=ingreseTemperatura;
}
///////////////////////

C V1)¿Hay mas casados, solteros o divorciados?/ ¿Hay menos casados, solteros o divorciados?

if(cantidadCasados>cantidadSolteros && cantidadCasados>cantidadDivorciados)
	{
		masEstadoCivil="casados";
	}
	else
	{
		if(cantidadSolteros>cantidadDivorciados)
		{
			masEstadoCivil="solteros";
		}
		else 
		{
			masEstadoCivil="divorciados";
		}
	}

	ESTO FUERA DEL WHILE

////////////////////////////////

C)Porcentaje de adolescentes sobre el total(siempre que la consigna sea parecida a esta, se hace esta cuenta)

porcentajeDeAdolescentes=((cantidadDeAdolescentes(5)*100)/10)(De 10 personas, el 50%(5) son adolescentes)

//"Si ya se cuál es el valor del porcentaje, pero no el porcentaje, multiplico el valor que se del porcentaje por
 100 y lo divido por la cantidad original. EJ:((5*100)/10)=50%(El 50% de porcentaje de 10 es 5)

 //H)el porcentaje de  personas que desaprobaron sobre el total
	porcentajeDesaprobados=((cantidadDeEstudiantesDeLaUTN*100)/cantidadDeDesaprobados);


////////////////////////////////

f)Nombre,temperatura y edad de la primer mujer con temperatura.

case "f":
				if(banderaPrimerMujerTemperatura==0 && ingreseTemperatura>0 && cantidadDeFemeninos==0)
				{
					nombrePrimerMujerTemperatura=ingreseNombre;
					edadPrimerMujerTemperatura=ingreseEdad;
					temperaturaPrimerMujer=ingreseTemperatura;
					banderaPrimerMujerTemperatura==1
				}
				cantidadDeFemeninos=cantidadDeFemeninos+1;
			break;

//////////////////////////////////////	

g)Nombre y temperatura del  mas pesado de todos y el de los adolescentes tambien

		if(banderaMasPesado==0) ACA SACO UN MAXIMO EN TOTAL
		{
			masPesado=ingresePeso;
			nombreMasPesado=ingreseNombre;
			temperaturaMasPesado=ingreseTemperatura;
		}
		else
		{
			if(masPesado < ingresePeso) MAXIMO
			{
				masPesado=ingresePeso;
				nombreMasPesado=ingreseNombre;
				temperaturaMasPesado=ingreseTemperatura;
			}
		}

		if(ingreseEdad<12)
		{
			if(banderaNiñoMasPequeño==0) ACA SACO UN MINIMO
			{
				niñoMasPequeño=ingreseEdad;
				nombreNiñoMasPequeño=ingreseNombre;
				sexoNiñoMasPequeño=ingreseSexo;
				temperaturaNiñoMasPequeño=ingreseTemperatura;
				banderaNiñoMasPequeño=1;
			}
			else
			{
				if(ingreseEdad < niñoMasPequeño) MINIMO
				{
					niñoMasPequeño=ingreseEdad;
					nombreNiñoMasPequeño=ingreseNombre;
					sexoNiñoMasPequeño=ingreseSexo;
					temperaturaNiñoMasPequeño=ingreseTemperatura;
				}
			}
		}
		else
		{
			if(ingreseEdad<18)
			{
				if(banderaMasPesadoAdolescente==0) ACA SACO UN MAXIMO EN ADOLESCENTES
				{
					masPesadoAdolescente=ingresePeso;
					nombreMasPesadoAdolescente=ingreseNombre;
					temperaturaMasPesadoAdolescente=ingreseTemperatura;
					banderaMasPesadoAdolescente=1;
				}
				else
				{
					if(masPesadoAdolescente < ingresePeso) MAXIMO
					{
						masPesadoAdolescente=ingresePeso;
						nombreMasPesadoAdolescente=ingreseNombre;
						temperaturaMasPesadoAdolescente=ingreseTemperatura;
						banderaMasPesadoAdolescente=1;
					}
				}
			}
						
		}

///////////////////////////////////////////

//B) El nombre del pais con menos habitantes
		if(contadorDeVueltas==1)
		{
			paisConMenosHabitantes=paisIngresado;
			menorCantidadHabitantes=habitantes;
		}
		else
		{
			if(habitantes<menorCantidadHabitantes) SACO EL MINIMO CON UN CONTADOR, PUEDO SACAR EL MAX CON UN CONTADOR 
												   TAMBIEN
			{
				paisConMenosHabitantes=paisIngresado;
				menorCantidadHabitantes=habitantes;
			}
		}

////////////////////////////////

//I)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
		if(alturaEnCentimetros<160 && notaIngresada<4 && sexoIngresado=="m" && banderaPrimerHombre=="es el primero")
		{
			primerHombre=nombreIngresado;
			banderaPrimerHombre="no es";
		}

//////////////////////////////////////////
