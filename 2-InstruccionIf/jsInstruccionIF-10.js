//Gustavo Richter Div E
//Ej 10
function mostrar()
{
	var aleatorio = Math.random();

	enteroAleatorio = Math.floor(aleatorio * (10 - 1 + 1) +1);

	if (enteroAleatorio>=9) 
	{
		alert("Excelente")
	}
	else if (enteroAleatorio>4 && enteroAleatorio<9) 
	{
		alert("Aprobo")
	}
	else
	alert("Vamos, la proxima se puede")

}