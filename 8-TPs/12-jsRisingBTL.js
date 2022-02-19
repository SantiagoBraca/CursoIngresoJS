//TP 12
//Bracamonte Santiago
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.  Edad, entre 18 y 90 años inclusive.
B.  Sexo, “M” para masculino y “F” para femenino
C.  Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.  Sueldo bruto, no menor a 8000.
E.  Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.  Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    //definicion de variables
    let edadIngresada;
    let sexoIngresado;
    let estadoCivilIngresado;
    let sueldoBrutoValidado;
    let legajo;
    let nacionalidad;


    //A.    Edad, entre 18 y 90 años inclusive.
    edadIngresada=prompt("Por favor, ingrese su edad");
    edadIngresada=parseInt(edadIngresada);

    while(edadIngresada<18 || edadIngresada>90)
    {
        edadIngresada=prompt("Error, ingrese edad valida(18 a 90 años)");
    }

    //B.    Sexo, “M” para masculino y “F” para femenino
    sexoIngresado=prompt("Por favor, ingrese su sexo, “M” para masculino y “F” para femenino");
    while(sexoIngresado!="M" && sexoIngresado!="F")
    {
        sexoIngresado=prompt("Error, ingrese un sexo valido");
    }

    //C.    Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
    estadoCivilIngresado=prompt("Ingresar estado civil");
    while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="divorciado" && estadoCivilIngresado!="viudo")
    {
        estadoCivilIngresado=prompt("Error, ingrese un estado civil valido");
    }

    //D.    Sueldo bruto, no menor a 8000.
    sueldoBrutoValidado=prompt("Ingresar sueldo bruto, no menor a 8000");
    while(sueldoBrutoValidado<8000)
    {
        sueldoBrutoValidado=prompt("Error, ingresar sueldo bruto validado");
    }

    //E.    Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
    legajo=prompt("Ingresar numero de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
    while(legajo<999)
    {
        legajo=prompt("Error, ingresar numero de legajo valido");
    }

    //F.    Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
    nacionalidad=prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
    while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
    {
        nacionalidad=prompt("Error, ingrese una nacionalidad valida");
    }

    document.getElementById('txtIdEdad').value=edadIngresada;
    document.getElementById('txtIdSexo').value=sexoIngresado;
    document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;
    document.getElementById('txtIdSueldo').value=sueldoBrutoValidado;
    document.getElementById('txtIdLegajo').value=legajo;
    document.getElementById('txtIdNacionalidad').value=nacionalidad;
}
