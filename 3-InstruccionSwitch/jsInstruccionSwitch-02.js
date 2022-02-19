//SWITCH 2
//Bracamonte Santiago
function mostrar()
{
	var mesDelAño 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Enero":
			alert("Falta para el invierno.");
		break;

		case "Febrero":
			alert("Falta para el invierno.");
		break;

		case "Marzo":
			alert("Falta para el invierno.");
		break;

		case "Abril":
			alert("Falta para el invierno.");
		break;

		case "Mayo":
			alert("Falta para el invierno.");
		break;

		case "Junio":
			alert("Falta para el invierno.");
		break;

		case "Julio":
			alert("Abrigate que hace frio.");
		break;

		case "Agosto":
			alert("Abrigate que hace frio.");
		break;

		default:
			alert("Ya pasamos el frio, ahora hace calor!!!");
		break;
	}
}//FIN DE LA FUNCIÓN