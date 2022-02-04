/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variable
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	//entrada
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

    //proceso
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;

	//salida
	alert("La suma de los tres precios es " + resultado);

	
}
function Promedio () 
{
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = ((precioUno + precioDos + precioTres)/3);

	alert("El promedio de los tres precios es " + resultado);
	
}
function PrecioFinal () 
{
	var total

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	total = precioUno + precioDos + precioTres;
	resultado = total + total *21/100;


	alert("El total es " + total +  ". Con IVA incluido: " + resultado);
}