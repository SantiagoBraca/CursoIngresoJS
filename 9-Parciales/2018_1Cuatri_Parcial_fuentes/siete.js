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

function mostrar()
{
	let contadorDeAlumnos;
	let notaIngresada;
	let sumaDeNotas;
	let sexo;
	let promedioDeNotas;
	let cantidadDeVarones;
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


	sexoFemenino="f";
	sexoMasculino="m";
	contadorDeAlumnos=0;
	sumaDeNotas=0;
	banderaPrimerMujer=0;
	cantidadDeVarones=0;
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
		sumaDeNotasMujer=sumaDeNotasMujer+1

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
			contadorSexoFemenino=contadorSexoFemenino+1
			break
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
}

