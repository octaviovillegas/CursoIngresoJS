// Angel Farina.

function SacarResto()
{
	var dividendo;
	var divisor;
	var result;

	dividendo=txtIdNumeroDividendo.value;
	divisor=txtIdNumeroDivisor.value;
	result=parseInt(dividendo)%parseInt(divisor);

	alert(`El resto es ${result}`);
}