//Parcial 3 (2018)
//Bracamonte Santiago
function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;
	let cuenta;

	//UTILIZO =PROMPT PARA INTRODUCIR ALGO EN LA BURBUJA
	precio=prompt("Introduzca aqui el valor que desea");
	descuento=prompt("Escriba aqui el porcentaje de descuento");

	//UTILIZO PARSEINT PARA DARLE UN VALOR NUMERICO
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	//REALIZO LA OPERACION DE DESCUENTO(DESCUENTO/100*PRECIO= PRECIO-RESULTADO DE LA CUENTA ANTERIOR)
	cuenta=((descuento/100) * precio);
	precioFinal=precio-cuenta;

	document.getElementById('elPrecioFinal').value=precioFinal;

}
