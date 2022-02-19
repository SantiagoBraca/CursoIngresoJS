//IF 8
// Bracamonte Santiago
function mostrar()
{
	let edad;
	let estadoCivil;
	let soltero;

	edad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	
	edad=parseInt(edad);

	if(edad<18)
	{
			alert("Su edad es " + edad + " y su estado civil es: " + estadoCivil);	
	}
	else
	{
		if(estadoCivil=="Soltero" && edad>17)
		{
		alert("Su edad es " + edad + " y su estado civil es: " + estadoCivil + ". Es soltero y no es menor");
		}
		else
		{ 
			alert("Su edad es " + edad + " y su estado civil es: " + estadoCivil);
		}
	}
}//FIN DE LA FUNCIÓN