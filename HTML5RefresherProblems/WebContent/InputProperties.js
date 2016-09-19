function calculateId() {
	if(localStorage.Id)
	{
		localStorage.Id = Number(localStorage.Id) + 1;
	}
	else
	{
           localStorage.Id = 1;		
	}
	document.getElementById("id").value = localStorage.Id;
}

function calculatelength(firstname) {
	if((firstname.value).length >=10) {
		alert("Name can only be upto 10 characters");
	}
}

function submitData() {
}