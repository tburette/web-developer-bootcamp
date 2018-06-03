"use strict";

/**
Encapsulates a DOM element representing a player
*/
function Player(selector){
	this.element = document.querySelector(selector);
	this.winnerClass = "winner";
}
Object.defineProperty(Player.prototype, 'score', {
	get: function(){
		return parseInt(this.element.textContent)
	},
	set: function(newScore){
		this.element.textContent = newScore;
	}
});
Object.defineProperty(Player.prototype, 'winner', {
	get: function(){
		return this.element.classList.contains(this.winnerClass);
	},
	set: function(isWinner){
		if(isWinner){
			this.element.classList.add(this.winnerClass);
		}else{
			this.element.classList.remove(this.winnerClass);
		}
	}
});
Player.prototype.scored = function(playingTo){
	this.score += 1;
	if(this.score >= playingTo) this.winner = true;
}
Player.prototype.reset = function(){
	this.score = 0;
	this.winner = false;
}


var p1 = new Player("#p1-score");
var p2 = new Player("#p2-score");
var playingTo = document.querySelector("#playing-to");

function isGameFinished(){
	return [p1.winner, p2.winner].includes(true); 
}

function attemptsToScore(player){
	if(!isGameFinished()){
		player.scored(parseInt(playingTo.value));
	}
}

var p1Button = document.querySelector("#p1");
p1Button.addEventListener("click", () => attemptsToScore(p1));

var p2Button = document.querySelector("#p2");
p2Button.addEventListener("click", () => attemptsToScore(p2));

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	p1.reset();
	p2.reset();
});

playingTo.addEventListener("input", function(e){
	resetButton.click();
})
