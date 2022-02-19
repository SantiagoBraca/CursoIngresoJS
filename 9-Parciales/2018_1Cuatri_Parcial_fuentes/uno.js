//Parcial 1
//Bracamonte Santiago
function mostrar()
{ 
	let ancho;
	let largo;
	let cuenta;

	ancho=prompt("Ingrese aqui su valor de ancho deseado");
	largo=prompt("Por favor, ingrese el valor de largo que desea");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	cuenta=ancho+largo;

	alert("Si sumamos " + ancho + " metros de ancho, y " + largo + " metros de largo, se llega al resultado de que " + cuenta + " es su perimetro ")
}
