//Gustavo Richter Div E
function mostrar()
{
	var edad;
	var mensaje;
	var nombre;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	nombre=prompt("ingrese un nombre");
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad<13)
		 {
	 	mensaje="feliz dia"
	 	 }
	 	 if (nombre=="Ricardo")
	 	 {
	 	 	mensaje=mensaje+", muy chiquito para ese nombre"
	 	 }
		else if (edad<18)
		 	{
	 		mensaje="usted es adolescente"
		 	}
	 		 if (edad==17)
	 			{
	 			mensaje=mensaje+", ultimo año!!!"
	 			}
	 			if (nombre=="Violeta")
	 			 {
	 			 	mensaje=mensaje+", como un color!"
	 			 }
	 			 if (estadoCivil=="Casado")
	   					{
	   						mensaje=mensaje+", casada quiere casa"
	   					}
	else if (edad>18)
	 	{
	 	mensaje="tenes edad de laburar"
	 	}
	 		if (edad==33) 
	 			{
	 				mensaje=mensaje+", como cristo"
	 			}
	 			else if (edad>60)
	  			{
	  				mensaje="a jubilarse"
	  			}
	  			if (nombre=="Alfredo")
	  			 {
	  			 	mensaje=mensaje+", como el de Queen"
	  			 }
	  			  	if (edad==88)
	  				{
	   					mensaje=mensaje+", lindo numero"
	   				}
	   				


	   		if (edad%2==0) 
	   		{
	   			mensaje=mensaje+", sos par!"
	   		}
	

	 alert(mensaje);
}