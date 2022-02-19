//WHILE 4
//Bracamonte Santiago
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado>9 || numeroIngresado<0)
	{
		numeroIngresado = prompt("Error");
	}

	document.getElementById('txtIdNumero').value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN
