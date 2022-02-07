/*
Gustavo Richter DIV E
E/S ej1
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
}


Se piden tres nombre de producto,
y los precios de cada  producto ingresado, 
sacar el precio bruto (la suma de los tres sin impuestos),
el promedio de los precios y 
el precio final total más iva (21%), 
pedir un porcentaje de descuento y
aplicarlo al precio final, 
mostrar todos los datos calculados e ingresados por alert. (solo un alert en el código)

function mostrar()
{
	var productoUno;
	var productoDos;
	var productoDos;
	var precioUno;
	var precioDos;
	var precioTres;
	var precioBruto;
	var promedioPrecios;
	var precioFinalIva;
	var iva;
	var porcentajeDeDescuento; 
	var ivaCalculado;
	var descuentoCalculado;
	var precioFinalIvaConDescuento;
	var mensaje;

	iva = 21;

	productoUno = prompt("Ingrese el nombre del primer producto");
	precioUno = prompt("ingrese el precio de " + productoUno);
	precioUno = parseInt(precioUno);

	productoDos = prompt("Ingrese el nombre del segundo producto");
	precioDos = prompt("ingrese el precio de " + productoDos);
	precioDos = parseInt(precioDos);

	productoTres = prompt("Ingrese el nombre del tercer producto");
	precioTres = prompt("ingrese el precio de " + productoTres);
	precioTres = parseInt(precioTres);

	porcentajeDeDescuento = prompt("Indique el % de Descuento que desea aplicar al precio");
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);//dato que ingresa el usuario y lo usamos para operar


	precioBruto = precioUno + precioDos + precioTres;

	promedioPrecios = precioBruto/3;

	ivaCalculado = (precioBruto/100)*iva;
	precioFinalIva = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescuento;

	precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + productoUno + " $" + precioUno + ", ";
	mensaje = mensaje + productoDos + " $" + precioDos + ", ";
	mensaje = mensaje + productoTres + " $" + precioTres + ", ";
	mensaje = mensaje + "precio bruto: $" + precioBruto + ", ";
	mensaje = mensaje + "promedio; $" + promedioPrecios + ", ";
	mensaje = mensaje + "el precio final mas IVA: $" + precioFinalIva + ", ";
	mensaje = mensaje + "el precio final con el " + porcentajeDeDescuento + "% de descuento: $" + precioFinalIvaConDescuento;

	alert(mensaje);
}
 */
 function mostrar()
{
	
}