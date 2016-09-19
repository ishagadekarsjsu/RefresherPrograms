function bookRooms() {
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var ccnumber = document.getElementById("ccnumber").value;
	var cvv = document.getElementById("cvv").value;
	var bool = false;
	if (name.length === 0 || !name.trim() || !name || number.length === 0
			|| !number.trim() || !number || ccnumber.length === 0
			|| !ccnumber.trim() || !ccnumber || cvv.length === 0 || !cvv.trim()
			|| !cvv) {
		alert("Please enter all the fields");
	} else {
		bool = true;
	}
	if (String(bool) == "true") {
		var num = Number(number);
		var ccnum = Number(ccnumber);
		var cvvnum = Number(cvv);
		if (cvv.length != 3) {
			alert("CVV should be 3 digits");
		} else {
			alert("You chose to book : " + num
					+ " room(s) using credit card number : " + ccnum
					+ " having cvv : " + cvv);
		}
	}
}