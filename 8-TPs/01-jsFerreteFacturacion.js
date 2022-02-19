/*1.	Para el departamento de facturación:
TP 1
Bracamonte Santiago
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 	
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	//DocumentID para coocar las id y .value para darle un valor
	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;
	
	//APLICO parseInt 
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	//SUMO los productos con "+"(Resto con "-", Multiplico con "*", Divido con "/" y para obtener el resto "%")
	suma=precioUno+precioDos+precioTres

	alert("La suma de " + precioUno + ", " + precioDos + " y " + precioTres + " es: " + suma);
	
	
}
function Promedio () 
{ 	
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;

	alert("El promedio de " + suma + "(suma entre " + precioUno + ", " + precioDos + " y " + precioTres + ") es: " + promedio);





}
function PrecioFinal () 
{ 
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let iva;
	let resultado;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	iva=((21/100)*suma)
	resultado=iva+suma

	alert("El resultado de la suma entre " +  precioUno + ", " + precioDos + " y " + precioTres + " con un recargo del 21% es: " + resultado);
	

}
    