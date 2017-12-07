var times = '92cfceb39d57d914ed8b14d0e37643de0797ae56';
var nbTimes = 0;
var audio = document.createElement('audio');
audio.src = 'music.wav';
$(document).ready(function() {	
	var test = setInterval(function(){
		if(times != Sha1.hash(nbTimes)){
			audio.play();
			nbTimes++;
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