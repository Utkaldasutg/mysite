// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import {search} from 'backend/dquery';
$w.onReady(function () {
	$w("#text45").hide();
	$w('#text44').hide();
	$w('#box2').hide();
	$w("#button7").onClick( (event) => {
		
		$w("#input14").inputType = "text";
		let ID=$w("#input14").value;
		
		const ID1=ID.valueOf();
		
  		
  		console.log(ID1)  // "myElement"
		  	search(ID1).then(result => {
	    console.log(result);
		$w('#text45').show();
		$w('#box2').show();
		$w('#text44').show();
		$w('#text45').text=result;
		 
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});





} );
	//TODO: write your page related code here...

});


export function button1_click(event) {
	//Add your code for this event here: 
}