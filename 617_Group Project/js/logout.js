$(function() {

	Parse.$= jQuery;

 	//initialize( applicationId, javaScriptKey, masterKey ) 
	Parse.initialize("azvyPdXBywnrf7km2bs4andda1LkdTCmI6861Hs9", "sBnyzTMc7dcMMxJ1I0JVpdRAcmNNGV7fkYEKjoMq");
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	//  testObject.save({foo: "bar2"}).then(function(object) {
	//   alert("welcome");
	// }); 

	$('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }

        // do redirect
        //window.location.replace("Sign_In.html");
        // or
        window.location = "index.html";
    });

});

