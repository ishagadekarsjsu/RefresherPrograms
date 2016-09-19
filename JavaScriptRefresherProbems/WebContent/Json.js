function showRestaurant() {
	var selectedCity = document.getElementById("city").value;

	var restaurant = '{ "restaurants" : [' +
		'{"Name" : "The Waterboy", "ZipCode" : "95811" },' +
		'{"Name" : "Henry\'s World Famous Hi-Life","ZipCode" : "95110" },' +
		'{"Name" : "Providence", "ZipCode" : "90038" },' + 
		'{"Name" : "Kokkari Estiatorio", "ZipCode" : "94111" },' +
		'{"Name" : "World Famous", "ZipCode" : "92109"} ]}';
	
	var object = JSON.parse(restaurant);

	if (selectedCity == "Sacramento") {

		document.getElementById("para").innerHTML = "Most Famous Restaurant in " + selectedCity + " : "
				+ object.restaurants[0].Name + " !! \n Zip Code : " + object.restaurants[0].ZipCode;
		
	} else if (selectedCity == "San Jose") {

		document.getElementById("para").innerHTML = "Most Famous Restaurant in " + selectedCity + " : "
				+ object.restaurants[1].Name + " !! \n Zip Code : " + object.restaurants[1].ZipCode;
		
	} else if (selectedCity == "Los Angeles") {

		document.getElementById("para").innerHTML = "Most Famous Restaurant in " + selectedCity + " : "
				+ object.restaurants[2].Name + " !! \n Zip Code : " + object.restaurants[2].ZipCode;
		
	} else if (selectedCity == "San Francisco") {

		document.getElementById("para").innerHTML = "Most Famous Restaurant in " + selectedCity + " : "
				+ object.restaurants[3].Name + " !! \n Zip Code : " + object.restaurants[3].ZipCode;
		
	} else if (selectedCity == "San Diego") {

		document.getElementById("para").innerHTML = "Most Famous Restaurant in " + selectedCity + " : "
				+ object.restaurants[4].Name + " !! \n Zip Code : " + object.restaurants[4].ZipCode;
		
	}
}