//SWITCH 9
//Bracamonte Santiago
function mostrar()
{
	var estacionIngresada; 
	var destinoIngresado;
	var mensaje;
	var tarifa;
	var porcentaje;
	var tarifaCalculo;
	var tarifaFinal;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	tarifa=15000

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
				porcentaje=20
 			break;

			case "Mar del plata":
				porcentaje=-20
 			break;

 			default:
 				porcentaje=-10
 			break;
		}
		break;

		case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
				porcentaje=-20
 			break;

			case "Mar del plata":
				porcentaje=20
 			break;

 			default:
 				porcentaje=10
 			break;
		}
		break;

		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Cordoba":
				tarifa=15000
			break;

			default:
				porcentaje=10
 			break;
 		}
	}	

	tarifaCalculo = ((tarifa*porcentaje)/100);
 	tarifaFinal= tarifa+tarifaCalculo;
 	
	alert(tarifaFinal);

}//FIN DE LA FUNCIÓN