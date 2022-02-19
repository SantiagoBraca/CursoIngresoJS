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
	let cantidadVaronesMasCinco;
	let banderaPrimerMujer;
	let notaPrimerMujer;
	let notaMasBaja;



	contadorDeAlumnos=0;
	sumaDeNotas=0;
	banderaPrimerMujer=0;

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
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error ,reingrese sexo");
		}

		sumaDeNotas=sumaDeNotas+notaIngresada;


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

		if(sexo=="m")
		{
			if(notaIngresada>5)
			{
				cantidadVaronesMasCinco=cantidadVaronesMasCinco+1;
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


	}

	promedioDeNotas=sumaDeNotas/contadorDeAlumnos;

}

