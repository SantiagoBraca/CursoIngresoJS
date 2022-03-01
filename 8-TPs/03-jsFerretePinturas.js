/*3.
TP 3
Bracamonte Santiago
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 	
	let gCentigrados;
	let resta;
	let temperatura;
	let resultado;

	temperatura=document.getElementById('txtIdTemperatura').value;

	gCentigrados=parseInt(gCentigrados)
	resta=parseInt(resta)
	temperatura=parseInt(temperatura)

	temperatura=temperatura
	resta=temperatura-32
	gCentigrados=resta/1.8
	resultado=gCentigrados


	document.getElementById('txtIdTemperatura').value=gCentigrados;

	alert("El resultado de la conversion de " + temperatura + " grados Fahrenheit a grados Centígrados es: " + gCentigrados)


}	

function CentigradosFahrenheit () 
{
	let gFahrenheit;
	let resta;
	let temperatura;
	let resultado;

	temperatura=document.getElementById('txtIdTemperatura').value;

	gFahrenheit=parseInt(gFahrenheit)
	resta=parseInt(resta)
	temperatura=parseInt(temperatura)

	temperatura=temperatura
	resta=temperatura*1.8
	gFahrenheit=resta+32
	resultado=gFahrenheit

	document.getElementById('txtIdTemperatura').value=gFahrenheit;

	alert("Si convertimos " + temperatura + " grados Centígrados a grados Fahrenheit podemos hallar que su valor pasa de " + temperatura + " a " + resultado); 
}
