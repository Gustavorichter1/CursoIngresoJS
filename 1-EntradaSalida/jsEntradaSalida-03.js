/* Gustavo Richter Div E
e/s ej 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos la variable
	var nombreIngresado;

	//guardamos el nombre
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//mostrarlo por alert
	alert("su nombre es " + nombreIngresado);
}


