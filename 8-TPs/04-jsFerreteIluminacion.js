//TP 4 IF (CON SWITCH ADENTRO) 
// Bracamonte Santiago
/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
{
    let cantidadDeLamparas;
    let marca;
    let porcentaje;
    let descuento;
    let precioConDescuento;
    let ingresosBrutos;
    let precioBruto;
    let precioFinal;

    cantidadDeLamparas=document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);
    marca=document.getElementById('Marca').value;

    precioBruto = cantidadDeLamparas*35

    porcentaje=0

    if(cantidadDeLamparas>5)//A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    {
        porcentaje=50;
    }
    else
    {
        if(cantidadDeLamparas==5)//B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje=40;
                break;

                default:
                    porcentaje=30;
                break;
            }
        }
        else
        {
            if(cantidadDeLamparas==4)//C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
            {
                switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje=25;
                break;

                default:
                    porcentaje=20;
                break;
            }
            }
            else
            {
                if(cantidadDeLamparas==3)//D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje=15;
                        break;

                        case "FelipeLamparas":
                            porcentaje=10;
                        break;

                        default:
                            porcentaje=5;
                        break;
                    }
                }
                else
                {
                    porcentaje=0
                }               
            }
        }
    }
    
    descuento = ((precioBruto*porcentaje)/100);
    precioConDescuento= precioBruto-descuento;

    if(precioConDescuento>120)//E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    {
        ingresosBrutos=((precioConDescuento*10)/100);

        alert("Usted pago " + ingresosBrutos + " de IIBB(ingresos Brutos")
    }

    //precioFinal=precioConDescuento+ingresosBrutos

    //ESTA ES LA ULTIMA LINEA
    document.getElementById('txtIdprecioDescuento').value=precioConDescuento;
    
}
