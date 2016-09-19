var accountType = "";

function selectRadioButton1() {
	document.getElementById("savings").checked = true;
	document.getElementById("checkings").checked = false;
	accountType = document.getElementById("1").innerHTML;
}

function selectRadioButton2() {
	document.getElementById("checkings").checked = true;
	document.getElementById("savings").checked = false;
	accountType = document.getElementById("2").innerHTML;
}

function bankAccount(features) {
	this.features = features;
}

bankAccount.prototype.getFeatures = function() {
	return this.features;
};

function savingAcc(features) {
	bankAccount.call(this, features);
}

savingAcc.prototype.getSavingFeatures = function() {
	return this.features;
};

function checkingAcc(features) {
	bankAccount.call(this, features);
}

checkingAcc.prototype.getCheckingFeatures = function() {
	return this.features;
};

function getFeaturesInfo() {
	if (accountType === "Saving Account") {
		var savingAccVar = new savingAcc(
				"Open new account, Check account balance, "
						+ "earn interest on your money – if you leave the money in your account, "
						+ "the amount grows over time");
		alert(savingAccVar.getSavingFeatures());
	} else {
		var checkingAccVar = new checkingAcc(
				"Link your checking account to your savings account, "
						+ "Track your spending using Online and Mobile banking and alerts, "
						+ "Take advantage of automatic payments");
		alert(checkingAccVar.getCheckingFeatures());
	}
}


