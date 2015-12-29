
var category;

//Grab the category being chose by the user
var selectCategory = function() {

	var categoryList = document.getElementById('category-list');

	if(event.target.tagName === 'LI') {
		var category = event.target.innerHTML.toLowerCase();
	}

		var strPath = "index.html?param=" + category + '&' + 'player=1';; 

	window.location.assign(strPath);
}

var secretWord = function() {
	var secretText = document.getElementsByClassName('secret-word')[0];

	var secrtWord;

	localStorage.secrtWord = secretText.value;

	var strPath = "index.html?player=2";

	window.location.assign(strPath);

}
