//IF 3
//Bracamonte Santiago
function mostrar()
{
	let edad;//tomo la edad  

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if(edad<18)
	{
		alert("Su edad es " + edad + ", usted es menor de edad");
	}

	if(edad>18)
	{
		alert("Su edad es " + edad + ", usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN