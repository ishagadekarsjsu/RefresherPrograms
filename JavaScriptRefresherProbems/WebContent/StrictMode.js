function strict() {
	"use strict";
	try {
		no1 = document.getElementById("number1").value;
		var no2 = document.getElementById("number2").value;

		if (no1.length === 0 || !no1.trim() || !no1 || no2.length === 0
				|| !no2.trim() || !no2) {
			alert("Please enter both numbers");
			return;
		}

		var number1 = parseInt(no1);
		var number2 = parseInt(no2);
		var sum = number1 + number2;
		alert("The addition is : " + sum);
	} catch (err) {
		alert(err.message);
	}
}

function nonstrict() {

	try {
		var no1 = document.getElementById("number1").value;
		var no2 = document.getElementById("number2").value;
		var number1 = parseInt(no1);
		var number2 = parseInt(no2);

		if (no1.length === 0 || !no1.trim() || !no1 || no2.length === 0
				|| !no2.trim() || !no2) {
			alert("Please enter both numbers");
			return;
		}

		var sum = number1 + number2;
		alert("The addition is : " + sum);
	} catch (err) {
		alert(err.message);
	}
}
