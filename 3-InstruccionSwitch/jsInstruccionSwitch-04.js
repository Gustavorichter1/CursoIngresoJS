/* Gustavo Richter Div E
Switch ej 4
*/
function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje="Tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 dias";
			break;
		default:
		mensaje="Tiene 31 dias"
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN