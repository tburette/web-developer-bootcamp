var todos = [];

do {
	var input = prompt("What would you like to do?")
	if(input === "list"){
		todos.forEach(function(todo, index){
			console.log(index, todo);
		})
	}else if(input === "new"){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}else if(input === "delete"){
		var index = prompt("Enter index of todo to delete");
		todos.splice(index, 1)
	}
}while(input !== "quit" && input !== null);
