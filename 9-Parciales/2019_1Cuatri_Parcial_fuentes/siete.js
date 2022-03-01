/*
Parcial 2019 EJ 7
Bracamonte Santiago
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/
function mostrar()
{
	let ingreseAltura;
	let ingreseSexo;
	let cantidadDeJugadores;
	let sumaDeAlturas;
	let promedioDeAlturas;
	let alturaMasBaja;
	let sexoPersonaDeAlturaMasBaja;
	let cantidadDeMujeresAltas;
	let cantidadDeVarones;
	let cantidadDeMujeres;

	cantidadDeJugadores=0;
	cantidadDeMujeresAltas=0;
	alturaMasBaja=0;

	while(cantidadDeJugadores<2)
	{
		cantidadDeJugadores=cantidadDeJugadores+1;
		ingreseAltura=prompt("Ingrese su altura en centimetros, ej 235(valida entre 0 y 250).", "Ingresar altura aqui")
		ingreseAltura=parseInt(ingreseAltura);
		while(ingreseAltura<0 || ingreseAltura>250)
		{
			ingreseAltura=prompt("ERROR, ingrese una altura valida");
			ingreseAltura=parseInt(ingreseAltura);

		}
		//a) El promedio de las alturas totales.
		sumaDeAlturas=sumaDeAlturas+ingreseAltura;
		sumaDeAlturas=parseInt(sumaDeAlturas);

		ingreseSexo=prompt("Por favor, ingrese su sexo.(F o M)", "Ingrese sexo")
		while(ingreseSexo!="m" && ingreseSexo!="f")
		{
			ingreseSexo=prompt("ERROR, ingrese sexo valido");
		}

		//c) La cantidad de mujeres que su altura supere los 190 centimetros.
		if(ingreseSexo=="f" && ingreseAltura>190)
		{
			cantidadDeMujeresAltas=cantidadDeMujeresAltas+1;
		}

		//b) La altura más baja y el sexo de esa persona.
		if(cantidadDeJugadores==1)
		{
			alturaMasBaja=ingreseAltura;
			sexoPersonaDeAlturaMasBaja=ingreseSexo;
		}
		else
		{
			if(ingreseAltura<alturaMasBaja)
			{
				alturaMasBaja=ingreseAltura;
				sexoPersonaDeAlturaMasBaja=ingreseSexo;
			}
		}
	}
	//a) El promedio de las alturas totales.
	promedioDeAlturas=sumaDeAlturas/cantidadDeJugadores;

	alert("A)Promedio de las alturas totales: " + promedioDeAlturas + ". B)Altura mas baja y el sexo de esa persona:su altura es " + alturaMasBaja + "(" + sexoPersonaDeAlturaMasBaja + "). " + "C)La cantidad de mujeres que su altura supere los 190 centimetros: " + cantidadDeMujeresAltas)
}
