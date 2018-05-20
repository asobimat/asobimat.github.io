$(document).ready(function() {
	$("a.nav-link").on("click", function(){
		debugger;
	  $("li.nav-item a.active").removeClass("active");
	  $(this).addClass("active");
	});
});