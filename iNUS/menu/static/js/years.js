$(document).ready(function(){
	var $clone1 = $("#year1").clone();
	$clone1.find("h3").text("YEAR 2");
	$clone1.appendTo("#year2");
});

$(document).ready(main);