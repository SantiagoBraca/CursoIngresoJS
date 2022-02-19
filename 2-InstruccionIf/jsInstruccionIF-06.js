//IF 6
//Bracamonte Santiago
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Su edad es " + edad + ", usted es mayor de edad");
	}
	else
	{	
		if(edad<13)
		{
		alert("Su edad es " + edad + ", usted es menor de edad");
		}	
		else
		{
		alert("Su edad es " + edad + ", usted es adolescente");
		}
	}
}//FIN DE LA FUNCIÓN

//else if no se debe usar porque faltan las llaves("{}") del else