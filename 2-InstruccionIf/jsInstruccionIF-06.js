/* Gustavo Richter Div E
If ej 6 */
function mostrar()
{
	var edad; 
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad>=18)
	 {
	 	alert("Es mayor de edad");
	 }
	 else if (edad<12) 
	 {
	 	alert("Es un niño");
	 }
	 else
	 {
	 	alert("Es adolecente");
	 } }