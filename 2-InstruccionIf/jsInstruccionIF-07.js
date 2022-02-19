//IF 7 BIS
//Bracamonte Santiago
function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje;
	let edadPar;
	let ingreseNombre;

	edad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	ingreseNombre=prompt("Por favor, ingrese su nombre aqui")
	
	edad=parseInt(edad);
	edaPar=edad%2;

	if(edad<13)//1A
	{
		mensaje=("Feliz dia. " + ingreseNombre);
		if(ingreseNombre=="Ricardo")//2F
		{
			mensaje=(mensaje + ", muy chiquito para ese nombre. ");
		}
	}
	else
	{
		if(edad<18)//1B
		{
			mensaje=("Usted es adolescente. " + ingreseNombre);
			if(ingreseNombre=="Violeta")//2E
			{
				mensaje=(mensaje + ", como un color!! ");
			}
			if(edad==17)//1Bi
			{
				mensaje=(mensaje + " Ultimo año!!!");
			}
			if(estadoCivil=="Casado")//3H
			{
				mensaje=(mensaje + " Casada quiere casa. ");
			}
			if(estadoCivil=="Divorciado")//3J
			{
				mensaje=(mensaje + ", toda una vida por delante. ")
			}
		}
		else//1C
		{
			mensaje=("Tenes edad de laburar. " + ingreseNombre);
			if(edad==33)//1Ci
			{
				mensaje=(mensaje + ". Como Cristo. ");
			}
			if(estadoCivil=="Soltero")//3I
			{
				mensaje=(mensaje + ", a salir. ")
			}
			if(edad>60)//1Cii
			{
				mensaje=("A jubilarse. " + ingreseNombre);
				if(ingreseNombre=="Alfredo")//G
				{
					mensaje=(mensaje + ", como el de QUEEN. ");
				}
			}
			if(edad==88)//1Ciii
			{
				mensaje=(mensaje + "Lindo numero. ");
			}	
		}
	}
	if(edad%2==0)//1D
	{
	mensaje=(mensaje + " Sos par!!");
	}	
	alert(mensaje);
}//FIN DE LA FUNCIÓN

