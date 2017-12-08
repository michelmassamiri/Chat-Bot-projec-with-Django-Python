var loc = "";
$(document).ready(function(){
	putClicker(200, 50, 100, 100);
	$("#img2").click(function() {
		document.location.href = loc;
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