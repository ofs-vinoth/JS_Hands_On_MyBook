var LOGIN = function() {
	
	var username = "";
	var password = "";
	
	return {
		signIn: function() {
			username = document.getElementById("usename").value;
			password = document.getElementById("password").value;
			if ("vinoth" == username && "raj" == password) {
				window.location = "home.html"
			} else {
				alert("Login Failed");
				document.getElementById("usename").value = "";
				document.getElementById("password").value = "";
			}
		}
	}

};