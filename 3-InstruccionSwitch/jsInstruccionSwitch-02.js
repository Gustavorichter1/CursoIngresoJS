/*Gustavo Richter Div E
Switch ej 2
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Curso de ingreso UTN FRA*/
function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje="Ya paso el frio, ahora el calor!!!";
			break;
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio!!!";
			break;
		default:
		mensaje = "Falta para el invierno";

	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN