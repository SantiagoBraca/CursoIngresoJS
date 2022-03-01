/*
Parcial 2019 EJ 9
Bracamonte Santiago
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
	let respuesta;
	let paisIngresado;
	let habitantes;
	let cantidadDeHabitantes;
	let contadorDeVueltas;
	let temperatura;
	let cantidadDeTemperaturasPares;
	let paisConMenosHabitantes;
	let menorCantidadHabitantes;
	let cantidadDePaisesArdiendo;
	let sumaDeHabitantes;
	let promedioHabitantes;
	let	banderaTemperaturaMinima;
	let	temperaturaMinima;
	let	paisConTemperaturaMinima;

	respuesta="si"

	contadorDeVueltas=0;

	cantidadDeHabitantes=0;
	cantidadDeTemperaturasPares=0;
	cantidadDePaisesArdiendo=0;
	sumaDeHabitantes=0;
	banderaTemperaturaMinima=0;

	while(respuesta=="si")//No olvidar el ==
	{
		contadorDeVueltas=contadorDeVueltas+1;
		//INGRESAR PAIS
		paisIngresado=prompt("Ingrese el nombre de un pais");

		//HABITANTES
		habitantes=prompt("Ingrese cantidad de habitantes valida, desde 1 hasta 7000(millones)");
		habitantes=parseInt(habitantes);
		while(habitantes<1 || habitantes>7000)
		{
			habitantes=prompt("ERROR, ingrese una cantidad de habitantes valida");
			habitantes=parseInt(habitantes);
		}
		cantidadDeHabitantes=cantidadDeHabitantes+1;
		//D 0.5) Suma de habitantes para luego sacar el promedio en el final
		sumaDeHabitantes=sumaDeHabitantes+habitantes;

		//TEMPERATURA
		temperatura=prompt("Ingrese una temperatura valida entre -50 y 50");
		temperatura=parseInt(temperatura);
		while(temperatura<-50 || temperatura>50)
		{
			temperatura=prompt("ERROR, reingrese una temperatura valida");
			temperatura=parseInt(temperatura);
		}
		//A) La cantidad de temperaturas pares.
		if(temperatura%2==0)
		{
			cantidadDeTemperaturasPares=cantidadDeTemperaturasPares+1;
		}
		//B) El nombre del pais con menos habitantes
		if(contadorDeVueltas==1)
		{
			paisConMenosHabitantes=paisIngresado;
			menorCantidadHabitantes=habitantes;
		}
		else
		{
			if(habitantes<menorCantidadHabitantes)
			{
				paisConMenosHabitantes=paisIngresado;
				menorCantidadHabitantes=habitantes;
			}
		}
		//C) la cantidad de paises que superan los 40 grados.
		if(temperatura>40)
		{
			cantidadDePaisesArdiendo=cantidadDePaisesArdiendo+1;
		}

		//F)la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if(banderaTemperaturaMinima=="es la minima")
		{
			banderaTemperaturaMinima="ya no";
			temperaturaMinima=temperatura;
			paisConTemperaturaMinima=paisIngresado;				
		}
		else
		{
			if(temperatura<banderaTemperaturaMinima)
			{
				temperaturaMinima=temperatura;
				paisConTemperaturaMinima=paisIngresado;	
			}
		}
		
	
		respuesta=prompt("Si desea continuar escriba SI, de lo contrario presione aceptar");
	}
	//D) el promedio de habitantes entre los paises ingresados
	promedioHabitantes=sumaDeHabitantes/cantidadDeHabitantes;

	document.write("<br>A) La cantidad de temperaturas pares es: " + cantidadDeTemperaturasPares);
	document.write("<br>B) El nombre del pais con menos habitantes es: " + paisConMenosHabitantes);
	document.write("<br>C) la cantidad de paises que superan los 40 grados es: " + cantidadDePaisesArdiendo);
	document.write("<br>D) El promedio de habitantes entre los paises ingresados: " + promedioHabitantes);
	document.write("<br>F) La temperatura mínima ingresada, y nombre del pais que registro esa temperatura: " + temperaturaMinima + " grados(" + paisConTemperaturaMinima + ")");



}
