$(function() {
	//important set up for import Parse
	Parse.$ = jQuery;
	Parse.initialize("azvyPdXBywnrf7km2bs4andda1LkdTCmI6861Hs9", "sBnyzTMc7dcMMxJ1I0JVpdRAcmNNGV7fkYEKjoMq");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();

	testObject.save(
	{
		foo:"bar"
	}).then(function(Object) {
		alert("Welcome to Chinese herbology! Log In or Sign Up for free samples choose by yourself!");
	}
	);
	
});