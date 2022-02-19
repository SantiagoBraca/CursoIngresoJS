//SWITCH 3
//Bracamonte Santiago
function mostrar()
{
	var mesDelAño 
	mesDelAño=document.getElementById('txtIdMes').value;
	//alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
		break;

		default:
			alert("Este mes tiene 30 dias o mas");
		break;
	}
}//FIN DE LA FUNCIÓN