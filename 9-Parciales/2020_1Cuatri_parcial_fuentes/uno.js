/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let contadorProductosPrevencionDeContagio;
	let tipoDeProducto;
	let precioProductos;
	let unidades;
	let marcaDelProducto;
	let fabricanteDelProducto;
	let banderaDelMasBarato;
	let unidadesMasBarato;
	let fabricanteMasBarato;
	let alcoholMasBarato;
	let mayorUnidad;
	let banderaDeMasUnidad;
	let promedioMayorCompra;
	let sumaDeUnidades;
	let cantidadUnidadesAlcohol;
	let cantidadUnidadesJabon;
	let cantidadUnidadesBarbijos;
	let cantidadUnidadesDetergente;
	let cantidadUnidadesLavandina;


	banderaDelMasBarato="es el mas barato";
	banderaDeMasUnidad="tiene mas unidades";

	contadorProductosPrevencionDeContagio=0;
	cantidadDeJabones=0;
	sumaDeUnidades=0;
	cantidadUnidadesAlcohol=0;
	cantidadUnidadesBarbijos=0;
	cantidadUnidadesJabon=0;
	cantidadUnidadesDetergente=0;
	cantidadUnidadesLavandina=0;

	while(contadorProductosPrevencionDeContagio<2)
	{
		contadorProductosPrevencionDeContagio=contadorProductosPrevencionDeContagio+1;

		tipoDeProducto=prompt("Ingrese el tipo de producto de prevención de contagio aqui");
		while(tipoDeProducto!="jabon" && tipoDeProducto!="alcohol" && tipoDeProducto!="barbijo" && tipoDeProducto!="detergente" && tipoDeProducto!="lavandina")
		{
			tipoDeProducto=prompt("ERROR, ingrese producto valido");
		}
		precioProductos=prompt("Ingrese el precio, valido entre 100 y 300");
		precioProductos=parseInt(precioProductos);
		while(precioProductos<100 || precioProductos>300)
		{
			precioProductos=prompt("ERROR, ingrese precio valido");
		}
		unidades=prompt("Ingrese la cantidad de unidades, valida entre 1 y 1000");
		unidades=parseInt(unidades);
		while(unidades<1 || unidades>1000)
		{
			unidades=prompt("ERROR, ingrese cantidad de unidades valida");
		}
		//cantidadDeUnidades=cantidadDeUnidades+1
		sumaDeUnidades=sumaDeUnidades+unidades;

		marcaDelProducto=prompt("Ingrese la marca");
		fabricanteDelProducto=prompt("Ingrese el fabricante");

		if(tipoDeProducto=="alcohol" || alcoholMasBarato<precioProductos || banderaDelMasBarato=="es el mas barato")
		{
			unidadesMasBarato=unidades;
			fabricanteMasBarato=fabricanteDelProducto;
			alcoholMasBarato=precioProductos;
			banderaDelMasBarato="ya no es el mas barato";
		}

		if(mayorUnidad<unidades || banderaDeMasUnidad=="tiene mas unidades")
		{
			mayorUnidad=unidades;
			banderaDeMasUnidad="ya no tiene mas unidades";
		}
		
		if(tipoDeProducto=="jabon")
		{
			if(unidades=="jabon")
			{
				cantidadUnidadesJabon=cantidadUnidadesJabon+unidades;
			}
		}		
	}
	promedioMayorCompra=sumaDeUnidades/mayorUnidad;

	document.write("<br>A) Del más barato de los alcohol, la cantidad de unidades y el fabricante: " + alcoholMasBarato + ", " + unidadesMasBarato + ", " + fabricanteMasBarato);

	document.write("<br>B) Del tipo con mas unidades, el promedio por compra: " + promedioMayorCompra + "(cantidad de la mayor unidad:" + mayorUnidad + ")");

	document.write("<br>C) Cuántas unidades de jabones hay en total: " + cantidadUnidadesJabon)

}
		


