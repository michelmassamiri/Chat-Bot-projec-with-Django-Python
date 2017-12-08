var times = '92cfceb39d57d914ed8b14d0e37643de0797ae56';
var nbTimes = 0;
var audio = document.createElement('audio');
audio.src = 'music.wav';
$(document).ready(function() {	
	var test = setInterval(function(){
		if(times != Sha1.hash(nbTimes)){
			audio.play();
			nbTimes++;

			if(Sha1.hash(nbTimes) == 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4')
				$("#appendTo").append("<p>Y'a une fin...</p>");
			else if(Sha1.hash(nbTimes) == 'f1abd670358e036c31296e66b3b66c382ac00812')
				$("#appendTo").append("<p>Promis, y'a une fin...</p>");
			else if(Sha1.hash(nbTimes) == 'f6e1126cedebf23e1463aee73f9df08783640400')
				$("#appendTo").append("<p>Vous y etes bientot</p>");
			else if(Sha1.hash(nbTimes) == '972a67c48192728a34979d9a35164c1295401b71')
				$("#appendTo").append("<p>Allez, encore un effort</p>");
			else if(Sha1.hash(nbTimes) == 'af3e133428b9e25c55bc59fe534248e6a0c0f17b')
				$("#appendTo").append("<p>Plus que 2</p>");
		}
		else{
			clearInterval(test);
			cl(nbTimes);
		}
	}, 4800);
});

function cl(nbtimes)
{
	var hash = prompt("Vous avez compté?", "");
	if(Sha1.hash(hash) == times)
	{
		//TODO changement de page + uglify
		alert("GG BRO");
	}
	else
	{
		//TODO changes les messages
		alert("Dommage");
	}
}