/*
Gustavo Richter Div E
e/s ej 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro la variable
	var nombre;
	var edad;

	//guardar los datos en las variables
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	//muestro por alert

	alert("usted se llama " + nombre + " y tiene " + edad + " años");
}

