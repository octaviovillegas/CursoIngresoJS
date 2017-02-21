/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var edad;
var sexo;
var estadoCivil;
var sueldoBruto;
var legajo = "";
var validaLegajo = true;
function ComenzarIngreso () 
{
	//VALIDA EDAD
	edad = prompt("Ingrese su edad:");
	edad = parseInt(edad);
	while(edad < 18 || edad > 90 || isNaN(edad)){
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
	}
	document.getElementById("Edad").value = edad;

	//VALIDA SEXO
	sexo = prompt("Ingrese 'M' si es masculino o 'F' para femenino");
	while(sexo != 'M' && sexo != 'F'){
		sexo = prompt("Vuelva a intentar. Ingrese 'M' si es masculino o 'F' para femenino");
	}
	document.getElementById("Sexo").value = sexo;

	//VALIDA ESTADO CIVIL
	estadoCivil = prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil = parseInt(estadoCivil);
	while(estadoCivil < 1 || estadoCivil > 4){
		estadoCivil = prompt("Ingrese solo el número, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivil = parseInt(estadoCivil);
	}
	document.getElementById("EstadoCivil").value = estadoCivil;

	//VALIDA SUELDO BRUTO
	sueldoBruto = prompt("Sueldo Bruto, no menor a 8000");
	sueldoBruto = parseFloat(sueldoBruto);
	while(sueldoBruto < 8000){
		sueldoBruto = prompt("Solo la cifra, sin signo, no menor a 8000");
		sueldoBruto = parseFloat(sueldoBruto);
	}
	document.getElementById("Sueldo").value = sueldoBruto;

	//VALIDA LEGAJO
	while(validaLegajo){
		//AL CANCELAR EL PROMPT ROMPE
		legajo = prompt("ingrese numero de legajo");
		//CONFIRMA QUE SEA DE CUATRO CARACTERES
		if(legajo.length == 4){
			//CONFIRMA QUE NO EMPIECE CON CERO Y QUE SEAN SOLO DIGITOS DECIMALES
			if(legajo.search(/0+/) != "0" && legajo.search(/\D/) == -1){
				validaLegajo = false;
			}
		}
	}
	document.getElementById("Legajo").value = legajo;

	//VALIDA NACIONALIDAD "A", "E" o "N"
	nacionalidad = prompt('ingrese la nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados');
	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt('ingrese la nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados');
	}
	document.getElementById("Nacionalidad").value = nacionalidad;
}
