function createAcc() {
	var name = document.getElementById("name").value;
	var uName = document.getElementById("uname").value;
	var password = document.getElementById("password").value;
	var uNameRegex = /^([a-zA-Z0-9]+)$/; 
	var pwdeRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	
	if (name.length === 0 || !name.trim() || !name
			|| uName.length === 0 || !uName.trim() || !uName
			|| password.length === 0 || !password.trim() || !password) {
		alert("Please enter all fields");
		return;
	} 
	
	var isUNameValid = (uNameRegex.test(uName) && uName.length >= 8);
	var ispwdValid = pwdeRegex.test(password);
	
	if( isUNameValid && ispwdValid ) {
		alert("Email Account Successfully created!");
	} else{
		alert("Please enter correct values for all the fields");
	}
}