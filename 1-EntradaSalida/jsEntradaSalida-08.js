/*
e/j 8
Bracamonte Santiago
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividiendo;
	let numeroDivisor;
	let dividiendo;

	numeroDividiendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;

	numeroDividiendo=parseInt(numeroDividiendo);
	numeroDivisor=parseInt(numeroDivisor);
 
	dividendo=numeroDividiendo%numeroDivisor
	
	alert("El resto final de la division es: "+dividendo);
}

