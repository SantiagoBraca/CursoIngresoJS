/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random() * 100) + 1;

	alert("¡Numero secreto generado!")

}
	
function verificar()
{
	let numero;

	numero=document.getElementById('txtIdNumero').value;
	
	numero=parseInt(numero);
	numeroSecreto=parseInt(numeroSecreto);

	document.getElementById('txtIdIntentos').value=contadorIntentos;

	if(numero==numeroSecreto)
	{
			alert("¡Felicidades! usted ha ganado el juego, y solo en " + contadorIntentos + " intentos");
	}
	else
	{
		if(numero<numeroSecreto)
		{
			alert("Estas cerca, solo unos numeros mas!");
		}
		else
		{ 
			alert("Te pasaste, proba con un numero mas bajo");		
		}
	}
}
	