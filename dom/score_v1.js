"use strict";
/*A bit over the top and not even that elegent in the end
A basic implementation without abstraction would be simpler to 
understand.

An implementation with a better abstraction to represent a player
would also be better.
*/


var winnerClass = "winner";
/**
Creates a function that gets or sets the content of a DOM element as an int.
*/
// function getSetIntContentGenerator(scoreElem){
// 	return function getSetIntContent(newScore){
// 		if(newScore === undefined){
// 			return parseInt(scoreElem.textContent);
// 		}
// 		scoreElem.textContent = newScore;
// 	}
// }

// var p1Score = getSetIntContentGenerator("#p1-score");
// var p2Score = getSetIntContentGenerator("#p2-score");
// var playingTo = getSetIntContentGenerator("#playing-to")

function DOMIntValue(selector){
	this.element = document.querySelector(selector);
}
DOMIntValue.prototype.value = function(newValue){
		if(newValue === undefined){
			return parseInt(this.element.textContent);
		}
		this.element.textContent = newValue;
}
//should be more generic (any property)
DOMIntValue.prototype.winner = function(isWinner){
	if(isWinner === undefined){
		return this.element.classList.contains(winnerClass);
	}else if(isWinner){
		this.element.classList.add(winnerClass);
	}else{
		this.element.classList.remove(winnerClass);
	}
}

var p1 = new DOMIntValue("#p1-score");
var p2 = new DOMIntValue("#p2-score");
var playingTo = new DOMIntValue("#playing-to");

function isGameFinished(){
	return [p1.value(), p2.value()].some(score => score >= playingTo.value()); 
}

var p1Button = document.querySelector("#p1");
p1Button.addEventListener("click", function(){
	if(!isGameFinished()){
		p1.value(p1.value()+1);
		p1.winner(p1.value() >= playingTo.value());
	}
});

var p2Button = document.querySelector("#p2");
p2Button.addEventListener("click", function(){
	if(!isGameFinished()){
		p2.value(p2.value()+1);
		p2.winner(p2.value() >= playingTo.value());
	}
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	p1.value(0);
	p1.winner(false);
	p2.value(0);
	p2.winner(false);
});
