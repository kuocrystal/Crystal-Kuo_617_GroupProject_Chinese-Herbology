$(function() {
	//important set up for import Parse
	Parse.$ = jQuery;
	Parse.initialize("azvyPdXBywnrf7km2bs4andda1LkdTCmI6861Hs9", "sBnyzTMc7dcMMxJ1I0JVpdRAcmNNGV7fkYEKjoMq");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();


				var dataload=new Parse.Query(Parse.Object.extend("headmeridian"));
 				dataload.find({
		          success:function(results){
		            

 						for (var i = 0; i < results.length; i++) { 
					        
					        var object = results[i];

				                (function($) {

				                    $('.detail').append('<div class="l1">' + '<h3>'+ object.get('name') + '</h3>'+ '</div>'); 

				                	$('.detail').append('<div class="l2">' +  object.get('describe') + '</div>'); 

 									//$('.text').append('<div class="imggp">' + '<img id="simg" src="' + object.get('img') + '">' + '</div>');


				                 })(jQuery);	

 								 } }, 

				
				});
			

		



	
});