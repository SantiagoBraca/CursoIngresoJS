//Switch 8
//Bracamonte Santiago
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje=("En esta ubicacion hace CALOR");
		break;

		default:
			mensaje=("En esta ubicacion hace FRIO");
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN