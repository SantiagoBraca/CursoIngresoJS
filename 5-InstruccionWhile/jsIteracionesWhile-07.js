/*WHILE 07 V2
//Bracamonte Santiago
While…

Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN

1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
	
2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad de la máxima temperatura 
	f)la altura y nota  del no binario mas joven

3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

*/
function mostrar()
{
	let alturaEnCentimetros;
	let edadIngresada;
	let temperatura;
	let sexoIngresado;
	let notaIngresada;
	let nombreIngresado;
	let cantidadDeEstudiantesDeLaUTN;
	let cantidadDeMujeres;
	let cantidadDeVarones;
	let cantidadDeNoBinarios;
	let personasConFiebre;
	let personasSinFiebre;
	let promedioDeEdadPorSexoMasculino;
	let promedioDeEdadPorSexoFemenino;
	let promedioDeEdadPorSexoNoBinario;
	let sumaDeEdades;
	let nombrePrimerAlumnoAprobado;
	let notaPrimerAlumnoAprobado;
	let banderaTemperaturaMaxima;
	let nombrePersonaConTemperaturaMaxima;
	let edadTemperaturaMaxima;
	let banderaNoBinarioMasJoven;
	let alturaNoBinarioMasJoven;
	let notaNoBinarioMasJoven;
	let banderaMujerMasAlta;
	let nombreMujerMasAlta;
	let alturaMujerMasAlta;
	let banderaPrimerAlumnoAprobado;
	let cantidadDeAprobados;
	let cantidadDeDesaprobados;
	let porcentajeDesaprobados;
	let banderaPrimerHombre;
	let primerHombre;
	let acumuladorEdadMujer;
	let acumuladorEdadVaron;
	let acumuladorEdadNoBinario;

	//Banderas
	banderaTemperaturaMaxima="es la maxima";
	banderaNoBinarioMasJoven="es el mas joven";
	banderaMujerMasAlta="es la mas alta";
	banderaPrimerAlumnoAprobado="es el primer";
	banderaPrimerHombre="es el primero";

	//Contadores
	cantidadDeEstudiantesDeLaUTN=0;
	cantidadDeMujeres=0;
	cantidadDeVarones=0;
	cantidadDeNoBinarios=0;
	personasConFiebre=0;
	personasSinFiebre=0;
	sumaDeEdades=0;
	cantidadDeAprobados=0;
	cantidadDeDesaprobados=0;
	acumuladorEdadMujer=0;
	acumuladorEdadVaron=0;
	acumuladorEdadNoBinario=0;
	

	while(cantidadDeEstudiantesDeLaUTN<2)
	{
		cantidadDeEstudiantesDeLaUTN=cantidadDeEstudiantesDeLaUTN+1;

		//1-alturas en centimetros	(validar entre 0 y 250)
		alturaEnCentimetros=prompt("Ingrese su altura en centimetros, valida entre 0 y 250");
		alturaEnCentimetros=parseInt(alturaEnCentimetros);
		while(alturaEnCentimetros<0 || alturaEnCentimetros>250)
		{
			alturaEnCentimetros=prompt("ERROR, ingrese una altura valida");
			alturaEnCentimetros=parseInt(alturaEnCentimetros);
		}

		//2-la edad (validar)
		edadIngresada=prompt("Ingrese su edad, valida entre 18 y 99 años");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<18 || edadIngresada>99)	
		{
			edadIngresada=prompt("ERROR, ingrese edad valida");
			edadIngresada=parseInt(edadIngresada);
		}

		//C 0.5)Sumo las edades para promediarlas por el sexo
		sumaDeEdades=sumaDeEdades+edadIngresada;

		//3-temperatura(validar)
		temperatura=prompt("Ingrese su temperatura, valida entre 32 y 43");
		temperatura=parseInt(temperatura);
		while(temperatura<32 || temperatura>43)
		{
			temperatura=prompt("ERROR, ingrese temperatura valida");	
			temperatura=parseInt(temperatura);
		}

		//4-el sexo(validar el sexo “f” o “m” o "nb")
		sexoIngresado=prompt("Ingrese su sexo, F(Femenino), M(Masculino), NB(No Binario");
		switch(sexoIngresado)
		{
			case "f":
				//a)Cuántas mujeres hay
				cantidadDeMujeres=cantidadDeMujeres+1;
				acumuladorEdadMujer=acumuladorEdadMujer+edadIngresada;
			break;

			case "m":
				cantidadDeVarones=cantidadDeVarones+1;
				acumuladorEdadVaron=acumuladorEdadVaron+edadIngresada;
			break;

			case "nb":
				cantidadDeNoBinarios=cantidadDeNoBinarios+1;
				acumuladorEdadNoBinario=acumuladorEdadNoBinario+edadIngresada;
			break;

			default:
				sexoIngresado=prompt("ERROR, ingrese un sexo valido");
			break;
		}

		//5-nota (validar)
		notaIngresada=prompt("Ingrese su nota aqui, valida entre 0 y 10");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("ERROR, ingrese una nota valida");
			notaIngresada=parseInt(notaIngresada);
		}

		//6-nombre de 5 estudiantes de la UTN
		nombreIngresado=prompt("Ingrese su nombre aqui");

		//b)Cuántos con fiebre y cuantos sin fiebre.
		if(temperatura>36)
		{
			personasConFiebre=personasConFiebre+1;
		}
		else
		{
			personasSinFiebre=personasSinFiebre+1;
		}

		//d)el primer alumno aprobado
		if(notaIngresada>3)
		{
			if(banderaPrimerAlumnoAprobado=="es el primer")
			{
				notaPrimerAlumnoAprobado=notaIngresada;
				nombrePrimerAlumnoAprobado=nombreIngresado;
				banderaPrimerAlumnoAprobado="ya no";
			}
			else
			{
				if(cantidadDeEstudiantesDeLaUTN>banderaPrimerAlumnoAprobado)
				{
					notaPrimerAlumnoAprobado=notaIngresada;
					nombrePrimerAlumnoAprobado=nombreIngresado;
				}
			}
		}
		//e)el nombre y edad de la máxima temperatura 
		if(banderaTemperaturaMaxima=="es la maxima")
		{
			banderaTemperaturaMaxima="ya no";
			nombrePersonaConTemperaturaMaxima=nombreIngresado;
			edadTemperaturaMaxima=edadIngresada;			
		}
		else
		{
			if(temperatura>banderaTemperaturaMaxima)
			{
				nombrePersonaConTemperaturaMaxima=nombreIngresado;
				edadTemperaturaMaxima=edadIngresada;	
			}
		}
		//F)La altura y nota  del no binario mas joven
		if(banderaNoBinarioMasJoven=="es el mas joven" && sexoIngresado=="nb")
		{
			banderaNoBinarioMasJoven="ya no";
			alturaNoBinarioMasJoven=alturaEnCentimetros;
			notaNoBinarioMasJoven=notaIngresada;
		}
		else
		{
			if(edadIngresada>banderaNoBinarioMasJoven)
			{
				alturaNoBinarioMasJoven=alturaEnCentimetros;
				notaNoBinarioMasJoven=notaIngresada;
			}
		}
		//G)el nombre de la mujer más alta de las que aprobó
		if(notaIngresada>3 && sexoIngresado=="f")
		{
			if(alturaMujerMasAlta<alturaEnCentimetros || banderaMujerMasAlta=="es la mas alta")
			{
				alturaMujerMasAlta=alturaEnCentimetros;
				nombreMujerMasAlta=nombreIngresado;
				banderaMujerMasAlta="ya no";
			}
		}

		//H)el porcentaje de  personas que desaprobaron sobre el total
		if(notaIngresada>3)
		{
			cantidadDeAprobados=cantidadDeAprobados+1
		}
		else
		{
			cantidadDeDesaprobados=cantidadDeDesaprobados+1
		}

		//I)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
		if(alturaEnCentimetros<160 && notaIngresada<4 && sexoIngresado=="m" && banderaPrimerHombre=="es el primero")
		{
			primerHombre=nombreIngresado;
			banderaPrimerHombre="no es";
		}
	}
	//c)el promedio de edad por sexo.
	promedioDeEdadPorSexoMasculino=acumuladorEdadVaron/cantidadDeEstudiantesDeLaUTN;
	promedioDeEdadPorSexoFemenino=acumuladorEdadMujer/cantidadDeEstudiantesDeLaUTN;
	promedioDeEdadPorSexoNoBinario=acumuladorEdadNoBinario/cantidadDeEstudiantesDeLaUTN;

	//H)el porcentaje de  personas que desaprobaron sobre el total
	porcentajeDesaprobados=((cantidadDeEstudiantesDeLaUTN*100)/cantidadDeDesaprobados);

	//PARTE 1
	document.write("<br>A)Cuantas mujeres hay: " + cantidadDeMujeres);
	document.write("<br>B)Cuántos con fiebre y cuantos sin fiebre:  con fiebre hay: " + personasConFiebre + ", y sin fiebre hay: " + personasSinFiebre);
	document.write("<br>C)Promedio de edad por sexo:" + promedioDeEdadPorSexoFemenino + "(F), " + promedioDeEdadPorSexoMasculino + "(M), " + promedioDeEdadPorSexoNoBinario + "(NB)");

	//PARTE 2
	document.write("<br>D)El primer alumno aprobado: " + nombrePrimerAlumnoAprobado + "(" +  notaPrimerAlumnoAprobado + ")");
	document.write("<br>E)El nombre y edad de la máxima temperatura:" + nombrePersonaConTemperaturaMaxima + ", y su edad es " + edadTemperaturaMaxima);
	document.write("<br>F)La altura y nota del no binario mas joven: Altura;" + alturaNoBinarioMasJoven + ", Nota; " + notaNoBinarioMasJoven)

	//PARTE 3
	document.write("<br>G)el nombre de la mujer más alta de las que aprobó:" + nombreMujerMasAlta);
	document.write("<br>H)el porcentaje de  personas que desaprobaron sobre el total:" + porcentajeDesaprobados);
	document.write("<br>I)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.:" + primerHombre);
}//FIN DE LA FUNCIÓN




































































































/*WHILE 07 V1
//Bracamonte Santiago
While…

Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN

1ERA PARTE
	informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	 los 190 centímetros.

2da PARTE
	informar :
	e)Que sexo tiene mas alumnos
	f)el nombre de la persona más alta 
	g)la edad de la primera persona con fiebre (más de 37)

3ra PARTE
	informar :
	h)el nombre de la primer mujer aprobada
	i) la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

4ta PARTE
informar :
k)	Qué porcentaje de aprobados hay sobre el total de alumnos
l)	La nota y el nombre  del primer varón más alto de 200cm 
m)	Qué porcentaje hay de personas con fiebre mayores a 50 años , 
*sobre los que tienen fiebre .
*y también sobre el total de Alumnos.

*/
/*function mostrar()
{
	let alturaEnCentimetros;
	let edadIngresada;
	let temperatura;
	let sexoIngresado;
	let notaIngresada;
	let nombreIngresado;
	let estudiantesDeLaUTN;

	estudiantesDeLaUTN=0;

	while(estudiantesDeLaUTN<5)
	{
		estudiantesDeLaUTN=estudiantesDeLaUTN+1;
		//1-alturas en centimetros	(validar entre 0 y 250)
		alturaEnCentimetros=prompt("Ingrese su altura en centimetros, valida entre 0 y 250");
		alturaEnCentimetros=parseInt(alturaEnCentimetros);
		while(alturaEnCentimetros<0 || alturaEnCentimetros>250)
		{
			alturaEnCentimetros=prompt("ERROR, ingrese una altura valida");
			alturaEnCentimetros=parseInt(alturaEnCentimetros);
		}
		//2-la edad (validar)
		edadIngresada=prompt("Ingrese su edad, valida entre 0 y 99 años");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>99)	
		{
			edadIngresada=prompt("ERROR, ingrese edad valida");
			edadIngresada=parseInt(edadIngresada);
		}

}//FIN DE LA FUNCIÓN
*/