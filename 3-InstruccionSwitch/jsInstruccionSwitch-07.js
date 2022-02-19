//Switch 7
//Bracamonte Santiago
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	//Punto de inicio: Buenos Aires
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje=("Se encuentra al sur");
		break;

		case "Cataratas":
			mensaje=("Se encuentra al norte");
		break;

		case "Mar del plata":
			mensaje=("Se encuentra al sur");
		break;

		case "Ushuaia":
			mensaje=("Se encuentra al sur");
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN
