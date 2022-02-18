/*e/j 7
Santiago Bracamonte
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
 
	suma=numeroUno+numeroDos
	
	alert("La suma de los siguientes es: "+suma);
}
function restar()
{	let numeroUno;
	let numeroDos;
	let Resta;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
 
	Resta=numeroUno-numeroDos
	
	alert("El resultado de la resta es: "+Resta);
	
}

function multiplicar()
{ 	let numeroUno;
	let numeroDos;
	let multiplicar;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
 
	multiplicar=numeroUno*numeroDos
	
	alert("El resultado alcanzado es: "+multiplicar);
	
}

function dividir()
{	let numeroUno;
	let numeroDos;
	let dividir;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
 
	dividir=numeroUno/numeroDos
	
	alert("Si dividimos numeroUno por numeroDos se llega al valor de: "+dividir);
	
}


