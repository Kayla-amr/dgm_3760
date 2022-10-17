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

let myArray = toDo.values()
let myApp = document.querySelector('.myApp');


let listTodos = () => {
    let myTodos = ''; 
    
    for (let task of myArray){
        myTodos += `${task.name}<br>`
    }
    return myArray.innerHTML = myTodos;
}
listTodos()

function displayTitle() {
	let appTitle = document.createElement('h1');
	appTitle.textContent = 'Basic Todo App';

	//myApp.appendChild(appTitle);
}
displayTitle();
// view todos


function addTask() {
	let userInput = document.createElement('input').value;
    userInput = '';
	userInput.placeholder = 'New task';

    document.createElement('button').onclick = () => {
        myArray.push(userInput);
        listTodos
        
    }
	
}
addTask();

//add todos
// let addTask = document.createElement('input');
// addTask.type = 'new task';
// addTask.className = 'newTodo'; // set the CSS class
// container.appendChild(addTask);
//edit todos

//delete todo

//show number of todos left

//clear all to



