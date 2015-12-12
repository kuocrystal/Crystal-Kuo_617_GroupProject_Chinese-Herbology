$(function() {

	Parse.$= jQuery;

 	//initialize( applicationId, javaScriptKey, masterKey ) 
	Parse.initialize("azvyPdXBywnrf7km2bs4andda1LkdTCmI6861Hs9", "sBnyzTMc7dcMMxJ1I0JVpdRAcmNNGV7fkYEKjoMq");
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	//  testObject.save({foo: "bar2"}).then(function(object) {
	//   alert("welcome");
	// }); 

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();

	
	$('#formSignIn').on('submit', function(e) {
 
	    e.preventDefault();
 
	    var data = $(this).serializeArray(),
	        username = data[0].value;
	        // username = "alicekoo",
	        password = data[1].value;
	        // password = "12345";

 
	    Parse.User.logIn(username, password, {
	        success: function(user) {
	        	alert("Welcome! Let's get free samples by clicking LIKE!");
	        	window.location = "index2.html";

	        	

					
	        },
	        error: function(object, error) {
	            console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
	});
	
	
});

