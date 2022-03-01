/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validar("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
    let respuesta;
    let contadorDeVueltas;
    let productoDeConstruccion;
    let cantidadBolsas;
    let precioBolsas;
    let porcentaje;
    let precioConDescuento;
    let sumaPrecioBolsas;

    respuesta="si"
    contadorDeVueltas=0;
    sumaPrecioBolsas=0;

    while(respuesta=="si")
    {
      contadorDeVueltas=contadorDeVueltas+1
      productoDeConstruccion=prompt("ingrese el tipo, arena, cal o cemento");
      while(productoDeConstruccion!="arena" && productoDeConstruccion!="cal" && productoDeConstruccion!="cemento");
      {
          productoDeConstruccion=prompt("ERROR, reingresar prod. valido");
      }
      cantidadBolsas=prompt("cantidadBolsas");
      cantidadBolsas=parseInt(cantidadBolsas);
      if(cantidadBolsas>30)
      {
        porcentaje=25
      }
      else
      {
        if(cantidadBolsas>10)
        {
          porcentaje=15
        }
      }
      
      precioBolsas=prompt("ingrese el precio");
      precioBolsas=parseInt(precioBolsas);
      while(precioBolsas<0)
      {
        precioBolsas=prompt("error");
      }
      sumaPrecioBolsas=sumaPrecioBolsas+precioBolsas


      respuesta=prompt("Desea seguir comprando?");
    }

   

    precioConDescuento = precioBolsas - ((precioBolsas*porcentaje)/100);

    document.write("<br>A)TOTAL SIN DESCUENTO: " + total)
    
    document.write("<br>")

    document.write("<br>")

    document.write("<br>")

    document.write("<br>")

}
