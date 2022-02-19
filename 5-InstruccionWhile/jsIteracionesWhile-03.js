//SWITCH 3
//Bracamonte Santiago
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Error, reingrese");
	}

	alert("Bienvenido");

	/*if(claveIngresada!= "utn750")
	{
		claveIngresada = prompt("Error, reingrese");

		if(claveIngresada!= "utn750")
		{
		claveIngresada = prompt("Error, reingrese");
		}
		else
		{
			alert("Bienvenido");
		}
	}
	else
	{
		alert("Bienvenido");
	}
	*/
	
}//FIN DE LA FUNCIÓN
