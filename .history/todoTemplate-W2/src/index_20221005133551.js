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

function displayTitle(){}
let myApp = document.querySelector('.myApp')

let appTitle = document.createElement ('h1')
appTitle.textContent = 'Basic Todo App'

// view todos
function addTask (){
    let newTask = document.createElement('input')
    newTask.placeholder = 'New task'
    myApp.appendChild(newTask)
}

//add todos
// let addTask = document.createElement('input');
// addTask.type = 'new task';
// addTask.className = 'newTodo'; // set the CSS class
// container.appendChild(addTask);
//edit todos

//delete todo

//show number of todos left

//clear all to






addTask()