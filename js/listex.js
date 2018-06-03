function printReverse(array){
	// array.reverse().forEach(console.log);

	/* var copy = array.slice();
	while(copy.length != 0){console.log(copy.pop())};*/
	
	for(var i = array.length - 1;i>=0;i--){
		console.log(array[i]);
	}
}

function isUniform(array){
	if(array.length == 0) return true;
	var firstValue = array[0];
	return array.every(function(value){value === firstValue});	
}

function sumArray(array){
	return array.reduce(function(a, b){return a + b;});
}

function max(array){
	if(array.length == 0) return NaN;
	return array.reduce(function(acc, current){
			return acc>current?acc:current;
	});
}
