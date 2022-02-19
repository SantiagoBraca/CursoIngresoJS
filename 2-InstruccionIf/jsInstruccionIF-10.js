//IF 10
//Bracamonte Santiago
function mostrar()
{
	let mostrar;
	let mensaje;

	mostrar=Math.floor(Math.random() * 10) + 1;

	if(mostrar>8 && mostrar<11)
	{
		mensaje="EXCELENTE. Nota: ";
	}
	else
	{
		if(mostrar>3 && mostrar<9)
		{
			mensaje="APROBO. Nota: ";
		}
		else
		{
			mensaje="Vamos, la proxima se puede. Nota: ";
		}
	}
	alert(mensaje + mostrar);
}//FIN DE LA FUNCIÓN