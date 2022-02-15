//Gustavo Richter Div E
//Switch ej 1
function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		mensaje = "Que comiences bien el año!!!";
		break;

		case "Marzo":
		mensaje = "A clases!!!";
		break;

		case "Julio":
		mensaje = "Se vienen las vacaciones!!!";
		break;

		case "Diciembre":
		mensaje = "Se vienen las fiestas!!!";
		
		default:
		mensaje = "No hay eventos en este mes";

	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN