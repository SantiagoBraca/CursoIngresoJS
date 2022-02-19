//Parcial 2 (2019)
//Bracamonte Santiago

function mostrar()

{
  	let personaUno;
	let personaDos;
	let pesoUno;
	let pesoDos;
	let sumar;
	let promedio;

	personaUno=prompt("Ingrese aqui su nombre, usuario 1");
	personaDos=prompt("Por favor, ingrese su nombre, usuario 2");
	pesoUno=prompt("Ingrese su peso aqui " + personaUno);
	pesoDos=prompt("Por favor escriba su peso aqui " + personaDos);

	pesoUno=parseInt(pesoUno);
	pesoDos=parseInt(pesoDos);

	sumar=pesoUno+pesoDos;
	promedio=sumar/2;

	alert("Ustedes se llaman " + personaUno + " y " + personaDos + " y pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + sumar + " kilos, y el promedio de peso es: " + promedio);

}
