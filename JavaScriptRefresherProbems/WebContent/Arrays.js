var index = 0;
var tripEntries = new Array();

function addPerson() {
	var name = document.getElementById("name").value;
	if(name.length === 0 || !name.trim() || !name) {
		alert("Please enter your name");
		return;
	} 
	tripEntries[index] = name;
	alert("Congratulations! " + tripEntries[index] + " has been added to the group of people going for the trip!");
	index += 1;
	document.getElementById("name").value = "";
	
	document.getElementById("para").innerHTML = "<pre>" + "People going to the trip so far are:" + "</pre>";
	var div = document.getElementById("para");
    var newcontent = document.createElement('div');
	
    for(var count = 0; count < tripEntries.length; count++) {
    	newcontent.innerHTML = "<pre>" + tripEntries[count] + " </pre> ";
    	div.appendChild(newcontent.firstChild);
	}
}

function deletePerson() {
	var name = document.getElementById("name").value;
	var nameFound = false;
	if(name.length === 0 || !name.trim() || !name) {
		alert("Please enter your name");
		return;
	} 
	for(var count = 0; count < tripEntries.length; count++) {
		if(tripEntries[count] == name) {
			tripEntries.splice(count,1);
			alert(name + " has been deleted from the group of people going for the trip!");
			nameFound = true;
			break;
		}
	}
	
	if(!nameFound) {
		alert("Could not find your name. Please enter correct name.");
		return;
	}
	document.getElementById("para").innerHTML = "<pre>" + "People going to the trip so far are:" + "</pre>";
	var div = document.getElementById("para");
    var newcontent = document.createElement('div');
	
    for(var count = 0; count < tripEntries.length; count++) {
    	newcontent.innerHTML = "<pre>" + tripEntries[count] + " </pre> ";
    	div.appendChild(newcontent.firstChild);
	}
}