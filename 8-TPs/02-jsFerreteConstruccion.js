/*2.	
TP 2 
Bracamonte Santiago
Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
	let largo;
	let ancho;
	let cuenta;
	let resultado;

	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	cuenta=largo+largo+ancho+ancho;
	resultado=cuenta*3;

	document.getElementById('txtIdRadio').value=resultado;

	alert("Se necesitan " + resultado + " metros de alambre para el terreno rectangular");

	
}
function Circulo () 
{
	let radio;
	let cuenta;
	let resultado;

	radio=document.getElementById('txtIdRadio').value;

	radio=parseInt(radio);

	cuenta=((radio*Math.PI)*2);
	resultado=cuenta*3;

	document.getElementById('txtIdRadio').value=resultado;

	alert("Se necesita comprar " + resultado + "  metros de alambre para llenar un terreno circular");
}
function Materiales () 
{
	let largo;
	let ancho;
	let cemento;
	let cal;
	let multiplicacionCemento;
	let multiplicacionCal;
	let totalCemento;
	let totalCal;

	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	cemento=2;
	cal=3;

	multiplicacionCemento=largo*ancho;
	totalCemento=multiplicacionCemento*2;

	multiplicacionCal=largo*ancho;
	totalCal=multiplicacionCal*3;

	alert("Se necesitaran " + totalCemento + " bolsas de cemento, y " + totalCal + " bolsas de cal");

	
}