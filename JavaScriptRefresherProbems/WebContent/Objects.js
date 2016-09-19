var authorName = "";
var musicianName = "";
function author1() {
	document.getElementById("radio1").checked=true;
	document.getElementById("radio2").checked=false;
	authorName=document.getElementById("label1").innerHTML;
}

function author2() {
	document.getElementById("radio2").checked=true;
	document.getElementById("radio1").checked=false;
	authorName=document.getElementById("label2").innerHTML;
}

function musician1() {
	document.getElementById("radio3").checked=true;
	document.getElementById("radio4").checked=false;
	musicianName=document.getElementById("label3").innerHTML;
}

function musician2() {
	document.getElementById("radio4").checked=true;
	document.getElementById("radio3").checked=false;
	musicianName=document.getElementById("label4").innerHTML;
}

function getavailablebooks(){
	
	if(!document.getElementById("radio1").checked && !document.getElementById("radio2").checked) {
		alert("Please select atleast one of the authors");
		return;
	}

	function book(authorName, bookName, publishYear){
		this.authorName = authorName;
		this.bookName = bookName;
		this.publishYear = publishYear;
	}
	
	var bookName = [];
	var publishYear = [];
	if(authorName == "JK Rowling") {
		bookName = ["Harry Potter all parts", "The SilkWorm", "The Tales of Beedle the Bard"];
		publishYear = ["1997 - 2016", "2014", "2007"];
	} else {
		bookName = ["Hamlet", "The Merchant of Venice", "The Phoenix and the Turtle"];
		publishYear = ["1603", "1605", "1601"];
	}
	
	var bookInfoToshow = [];
	var length = 3;
	for(var count = 0; count < length; count++) {
		bookInfoToshow.push(new book(authorName, bookName[count], publishYear[count]));
	}
	
	document.getElementById("para").innerHTML = "<pre>" + "Available books by " + authorName + " are:" + "</pre>";
	var div = document.getElementById("para");
    var newcontent = document.createElement('div');
	
    for(var count = 0; count < length; count++) {
    	newcontent.innerHTML = "<pre>" + "Book Name: " + bookInfoToshow[count].bookName + "		 Publish Year: " + bookInfoToshow[count].publishYear + " </pre> ";
    	div.appendChild(newcontent.firstChild);
	}
}

function getavailableCDs() {
	
	if(!document.getElementById("radio3").checked && !document.getElementById("radio4").checked) {
		alert("Please select atleast one of the musicians");
		return;
	}
	
	var cdName = [];
	var publishYear = [];
	var length = 3;
	
	if(musicianName == "The Beatles") {
		cdName = ["Let It Be", "Abbey Road", "Revolver"];
		publishYear = ["1970", "1969", "1966"];
	} else {
		cdName = ["If I can Dream", "Elvis The King", "The Sun Sessions"];
		publishYear = ["2015", "2007", "1976"];
	}	
	
	var CDs = {
			musicianNameStr:musicianName, 
			cdNameArr:cdName,
			publishYearArr:publishYear
	};
	
	document.getElementById("para").innerHTML = "<pre>" + "Available CDs by " + musicianName + " are:" + "</pre>";
	var div = document.getElementById("para");
    var newcontent = document.createElement('div');
	
    for(var count = 0; count < length; count++) {
    	newcontent.innerHTML = "<pre>" + "CD Name: " + CDs.cdNameArr[count] + "		 Publish Year: " + CDs.publishYearArr[count] + " </pre> ";
    	div.appendChild(newcontent.firstChild);
	}	
}
