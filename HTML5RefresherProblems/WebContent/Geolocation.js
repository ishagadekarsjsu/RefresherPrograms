function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showLocation);
	} else {
		document.getElementById("para").innerHTML = "Geolocation not supported!";
	}
}

function showLocation(position) {
	document.getElementById("para").innerHTML = "Your location is : <br>"
			+ "Latitude: " + position.coords.latitude + "<br>Longitude: "
			+ position.coords.longitude + "<br>Altitude: "
			+ position.coords.altitude;

	var currentpos = position.coords.latitude + "," + position.coords.longitude;
	
	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
			+ currentpos + "&zoom=14&size=500x400&sensor=false";

	document.getElementById("mapLocation").innerHTML = "<img src='" + img_url
			+ "'>";
}