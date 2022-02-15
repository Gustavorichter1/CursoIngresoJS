function Sumar()
{ 
var precioUno;
var precioDos;
var precioTres;
var resultado;

precioUno=document.getElementById("txtIdPrecioUno").value;
precioUno=parseFloat(precioUno);

precioDos=document.getElementById("txtIdPrecioDos").value;
precioDos=parseFloat(precioDos);

precioTres=document.getElementById("txtIdPrecioTres").value;
precioTres=parseFloat(precioTres);

resultado=precioUno+precioDos+precioTres;

alert("la suma de los tres productos es igual a $"+resultado)
}

function Promedio()
{
var promedio;
var precioUno;
var precioDos;
var precioTres;
var resultado;

precioUno=document.getElementById("txtIdPrecioUno").value;
precioUno=parseFloat(precioUno);

precioDos=document.getElementById("txtIdPrecioDos").value;
precioDos=parseFloat(precioDos);

precioTres=document.getElementById("txtIdPrecioTres").value;
precioTres=parseFloat(precioTres);

resultado=precioUno+precioDos+precioTres;
promedio=resultado/3;

alert("El promedio de los tres productos es igual a $"+promedio);
}

function PrecioFinal()
{
var promedio;
var precioUno;
var precioDos;
var precioTres;
var resultado;
var iva

precioUno=document.getElementById("txtIdPrecioUno").value;
precioUno=parseFloat(precioUno);

precioDos=document.getElementById("txtIdPrecioDos").value;
precioDos=parseFloat(precioDos);

precioTres=document.getElementById("txtIdPrecioTres").value;
precioTres=parseFloat(precioTres);

resultado=precioUno+precioDos+precioTres;
iva=(resultado*21)/100;

alert("El precio final es $"+resultado+", mas IVA, es un total de $"+(resultado+iva))

}