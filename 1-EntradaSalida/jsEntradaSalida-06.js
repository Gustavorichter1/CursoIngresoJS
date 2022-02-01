/*
Gustavo Richter Div E
e/s ej 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos las variables
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt en numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//muestro el resultado
	resultado = numUno + numDos;

	alert(resultado);
}

