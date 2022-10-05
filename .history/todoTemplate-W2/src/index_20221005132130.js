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

// view todos
let myList = toDo.values()

let displayList = () => {
	let myTasks = '';
	
	for (let task of myList) {
		// for loop will go through each object and call the name, adding it to the list
		myTasks += '<li>' + task.name + '<span>' + '<i class="fa fa-trash ">' + '</i>' + '</span>' + '</li>';
	}
	return myApp.innerText = myList;
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





myApp.appendChild(appTitle);
myApp.appendChild(d)