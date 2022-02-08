<<<<<<< HEAD
/* Gustavo Richter Div E
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centígrados;

	fahrenheit = document.getElementById("txtIdTemperatura").value;

	fahrenheit = parseFloat(fahrenheit); 

	centígrados = (fahrenheit - 32) / 1.8;

	alert(fahrenheit + " grados fahrenheit " + "son igual a " + centígrados + " grados centígrados.");
}

function CentigradosFahrenheit () 
{
	
	var fahrenheit;
	var centígrados;

	centígrados = document.getElementById("txtIdTemperatura").value;

	centígrados = parseFloat(centígrados); 

	fahrenheit = ((centígrados * 1.8) + 32);

	alert(centígrados + " grados centígrados " + "son igual a " + fahrenheit + " grados fahrenheit.");
}
=======
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centígrados;

	fahrenheit = document.getElementById("txtIdTemperatura").value;

	fahrenheit = parseFloat(fahrenheit); 

	centígrados = (fahrenheit - 32) / 1.8;

	alert(fahrenheit + " grados fahrenheit " + "son igual a " + centígrados + " grados centígrados.");
}

function CentigradosFahrenheit () 
{
	
	var fahrenheit;
	var centígrados;

	centígrados = document.getElementById("txtIdTemperatura").value;

	centígrados = parseFloat(centígrados); 

	fahrenheit = ((centígrados * 1.8) + 32);

	alert(centígrados + " grados centígrados " + "son igual a " + fahrenheit + " grados fahrenheit.");
}
>>>>>>> b115cfc58fcf336386d6a0156ae2dedfccf51688
