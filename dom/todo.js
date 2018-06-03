function applyEventListeners(events, element){
	events.forEach(function(event){
		element.addEventListener(event.event, function(){
			if("style" in event)
				this.style[event.style] = event.value;
			else if("classToggle" in event)
				this.classList.toggle(event.classToggle)
			else if("classAdd" in event)
				this.classList.add(event.classAdd)
			else if("classRemove" in event)
				this.classList.remove(event.classRemove)
		})
	});
}


var lis = document.querySelectorAll("li");
lis.forEach(function(li){
	events = [
		{event: "mouseover", classAdd: "selected"},
		{event: "mouseout", classRemove: "selected"},
		{event: "click", classToggle: "done"},
	];
	applyEventListeners(events, li);

	// li.addEventListener("mouseover", function(){
	// 	this.style.color = "green";
	// });

	// li.addEventListener("mouseout", function(){
	// 	this.style.color = "black";
	// })

	// li.addEventListener("click", function(){
	// 	this.classList.toggle("done")
	// })
})
