function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace frio";
			break;
			default:
			mensaje="En este destino hace calor";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN