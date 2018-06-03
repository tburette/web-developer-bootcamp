
var game = {};
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")



game.init = function(){
	setupModeButtons();
	setupSquares();
	colorDisplay.textContent = pickedColor;
}

game.init();
reset();

function setupModeButtons(){
	modeButtons.forEach(function(button, i){
		button.addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares = button.textContent == "Easy"?3:6;
			console.log(numSquares);
			reset();
		})
	});
}

function setupSquares(){
	squares.forEach(function(square, i){
		square.style.backgroundColor = colors[i];
		square.addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play again";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}else {	
				this.style.backgroundColor = "";
				// this.classList.add("hidden-square");
				message.textContent = "Try again";
			}
		})
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	squares.forEach(function(square, i){
		if(colors[i]){
			square.style.backgroundColor = colors[i];
			square.style.display = "block";
		}else{
			square.style.display = "none";
		}
	});
	h1.style.backgroundColor = "steelblue";

	squares.forEach(function(square, i){
		square.style.backgroundColor = colors[i];
		square.addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play again";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}else {	
				this.style.backgroundColor = "";
				// this.classList.add("hidden-square");
				message.textContent = "Try again";
			}
		})
	});

}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	squares.forEach(function(square, i){
		square.style.backgroundColor = color;
	})
}

function pickColor(){
	var randomI = Math.floor(Math.random() * colors.length);
	return colors[randomI];
}

function randomColor(){
	return "rgb(" 
	+ Math.floor(Math.random()*256)
	+ ", "
	+ Math.floor(Math.random()*256)
	+ ", "
	+ Math.floor(Math.random()*256)
	+ ")";
}

function generateRandomColors(num){
	return new Array(num).fill(undefined).map(x => randomColor());
}
