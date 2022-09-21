//The start of my ToDo App list

let toDo = [
	{
		id: 1,
		name: 'Choose photography theme',
		category: 'Homework',
		due_date: 'Tomorrow',
		status: true
	},
	{
		id: 2,
		name: 'Organize music',
		category: 'Chores',
		due_date: 'Wednesday',
		status: false
	}
];

//function will call array and display objects
function displayList() {
	//giving a new varial to the class in HTML called .toDos
	let myList = document.querySelector('.toDos');

	//empty variable
	let tasks = '';

	// for loop will go through each object and call the name, adding it to the list
	for (let task of toDo) { 
		tasks += '<li>' + task.name + '</li>';
	}

	//adding the tasks to the class .toDos which we now called myList
	myList.innerHTML = tasks;
}


// Calling functions
displayList()
