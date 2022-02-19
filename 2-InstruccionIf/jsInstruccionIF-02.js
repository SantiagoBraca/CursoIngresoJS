//IF 2
//Bracamonte Santiago
function mostrar()
{
	let edad//tomo la edad  

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	alert("Su edad es " + edad);

	if(edad==18)
	{
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN