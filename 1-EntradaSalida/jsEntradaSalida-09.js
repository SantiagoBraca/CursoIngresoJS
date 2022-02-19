/*
e/j 9 BIS
Bracamonte Santiago
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
    let resultado
    let aumento;

    sueldo=document.getElementById('txtIdSueldo').value;

    sueldo=parseInt(sueldo);

    resultado=((10/100)*sueldo);
    aumento=resultado+sueldo;

    document.getElementById('txtIdResultado').value=aumento;

    alert("El resultado de aumentar " + sueldo + " un 10% es " + aumento);


}