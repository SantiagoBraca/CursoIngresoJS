//WHILE 5
//Bracamonte Santiago
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Ingrese femenino o masculino?");

	while(sexoIngresado!="femenino" && sexoIngresado!="masculino")
	{
		sexoIngresado=prompt("Error, por favor Ingrese su sexo");
	}

	alert("Su sexo es " + sexoIngresado);

	document.getElementById('txtIdSexo').value=sexoIngresado;
}//FIN DE LA FUNCIÓN

//||