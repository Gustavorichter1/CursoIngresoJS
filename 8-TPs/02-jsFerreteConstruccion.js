/* Gustavo Richter Div E
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var radioDelTerreno;
	var resultado;

	largoDelTerreno = document.getElementById("txtIdLargo").value;
	anchoDelTerreno = document.getElementById("txtIdAncho").value;
	radioDelTerreno = document.getElementById("txtIdRadio").value;

	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = parseFloat(anchoDelTerreno);
	radioDelTerreno = parseFloat(radioDelTerreno);

	resultado = ((largoDelTerreno + anchoDelTerreno)*2)*3;

	alert("Se deben comprar " + resultado + " metros de alambre");

}
function Circulo () 
{
	var radioDelTerreno
	var resultado
	var diametro
	var circunferencia


	radioDelTerreno = document.getElementById("txtIdRadio").value;

	radioDelTerreno = parseFloat(radioDelTerreno);

	diametro = (radioDelTerreno * 2);

	circunferencia = (diametro * 3.14);

	resultado = (circunferencia * 3);

	alert("Se deben comprar " + resultado + " metros de alambre");
	
}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetro;
	var bolsaDeCal;
	var bolsaDeCemento;

	largoDelTerreno = document.getElementById("txtIdLargo").value;
	anchoDelTerreno = document.getElementById("txtIdAncho").value;

	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = parseFloat(anchoDelTerreno);

	perimetro = largoDelTerreno*anchoDelTerreno;

	bolsaDeCemento = perimetro*2;
	bolsaDeCal = perimetro*3;

	alert("Se necesitan " + bolsaDeCal + " bolsas de cal, y " + bolsaDeCemento + " de cemento");
	
}