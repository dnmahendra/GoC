
var hangman = {
	sports: ['football','basketball','tennis','cricket','rugby','ping pong','badminton','hockey'],
	animals: ['tiger','lion','leopard','wolf','dog','cat','monkey','donkey'],
	countries: ['india','australia','america','england','new zeland','fiji','singapore']
};

var keys = Object.keys(hangman);


function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var selectWord = function(category) {

		for(var i=0; i<keys.length; i++) {
			if(keys[i] === category) {
			var secretWord = hangman[category][Math.floor(Math.random()*hangman[category].length)];
		}
	}

	return secretWord;
}

if(getQueryVariable("player") == 2) {
	var word = localStorage.secrtWord;
}
else {
	var category = getQueryVariable("param");
	var word = selectWord(category);
}

var input = document.getElementById('toInput');

var createInput = function(arg) {

var newItem;

for(var i=0; i<arg.split('').length; i++) {
	if(arg.split('')[i] !== ' ') {
		newItem = document.createElement('input');
		newItem.className = 'input-item';
		input.appendChild(newItem);
		}
	else {
		newItem = document.createElement('input');
		newItem.className = 'empty-item';
		input.appendChild(newItem);
		}
	}
}

createInput(word);
var count = 0;
var numImages = 0;
var wordCount = 0;

var usrInput = function() {
	var gameLost = document.getElementById('endGame');
	var pressKey = document.getElementById('virtualKey');

	var keyValue = event.target.value;

	event.target.style.visibility = 'hidden';
	var arrReturn = playGame(keyValue, word);

	if(count<5) {
			if(!arrReturn[0]) {
				count++;
				document.getElementsByTagName('img')[numImages].style.visibility = 'hidden';
				numImages++;
			}
	}
	if(arrReturn[1] === word.length) {
		newItem = document.createElement('p');
		newItem.className = 'game-won';
		var contentNode = document.createTextNode("Congrats! You got it!");
		gameLost.appendChild(contentNode);
		gameLost.appendChild(newItem);
		var playAgain = document.getElementById('replayGame');
		var newlink = document.createElement('a');
		var linkText = document.createTextNode('Play Again')
		newlink.setAttribute('class', 'home-page');
		newlink.setAttribute('href', 'main.html');
		newlink.appendChild(linkText);
		playAgain.appendChild(newlink);

	}
	if(count === 5) {
		newItem = document.createElement('p');
		newItem.className = 'game-lost';
		var contentNode = document.createTextNode("Sorry! No cake for you!");
		gameLost.appendChild(contentNode);
		gameLost.appendChild(newItem);
		var playAgain = document.getElementById('replayGame');
		var newlink = document.createElement('a');
		var linkText = document.createTextNode('Play Again')
		newlink.setAttribute('class', 'home-page');
		newlink.setAttribute('href', 'main.html');
		newlink.appendChild(linkText);
		playAgain.appendChild(newlink);

	}
}

var playGame = function(inptValue,strMatch) {

var arrMatch = strMatch.split('');
var match = false;

	for(var k=0; k<arrMatch.length; k++) {
			if(arrMatch[k] === " ") {
			arrMatch.splice(k,1);
			k=k-1;
		}
	}

	for(var j=0; j<arrMatch.length; j++) {
		if(inptValue === arrMatch[j]) {
			document.getElementsByClassName('input-item')[j].value = inptValue;
			match = true;
			wordCount++;
		}
	}

return [match,wordCount];

}


