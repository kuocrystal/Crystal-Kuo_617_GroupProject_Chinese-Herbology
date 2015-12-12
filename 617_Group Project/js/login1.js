$(function() {

	Parse.$= jQuery;

 	//initialize( applicationId, javaScriptKey, masterKey ) 
	Parse.initialize("azvyPdXBywnrf7km2bs4andda1LkdTCmI6861Hs9", "sBnyzTMc7dcMMxJ1I0JVpdRAcmNNGV7fkYEKjoMq");
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	//  testObject.save({foo: "bar2"}).then(function(object) {
	//   alert("welcome");
	// }); 

	$("#signUp").on("submit",function(e){
		e.preventDefault();
	var data = $(this).serializeArray();
	username = data[0].value;
	password = data[1].value;
	email = data[2].value;
	console.log(username, password, email);

		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);

		// other fields can be set just like with Parse.Object
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
		    alert('sign up success!');
		    window.location = "index.html";
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});

	});

});

