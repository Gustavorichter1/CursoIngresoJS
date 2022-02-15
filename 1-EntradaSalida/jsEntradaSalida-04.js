/* Gustavo Richter Div E
e/s ej 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'*/
function mostrar()
{
	//declaro la variable
	var nombreIngresado;

	//guardo el dato
	nombreIngresado=prompt("ingrese su nombre");

	//asigno nombre a la caja de texto
	txtIdNombre.value = nombreIngresado;
}

