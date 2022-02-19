/*
e/j BIS 10
Bracamonte Santiago
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;

	importe=parseInt(importe);

	descuento=((25/100)*importe);
	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value=resultado;

	alert("Hacerle un descuento del 25% a " + importe + " da como resultado " + resultado);
}
