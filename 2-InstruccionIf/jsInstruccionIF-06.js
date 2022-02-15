/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
	var edadIngresada;
	var mensaje;


	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);
	edadIngresada=prompt("Ingrese su edad");

	if (edadIngresada>70)
	 {
	 	mensaje="Es anciano";
	 }
	 else if (edadIngresada<70 && edadIngresada>18) 
	 {
	 	mensaje="Es mayor de edad";
	 }
	 if (edadIngresada>13 && edadIngresada<17) 
	 {
	 	mensaje="Es adolescente";
	 }
	 if (edadIngresada<13) 
	 {
	 	mensaje="Es un niño";
	 }
	 if (edadIngresada<3)
	  {
	  	mensaje="Es un bebe";
	  }
txtIdEdad.value=mensaje;

}