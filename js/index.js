if ($(window).width() <= 428) {
	$("div.firstAnimation").replaceWith(
		'<h1 id="MyName">ALEJANDRO CERVANTES</h1>'
	);
}



setTimeout(function () {
	$("#iam").addClass("swe-shine");
	setTimeout(function () {
		$("#iam").removeClass("swe-shine");
	}, 1000);
}, 2000);
