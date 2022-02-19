//Switch 1
//Bracamonte Santiago
function mostrar()
{
	//tomo el mes
	var mesDelAño 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Enero":
			alert("¡Que comiences bien el año!");
		break;

		case "Marzo":
			alert("Arrancan las clases");
		break;

		case "Julio":
			alert("¡Vacaciones!");
		break;

		case "Diciembre":
			alert("¡Felices fiestas!");
		break;

		default:
			alert(" no es ahora");
		break;
		
	}


}//FIN DE LA FUNCIÓN

//Dentro del switch puede haber un if/else
//default solo hay uno y es para lo que no haya en case
