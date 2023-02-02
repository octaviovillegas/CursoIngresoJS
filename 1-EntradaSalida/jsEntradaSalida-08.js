// Angel Farina.

function SacarResto()
{
	let dividendo=txtIdNumeroDividendo.value
	let divisor=txtIdNumeroDivisor.value

	let result=parseInt(dividendo)%parseInt(divisor);

	alert(`El resto es ${result}`);
}