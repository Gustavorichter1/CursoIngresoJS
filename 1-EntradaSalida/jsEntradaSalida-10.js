/*
Gustavo Richter Div E
e/s ej 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	descuento = importe - importe * (0.25);

	
	resultado = importe - (importe - descuento);

	resultado = document.getElementById("txtIdResultado").value = resultado;


} /*

/* Gustavo Richter Div E
10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/
function mostrarAumento()
{
	var importe;
<<<<<<< HEAD
	var descuento;
	var porcentaje;
	var resultado
=======
	var resultado;
	var descuento;
>>>>>>> b115cfc58fcf336386d6a0156ae2dedfccf51688

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

<<<<<<< HEAD
	porcentaje = prompt("Ingrese el porcentaje a descontar");

	descuento = (importe - importe * (porcentaje/100));

	resultado = importe - (importe - descuento);


	alert("Su importe es " + importe + ", el descuento es del " + porcentaje + "% y su importe con descuento es " + descuento + ".");

    
=======
	descuento = importe - importe * (0.25);

	
	resultado = importe - (importe - descuento);

	resultado = document.getElementById("txtIdResultado").value = resultado;


>>>>>>> b115cfc58fcf336386d6a0156ae2dedfccf51688
}