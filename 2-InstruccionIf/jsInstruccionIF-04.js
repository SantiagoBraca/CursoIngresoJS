//IF 4
//Bracamonte Santiago
function mostrar()
{
	let edad

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if(edad>12)
	{	
		if(edad<18)
		{
			alert("Su edad es " + edad + ", usted  es adolescente");
		}
	}	
}//FIN DE LA FUNCIÓN

// if(edad>12 && edad<18) Esta bien, se usa el "&&" cuando un if va dentro del otro
//