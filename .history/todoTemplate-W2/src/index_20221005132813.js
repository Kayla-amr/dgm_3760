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


let myApp = document.querySelector('.myApp')

let appTitle = document.createElement ('h1')
appTitle.textContent = 'Basic Todo App'

myApp.appendChild(appTitle);

// view todos
let myList = toDo.values()

let displayList = () => {
	let myTasks = '';
	
	for (let task of myList) {
		// for loop will go through each object and call the name, adding it to the list
		document.createElement ('li').myTasks.name
	}
	document.querySelector ('myApp).innerText = myTasks
};
// Calling functions
//add todos
// let addTask = document.createElement('input');
// addTask.type = 'new task';
// addTask.className = 'newTodo'; // set the CSS class
// container.appendChild(addTask);
//edit todos

//delete todo

//show number of todos left

//clear all to