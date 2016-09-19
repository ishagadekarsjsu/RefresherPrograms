
function getInput(operation) {
	var value;
	if(operation == "footToInch") {
		value = document.getElementById("text1").value;
	} else {
		value = document.getElementById("text2").value;
	}
	return value;
}

function footToInch() {
	var foot =  getInput("footToInch");	
	if (foot.length === 0 || !foot.trim() || !foot) {
		alert("Please enter a value for conversion");
	} else {
		var inch = foot * 12;
		document.getElementById("label1").innerHTML = inch;
	}
}

function inchToCentimeter() {
	var inch = getInput("inchToCentimeter");
	if (inch.length === 0 || !inch.trim() || !inch) {
		alert("Please enter a value for conversion");
	} else {
		var cm = inch * 2.54;
		document.getElementById("label2").innerHTML = cm;
	}
}