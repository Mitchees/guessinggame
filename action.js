
var min = Math.floor((Math.random() * 30) + 1);
var max = min + 3;
var value = Math.floor(Math.random() * (max - min + 1) ) + min;

let minimum = document.getElementById('min').innerHTML = min;
let maximun = document.getElementById('max').innerHTML = max;

let score = 0;
let counter = 0;
document.getElementById("scoreNumber").innerHTML = score;
/**
	This is the check button event handler
*/	
document.getElementById("check").addEventListener("click", function(){
	if(counter < 10){
		if(document.getElementById("userGuess").value == value){
			score++;
			document.getElementById("scoreNumber").innerHTML = score;
			document.getElementById("cOrW").innerHTML = "CORRECT!!!";
		}
		else{
			document.getElementById("cOrW").innerHTML = "Wrong! Answer: " + value;
		}
		counter++;

	}
	if (counter == 10) {
		if (score < 5) {
			document.getElementById("cOrW").innerHTML = "Sorry, You Failed :( <br> You got " + score + " Out of 10 Tries.";
		}
		else
		{
			document.getElementById("cOrW").innerHTML = "Congratulations, you Passed!<br> You got " + score + " Out of 10 Tries.";

		}
	}


});
/*
	This is the again event handler
*/
document.getElementById("again").addEventListener("click", function(){
	min = Math.floor((Math.random() * 30) + 1);
	max = min + 3;
	value = Math.floor(Math.random() * (max - min + 1) ) + min;

	document.getElementById("cOrW").innerHTML = "";
	document.getElementById("userGuess").value = "";
	minimum = document.getElementById("min").innerHTML = min;
	maximun = document.getElementById("max").innerHTML = max;
});

/*
	This will show help
*/
document.getElementById("help").addEventListener("click", function(){
	document.getElementById("helpTalk").innerHTML = "The game has generated a random number between the given range (min - max)<br> You are required to guess what the random number is. <br> Type it in the text box provided<br> Click the Check button to see if you're correct or not. <br>Click the next button to produce a new range";

	
});
