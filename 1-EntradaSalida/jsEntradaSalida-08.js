/*
Gustavo Richter Div E
e/s ej 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro variables

	var dividendo;
	var divisor;
	var resto;
	var resultado;

	//traemos los valores por id
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//los transformo a enteros
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resto = dividendo % divisor;

	alert("el resto es: " + resto);

	// % para sacar el resto de una division
}
