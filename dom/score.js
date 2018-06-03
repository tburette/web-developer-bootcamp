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
Player.prototype.scored = function(){
	this.score += 1;
}
Player.prototype.reset = function(){
	this.score = 0;
	this.winner = false;
}


function Game(p1, p2, playingTo){
	this.p1 = p1;
	this.p2 = p2;
	this.playingTo = playingTo;
}
Game.prototype.isFinished = function(){
	return [this.p1.winner, this.p2.winner].includes(true); 
}
Game.prototype.attemptsToScore = function(player){
	if(!this.isFinished()){
		player.scored();
		if(player.score >= this.playingTo.value) player.winner = true;
	}
}
Game.prototype.reset = function(){
	this.p1.reset();
	this.p2.reset();
}


var playingTo = document.querySelector("#playing-to");
var game = new Game(
	new Player("#p1-score"),
	new Player("#p2-score"),
	playingTo);

var p1Button = document.querySelector("#p1");
p1Button.addEventListener("click", () => game.attemptsToScore(game.p1));

var p2Button = document.querySelector("#p2");
p2Button.addEventListener("click", () => game.attemptsToScore(game.p2));

var resetButton = document.querySelector("#reset");
resetButton.addEventLitsener("click", () => game.reset());

playingTo.addEventListener("input", function(e){
	resetButton.click();
	var disablePlayerButtons = e.data === null;
	p1Button.disabled = p2Button.disabled = disablePlayerButtons;
})
