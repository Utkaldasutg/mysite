// For full API documentation, including code examples, visit https://wix.to/94BuAAs
$w.onReady(function () {
	//TODO: write your page related code here...
	setTimeout(() => {
		$w("#statebox1").changeState("Intro")
	}, 4000)
			
	$w("#button22").onClick(() => {
		$w('#statebox1').changeState("Expanded");
	});
	$w("#button23").onClick(() => {
		$w('#statebox1').changeState("Intro");
	});

});

// For full API documentation, including code examples, visit https://wix.to/94BuAAs
$w.onReady(function () {
	//TODO: write your page related code here...
	setTimeout(() => {
		$w("#PreloaderStateBox").changeState("Intro1")
	}, 9000)
			
	$w("#button9").onClick(() => {
		$w('#PreloaderStateBox').changeState("Expanded1");
	});
	$w("#button20").onClick(() => {
		$w('#PreloaderStateBox').changeState("Intro1");
	});

});

$w.onReady(function () {
	//TODO: write your page related code here...
	setTimeout(() => {
		$w("#statebox2").changeState("state2")
	}, 9000)
			
	$w("#button24").onClick(() => {
		$w('#statebox2').changeState("state3");
	});
	$w("#button25").onClick(() => {
		$w('#statebox2').changeState("state2");
	});

});
$w.onReady(function () {
	//TODO: write your page related code here...
	setTimeout(() => {
		$w("#statebox3").changeState("state5")
	}, 9000)
			
	$w("#button1").onClick(() => {
		$w('#statebox3').changeState("state6");
	});
	$w("#button26").onClick(() => {
		$w('#statebox3').changeState("state5");
	});

});