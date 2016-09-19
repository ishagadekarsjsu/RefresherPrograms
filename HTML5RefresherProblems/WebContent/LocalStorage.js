function storeLocalStorageContents() {
	if (typeof (localStorage) !== "undefined") {
		var firstName = document.getElementById("first").value;
		var lastName = document.getElementById("last").value;
		localStorage.setItem("firstName", firstName);
		localStorage.setItem("lastName", lastName);
		document.getElementById("para").innerHTML = "First and last names stored to local storage!";
	} else {
		document.getElementById("para").innerHTML = "Your browser does not support local storage!";
	}
}

function showLocalStorageContents() {
	if (typeof (localStorage) !== "undefined") {
		if (localStorage.firstName && localStorage.lastName) {
			document.getElementById("para").innerHTML = "First Name is : "
					+ localStorage.getItem("firstName")
					+ " and Last Name is : " + localStorage.getItem("lastName");
		} else{
			document.getElementById("para").innerHTML = "First and Last names not found in local storage!";
		}
	} else {
		document.getElementById("para").innerHTML = "Your browser does not support local storage!";
	}
}

function removeLocalStorageContents() {
	if (typeof (localStorage) !== "undefined") {
		if (localStorage.firstName && localStorage.lastName) {
			localStorage.removeItem("firstName");
			localStorage.removeItem("lastName");
			document.getElementById("para").innerHTML = "First and Last names removed from local storage!";
		}
	} else {
		document.getElementById("para").innerHTML = "Your browser does not support local storage!";
	}
}