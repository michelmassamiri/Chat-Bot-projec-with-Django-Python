$(document).ready(function() {
	var key = '';
	var count = 0;
	$(this).bind('keypress', function(e) {
		key = key + (e.keyCode ? e.keyCode : e.charCode);
		++count;
		if(count == 3)
		{
			var hash = Sha1.hash(key);
			var okhash1 = 'e87afa7de4b343eb4db5dd0d2b4706237c818d4f';
			var okhash2 = 'a9d33ec75324dcd3b9774d95668a8960ff6eb179';
			var okhash3 = '55c90b000612e24d1388af4dac14180acb4dfd9e';
			var okhash4 = '9ae0b83ff2bfdb7a4f2873983ac9ce7009a830b8';
			if(hash == okhash1 || hash == okhash2 || hash == okhash3 || hash == okhash4)
			{
				//TODO le post et l'uglify
				document.location.href = "http://www.google.com";
			}
			count = 0;
			key = '';
		}
	});
});