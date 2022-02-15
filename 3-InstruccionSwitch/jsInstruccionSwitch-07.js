function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Queda al Sur de Bs.As.";
			break;
		case "Mar del plata":
			mensaje="Queda hacia el sudeste de Bs.As.";
			break;
			default:
			mensaje="Queda hacia el Norte de Bs.As";
		}
		alert(mensaje);

}//FIN DE LA FUNCIÓN