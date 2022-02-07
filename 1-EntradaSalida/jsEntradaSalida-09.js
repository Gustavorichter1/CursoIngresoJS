/*
Gustavo Richter Div E
e/s ej 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/* function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	aumento = sueldo * (10/100);
	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;
} /*

/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumentoPorcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	aumentoPorcentaje = prompt("ingrese el porcentaje a aumentar");

	aumento = sueldo * (aumentoPorcentaje/100);



	resultado = sueldo + aumento;

	txtIdResultado.value = resultado;




}