function Validate() {
	 var form = document.getElementById("registrationForm");
	 var inputElements = form.getElementsByTagName("input");
	 var flag = "";
	 for ( var count = 0; count < inputElements.length; count++) {
		 input = inputElements[count];
	        if(!input.value) {
	            input.focus();
	            flag = input.getAttribute("name");
	            break;
	        }
	}
	 return flag;
}

function displaySuccessForm() {
	var valid = Validate();
	if(valid != ""){
		alert("Please enter " + input.getAttribute("name"));
		return;
	}
	var fname = document.getElementById("firstName").value;
	var lname = document.getElementById("LastName").value;
	var id = document.getElementById("idnumber").value;
	var ssn = document.getElementById("ssn").value;
	var address = document.getElementById("address").value;
	if(confirm("Verify the following submitted information: \n\n " 
			+ "First Name: " + fname + "\n" + "Last Name: " + lname + "\n" 
			+ "California identification number: " + id + "\n" + "Last 4 digits of SSN: " + ssn 
			+ "\n" + "Address: " + address) == true) {
		alert("You have been registered successfully!");
	} 
}
