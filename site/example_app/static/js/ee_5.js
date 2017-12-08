$(document).ready(function(){
	putClicker(100, 0, 100, 100);
	$("#img2").click(function() {
		//TODO aller à la page
		alert("hello");
	});
});

function putClicker(x, y, width, height)
{
	$("#img").css("position", "relative");

	$("#img2").css("top", x + "px");	
	$("#img2").css("left", y + "px");
	$("#img2").css("height", height + "px");
	$("#img2").css("width", width + "px");
	$("#img2").css("position", "absolute");
}