/*Gustavo Richter Div E
Switch ej 3
*/
function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
		mensaje="Este mes no tiene mas de 29 dias"
		break;
		default:
		mensaje="Este mes tiene 30 o mas dias"
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN