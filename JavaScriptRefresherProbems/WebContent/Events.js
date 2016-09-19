var isDurationSelected = false;
var ischecked = false;
var isFeatureConfirmed = false;

function confirmDuration(Object) {
	var source = Object.id;
	if (source == "radio1") {
		isDurationSelected = true;
		document.getElementById("radio1").checked = true;
		document.getElementById("radio2").checked = false;
		document.getElementById("radio3").checked = false;
		alert("This trial version of antivirus will expire after 3 months!"
				+ " Try other licensed versions in order to renew subscription automatcally");
	} else if (source == "radio2") {
		isDurationSelected = true;
		document.getElementById("radio2").checked = true;
		document.getElementById("radio1").checked = false;
		document.getElementById("radio3").checked = false;
		alert("Thank you for chossing to use this product for 1 year!");
	} else {
		isDurationSelected = true;
		document.getElementById("radio3").checked = true;
		document.getElementById("radio1").checked = false;
		document.getElementById("radio2").checked = false;
		alert("Thank you for chossing to use this product for 3 years!");
	}
}

function selectOS(Object) {
	var source = document.getElementById(Object.id);
	alert("You chose to install this product on " + source.value);
}

function selectedFeatures() {
	var checkboxes = document.getElementsByName("check");
	for ( var count = 0; count < checkboxes.length; count++) {
		if (checkboxes[count].checked) {
			ischecked = true;
			break;
		}
	}
	if (ischecked) {
		if (confirm("Confirm selected features?")) {
			alert("Features have been selected!");
			isFeatureConfirmed = true;
		}
	} else {
		alert("Please select atleast one feature");
	}
}

function confirmProduct() {
	if(!isDurationSelected || !ischecked || !isFeatureConfirmed) {
		alert("Please make your selection from all the categories and make sure to click choose features button!");
		return;
	}
	alert("Thank you for purchasing the product!");
}

function changeBackground(object) {
	object.style.background = "yellow";
    
}   
