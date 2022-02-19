//IF 5
//Bracamonte Santiago
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if(edad<13)
	{	
		alert("Su edad es " + edad + ", usted NO es adolescente");
	}
	
	if(edad>17)
	{
		alert("Su edad es " + edad + ", usted NO es adolescente");
	}
}//FIN DE LA FUNCIÓN

//if(edad<13 ||	edad>17) esta bien
//if(!(edad<13 || edad>17)) esta bien pero el "!" cambia al revez la operacion