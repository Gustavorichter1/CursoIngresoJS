//Gustavo Richter Div E
//If ej 7s
function mostrar()
{
var edad;
var estadoCivil;

edad = document.getElementById("txtIdEdad").value; 
edad = parseInt(edad);

estadoCivil = document.getElementById("estadoCivil").value;

if (edad<18 && estadoCivil!="soltero") 
	{ alert("es muy pequeño para NO ser soltero")

	}
}