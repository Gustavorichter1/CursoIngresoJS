//Gustavo Richter Div E
//If ejercicio 8
function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad<18 && estadoCivil!="soltero")
	 {

	 }
	 else if (estadoCivil="soltero" && edad>=18) 
	 {
	 	alert("Es soltero y no es menor")

	 }
}