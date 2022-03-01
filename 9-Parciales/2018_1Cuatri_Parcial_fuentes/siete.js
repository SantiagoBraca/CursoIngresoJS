/*
SIMULACRO V2
Bracamonte Santiago
se pide el ingreso de los siguientes datos de 10 personas
nombre, edad, peso, temperatura, sexo(f o m o nb), estado civil(casado, soltero, divorciado)
/*
a) cantidad de jubilados (mayor a 60)
b) promedio de peso de los masculinos.
c) que porcentaje hay de adolescentes sobre el total.
d) que porcentaje hay de cada sexo sobre el total
e) que sexo tiene menos cantidad.

f)Nombre,temperatura y edad de la primer mujer con temperatura.
g)Nombre y temperatura del  mas pesado de todos y el de los adolescentes tambien
h)Nombre ,sexo y temperatura de el niño mas joven.
*/

function mostrar()
{	
	let cantidadPersonas;
	let ingreseNombre;
	let ingreseEdad;
	let ingresePeso;
	let ingreseTemperatura;	
	let ingreseSexo;
	let estadoCivil;
	let cantidadSolteros;
	let cantidadCasados;
	let cantidadDivorciados;
	let cantidadCasadosConFiebre;
	let banderaMasPesado;
	let nombreMasPesado;
	let	edadMasPesado;
	let	pesoMasPesado;
	let	temperaturaMasPesado;
	let	sexoMasPesado;
	let	estadoCivilMasPesado;
	let masEstadoCivil;
	let sumaDePesoMasculino;
	let promedioDePesoMasculino;
	let cantidadDeMasculinos;
	let cantidadDeAdolescentes;
	let porcentajeDeAdolescentes;
	let cantidadDeFemeninos;
	let cantidadDeNoBinarios;
	let porcentajeMasculinos;
	let porcentajeFemeninos;
	let sexoMenosMencionado;
	let banderaPrimerMujerTemperatura;
	let nombrePrimerMujerTemperatura;
	let edadPrimerMujerTemperatura;
	let temperaturaPrimerMujer;
	let banderaMasPesadoAdolescente;
	let nombreMasPesadoAdolescente;
	let temperaturaMasPesadoAdolescente;
	let cantidadNiños;
	let banderaNiñoMasPequeño;
	let nombreNiñoMasPequeño;
	let sexoNiñoMasPequeño;
	let temperaturaNiñoMasPequeño;
	let masPesado;
	let niñoMasPequeño;
	let masPesadoAdolescente;


	cantidadPersonas=0;
	cantidadCasados=0;
	cantidadDivorciados=0;
	cantidadSolteros=0;
	cantidadCasadosConFiebre=0;
	banderaMasPesado=0;
	cantidadDeJubilados=0;
	cantidadDeMasculinos=0;
	sumaDePesoMasculino=0;
	cantidadDeAdolescentes=0;
	cantidadDeFemeninos=0;
	cantidadDeNoBinarios=0;
	banderaPrimerMujerTemperatura=0;
	banderaMasPesadoAdolescente=0;
	cantidadNiños=0;
	banderaNiñoMasPequeño=0;

	while(cantidadPersonas<2)
	{
		cantidadPersonas=cantidadPersonas+1
		ingreseNombre=prompt("Ingrese su nombre");
		ingreseEdad=prompt("Ingrese su edad entre 0 y 100");
		ingreseEdad=parseInt(ingreseEdad);
		while(ingreseEdad<0 || ingreseEdad>100)
		{
			ingreseEdad=prompt("ERROR, ingrese una edad valida");
			ingreseEdad=parseInt(ingreseEdad);
		}
		if(ingreseEdad<12)
		{
			cantidadNiños=cantidadNiños+1;
		}
		else
			{
				if(ingreseEdad<18)
				{
					cantidadDeAdolescentes=cantidadDeAdolescentes+1;
				}
				else
				{
					if(ingreseEdad>60)
					{
						cantidadDeJubilados=cantidadDeJubilados+1
					}
				}
			}	

		ingresePeso=prompt("ingrese su peso entre 0 y 300");
		ingresePeso=parseInt(ingresePeso);
		while(ingresePeso<0 || ingresePeso>300)
		{
			ingresePeso=prompt("ERROR, ingrese peso valido");
			ingresePeso=parseInt(ingresePeso);
		}

		ingreseTemperatura=prompt("Ingrese su temperatura corporal entre 0 y 50");
		ingreseTemperatura=parseInt(ingreseTemperatura);
		while(ingreseTemperatura<0 || ingreseTemperatura>50)
		{
			ingreseTemperatura=prompt("ERROR, ingrese una temperatura corporal valida");
			ingreseTemperatura=parseInt(ingreseTemperatura);//SE PARSEA DENUEVO

		}

		ingreseSexo=prompt("Ingrese sexo valido(M, F, O NB)");
		switch(ingreseSexo)
		{
			case "m":
				cantidadDeMasculinos=cantidadDeMasculinos+1;
				sumaDePesoMasculino=sumaDePesoMasculino+ingresePeso;
			break;

			case "f":
				if(banderaPrimerMujerTemperatura==0 && ingreseTemperatura>0 && cantidadDeFemeninos==0)
				{
					nombrePrimerMujerTemperatura=ingreseNombre;
					edadPrimerMujerTemperatura=ingreseEdad;
					temperaturaPrimerMujer=ingreseTemperatura;
					banderaPrimerMujerTemperatura==1
				}
				cantidadDeFemeninos=cantidadDeFemeninos+1
			break;

			case "nb":
				cantidadDeNoBinarios=cantidadDeNoBinarios+1;
			break;

			default:
				ingreseSexo=prompt("ERROR, ingrese sexo valido");
			break;
		}

		estadoCivil=prompt("Ingrese su estado civil: c(casado), s(soltero) o d(divorciado)");
		switch(estadoCivil)
		{
			case "c":
				cantidadCasados=cantidadCasados+1;
			break;

			case "s":
				cantidadSolteros=cantidadSolteros+1;
			break;

			case "d":
				cantidadDivorciados=cantidadDivorciados+1;
			break;

			default:
				estadoCivil=prompt("ERROR, ingrese estad civil valido");
			break;
		}

		if(banderaMasPesado==0)
		{
			masPesado=ingresePeso;
			nombreMasPesado=ingreseNombre;
			temperaturaMasPesado=ingreseTemperatura;
		}
		else
		{
			if(ingresePeso>masPesado)
			{
				masPesado=ingresePeso;
				nombreMasPesado=ingreseNombre;
				temperaturaMasPesado=ingreseTemperatura;
			}
		}

		if(ingreseEdad<12)
		{
			if(banderaNiñoMasPequeño==0)
			{
				niñoMasPequeño=ingreseEdad;
				nombreNiñoMasPequeño=ingreseNombre;
				sexoNiñoMasPequeño=ingreseSexo;
				temperaturaNiñoMasPequeño=ingreseTemperatura;
				banderaNiñoMasPequeño=1;
			}
			else
			{
				if(ingreseEdad<niñoMasPequeño)
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
				if(banderaMasPesadoAdolescente==0)
				{
					masPesadoAdolescente=ingresePeso;
					nombreMasPesadoAdolescente=ingreseNombre;
					temperaturaMasPesadoAdolescente=ingreseTemperatura;
					banderaMasPesadoAdolescente=1;
				}
				else
				{
					if(masPesadoAdolescente<ingresePeso)
					{
						masPesadoAdolescente=ingresePeso;
						nombreMasPesadoAdolescente=ingreseNombre;
						temperaturaMasPesadoAdolescente=ingreseTemperatura;
						banderaMasPesadoAdolescente=1;
					}
				}
			}
						
		}
	}

	if(cantidadDeMasculinos<cantidadDeFemeninos && cantidadDeMasculinos>cantidadDeNoBinarios)
		{
			sexoMenosMencionado="Masculino";
		}
		else
		{
			if(cantidadDeFemeninos<cantidadDeNoBinarios)
			{
				sexoMenosMencionado="Femenino";
			}
			else 
			{
				sexoMenosMencionado="No Binario";
			}
		}

	promedioDePesoMasculino=sumaDePesoMasculino/cantidadDeMasculinos;
	porcentajeDeAdolescentes=((cantidadDeAdolescentes*100)/4)//"Si ya se cuál es el valor del porcentaje, pero no el porcentaje, multiplico el valor del porcentaje por 100 y lo divido por la formula original. EJ:((5*100): 10)=50%(El porcentaje de 10 es 5)
	porcentajeMasculinos=((cantidadDeMasculinos*100)/4)
	porcentajeFemeninos=((cantidadDeFemeninos*100)/4)
	porcentajeNoBinarios=((cantidadDeNoBinarios*100)/4)

	document.write("<br>A)Cantidad de Jubilados: " + cantidadDeJubilados);
	document.write("<br>B)Promedio de peso masculino: " + promedioDePesoMasculino);
	document.write("<br>C)Porcentaje de adolescentes sobre el total: " + porcentajeDeAdolescentes);
	document.write("<br>D)Porcentaje que hay de cada sexo sobre el total: " + porcentajeMasculinos + "(M), " + porcentajeFemeninos + "(F), " + porcentajeNoBinarios + "(NB)");
	document.write("<br>E)Sexo que tiene menos veces mencionado: " + sexoMenosMencionado);
	document.write("<br>F)Nombre, temperatura y edad de la primer mujer con temperatura:su nombre es " + nombrePrimerMujerTemperatura + ", su temperatura es " + temperaturaPrimerMujer + ", y su edad es " + edadPrimerMujerTemperatura );
	document.write("<br>G)Nombre y temperatura del  mas pesado de todos y el de los adolescentes tambien:el mas pesado de todos es " + nombreMasPesado + ", y su temperatura es " + temperaturaMasPesado + ". Mientras que el mas pesado de los adolescentes es " + nombreMasPesadoAdolescente + ", y su temperatura es " + temperaturaMasPesadoAdolescente);
	document.write("<br>H)Nombre, sexo y temperatura de el niño mas joven:su nombre es " + nombreNiñoMasPequeño + ", su sexo es " + sexoNiñoMasPequeño + ", y su temperatura es " + temperaturaNiñoMasPequeño);
}

//SIEMPRE ESPECIFICAR EN QUE LUGAR ESTA REALIZADO CADA PUNTO
//LA BANDERA SE CREA SOLO SI NO TENGO UN CONTADOR PARA SABER CUAL ES EL PRIMERO O EL MAS ALTO O EL MAS PESADO
























/*
/*
SIMULACRO V1
Bracamonte Santiago
se pide el ingreso de los siguientes datos de 10 personas
nombre, edad, peso, temperatura, sexo(f o m o nb), estado civil(casado, soltero, divorciado)

a)cuantos casados tienen fiebre 
b)nombre edad y sexo del mas pesado
c)que hay mas casados, solteros o divorciados
*/
/*function mostrar()
{	
	let cantidadPersonas;
	let ingreseNombre;
	let ingreseEdad;
	let ingresePeso;
	let ingreseTemperatura;	
	let ingreseSexo;
	let estadoCivil;
	let cantidadSolteros;
	let cantidadCasados;
	let cantidadDivorciados;
	let cantidadCasadosConFiebre;
	let pesoMasPesado;
	let nombreMasPesado;
	let	edadMasPesado;
	let	temperaturaMasPesado;
	let	sexoMasPesado;
	let	estadoCivilMasPesado;
	let masEstadoCivil;

	cantidadPersonas=0;
	cantidadCasados=0;
	cantidadDivorciados=0;
	cantidadSolteros=0;
	cantidadCasadosConFiebre=0;
	pesoMasPesado=0;

	while(cantidadPersonas<10)
	{
		cantidadPersonas=cantidadPersonas+1
		ingreseNombre=prompt("Ingrese su nombre");
		ingreseEdad=prompt("Ingrese su edad entre 0 y 100");
		ingreseEdad=parseInt(ingreseEdad);
		while(ingreseEdad<0 || ingreseEdad>100)
		{
			ingreseEdad=prompt("ERROR, ingrese una edad valida");
		}

		ingresePeso=prompt("ingrese su peso entre 0 y 300");
		ingresePeso=parseInt(ingresePeso);
		while(ingresePeso<0 || ingresePeso>300)
		{
			ingresePeso=prompt("ERROR, ingrese peso valido");
		}

		ingreseTemperatura=prompt("Ingrese su temperatura corporal entre 0 y 50");
		ingreseTemperatura=parseInt(ingreseTemperatura);
		while(ingreseTemperatura<0 || ingreseTemperatura>50)
		{
			ingreseTemperatura=prompt("ERROR, ingrese una temperatura corporal valida");
		}

		ingreseSexo=prompt("Ingrese sexo valido(M, F, O NB)");
		switch(ingreseSexo)
		{
			case "m":
			break;

			case "f":
			break;

			case "nb":
			break;

			default:
			ingreseSexo=prompt("ERROR, ingrese sexo valido")
			break;
		}

		estadoCivil=prompt("Ingrese su estado civil: c(casado), s(soltero) o d(divorciado)");
		switch(estadoCivil)
		{
			case "c":
				if(ingreseTemperatura>36)
				{
					cantidadCasadosConFiebre=cantidadCasadosConFiebre+1;
				}
				cantidadCasados=cantidadCasados+1;
			break;

			case "s":
				cantidadSolteros=cantidadSolteros+1;
			break;

			case "d":
				cantidadDivorciados=cantidadDivorciados+1;
			break;

			default:
				estadoCivil=prompt("ERROR, ingrese estad civil valido");
			break;
		}

		if(cantidadPersonas==1)
		{
			pesoMasPesado=ingresePeso;
			nombreMasPesado=ingreseNombre;
			edadMasPesado=ingreseEdad;
			sexoMasPesado=ingreseSexo;
		}
	}
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
	document.write("<br>A V1)Cuantos casados tienen fiebre: " + cantidadCasadosConFiebre);
	document.write("<br>B V1)Nombre edad y sexo del mas pesado:su nombre es " + nombreMasPesado + ", su edad es " + edadMasPesado + ", y su sexo es " + sexoMasPesado);
	document.write("<br>C V1)¿Hay mas casados, solteros o divorciados?:Hay mas " + masEstadoCivil);
}*/














































































//PARCIAL 07 2018
//Bracamonte Santiago
/*
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/
/*
function mostrar()
{
	let contadorDeAlumnos;
	let notaIngresada;
	let sumaDeNotas;
	let sexo;
	let promedioDeNotas;
	let cantidadDeVarones;
	let cantidadDeMujeres;
	let banderaPrimerMujer;
	let notaPrimerMujer;
	let notaMasBaja;
	let notaMasBajaSexo;
	let cantidadDeAprobados;
	let sexoMasDesaprobado;
	let cantidadDeDesaprobados;
	let cantidadDeAprobadosMujer;
	let cantidadDeAprobadosVaron;
	let cantidadDeReprobadosVaron;
	let cantidadDeReprobadosMujer;
	let sexoFemenino;
	let sexoMasculino;
	let contadorSexoMasculino;
	let contadorSexoFemenino;
	let cantidadDeReprobados;
	let promedioDeNotasAprobadas;
	let promedioDeNotasMujer;
	let sumaDeNotasAprobadas;
	let contadorAlumnosAprobados;
	let sumaDeNotasMujer;
	let sexoIngresado;


	sexoFemenino="f";
	sexoMasculino="m";
	contadorDeAlumnos=0;
	sumaDeNotas=0;
	banderaPrimerMujer=0;
	cantidadDeVarones=0;
	cantidadDeMujeres=0;
	cantidadDeAprobados=0;
	sexoMasDesaprobado=0;
	cantidadDeDesaprobados=0;
	contadorSexoMasculino=0;
	contadorSexoFemenino=0;
	cantidadDeReprobados=0;
	sumaDeNotasAprobadas=0;
	contadorAlumnosAprobados=0;
	sumaDeNotasMujer=0;

	while(contadorDeAlumnos<5)
	{

		contadorDeAlumnos=contadorDeAlumnos+1;

		notaIngresada=prompt("ingrese nota");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("error ,reingrese nota");
			notaIngresada=parseInt(notaIngresada);
		}

		sexo=prompt("ingrese sexo");
		while(sexo!=sexoFemenino && sexo!=sexoMasculino)
		{
			sexo=prompt("error ,reingrese sexo");
		}

		sumaDeNotas=sumaDeNotas+notaIngresada;
		//sumaDeNotasMujer=sumaDeNotasMujer+1

		if(contadorDeAlumnos==1)
		{
			notaMasBaja=notaIngresada;
			notaMasBajaSexo=sexo;
		}
		else
		{
			if(notaIngresada<notaMasBaja)
			{
				notaMasBaja=notaIngresada;
				notaMasBajaSexo=sexo;
			}
		}
		
		if(sexo==sexoMasculino)
		{
			if(notaIngresada>5)
			{
				cantidadDeVarones=cantidadDeVarones+1
			}
		}
		else
		{
			if(banderaPrimerMujer==0)
			{
				banderaPrimerMujer=1;
				notaPrimerMujer=notaIngresada;
			}
			
		}
		switch(sexo)
		{
			case "m":
			sexoIngresado="masculino";
			contadorSexoMasculino=contadorSexoMasculino+1;
			break;

			default:
			sexoIngresado="femenino";
			contadorSexoFemenino=contadorSexoFemenino+1;
			sumaDeNotasMujer=sumaDeNotasMujer+notaIngresada;
			break;
		}
		if(notaIngresada>5)
		{
			cantidadDeAprobadosMujer=cantidadDeAprobados+contadorSexoFemenino;
			cantidadDeAprobadosVaron=cantidadDeAprobados+contadorSexoMasculino;
			sumaDeNotasAprobadas=sumaDeNotasAprobadas+notaIngresada;
			contadorAlumnosAprobados=contadorAlumnosAprobados+1;
		}
		else
		{
			if(notaIngresada<6)
			{
				cantidadDeReprobadosMujer=cantidadDeReprobados+contadorSexoFemenino;
				cantidadDeReprobadosVaron=cantidadDeReprobados+contadorSexoMasculino;

				if(cantidadDeReprobadosMujer>cantidadDeReprobadosVaron)
				{
					sexoMasDesaprobado=sexoFemenino;
				}
				else
				{
					sexoMasDesaprobado=sexoMasculino;
				}
			}
		}	
	}	


	promedioDeNotas=sumaDeNotas/contadorDeAlumnos;
	promedioDeNotasAprobadas=sumaDeNotasAprobadas/contadorAlumnosAprobados;
	promedioDeNotasMujer=sumaDeNotasMujer/contadorSexoFemenino;
	
	alert("A)Promedio de notas: " + promedioDeNotas + ".  B)Nota mas baja: " + notaMasBaja + "(" + notaMasBajaSexo + ").  C)Cantidad de varones con nota mayor o igual a 6: " + cantidadDeVarones + ".  D)Nota de la primer mujer ingresada: " + notaPrimerMujer + ".  E)Cantidad de alumnos aprobados de cada sexo: " + cantidadDeAprobadosMujer + "(F) y " + cantidadDeAprobadosVaron + "(M). F)Sexo que mas desaprobo:(" + sexoMasDesaprobado + "). G)Promedio de notas aprobadas: " + promedioDeNotasAprobadas + ". H)Promedio de notas de las mujeres: " + promedioDeNotasMujer);
}*/
