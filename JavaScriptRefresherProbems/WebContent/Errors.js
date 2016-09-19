function submit() {
	try {
		var name = document.getElementById("name").value;
		var number = document.getElementById("number").value;
		if (name.length === 0 || !name.trim() || !name || (/\d/.test(name))) {
			throw("Name cannot be empty and cannot contain numbers");
		}
		if (number.length === 0 || !number.trim() || !number || (/[a-z]/i).test(number)) {
			throw("Number cannot be empty and cannot contain alphabets");
		}
		var checkboxes = document.getElementsByName("check");
		var checked = 0;
		for ( var count = 0; count < checkboxes.length; count++) {
			if (checkboxes[count].checked) {
				checked += 1;
			}
		}
		if(checked == 0 || checked > 2) {
			throw("You have not selected any job positions or you have applied to more than 2 positions");
		}
	} catch (error) {
		alert("The exception thrown is : " + error);
	} finally {
		alert("Thank You!");
	}
}