const addBtn = document.querySelector('.addTask'); //store element object for the add task button
const todoTaskUl = document.querySelector('.todoTasks'); //get a reference to the task container UL
const completedTaskUL = document.querySelector('.completedTasks'); //get a reference to the task container UL
const clearBtn = document.querySelector('#clearBtn'); //clear button
const removeBtn = document.querySelector('.removeBtn');
const remainingTasks = document.querySelector('.remainingTasks');

let myList = [
	{
		id: 0,
		name: 'Choose photography theme',
		category: 'Homework',
		due_date: 'Tomorrow',
		status: false
	},
	{
		id: 1,
		name: 'Organize music',
		category: 'Chores',
		due_date: 'Wednesday',
		status: true
	}
];

//app title
document.querySelector('.formTitle').innerText = 'Basic App Form';

//view todods

function displayTodos(todos) {
	//clear out any tasks (li elements) that are in the UL
	todoTaskUl.innerHTML = '';
	completedTaskUL.innerHTML = '';
	//for each todo in the array, add it to the container UL
	todos.forEach(function(myTask) {
		if (myTask.status != true) {
			todoTaskUl.innerHTML += `<li data-todoId='${myTask.id}'> ${myTask.name} <button class="removeBtn" onclick="deleteTask()">-</button></li>`;

			remainingTasks.textContent = `You have ${todoTaskUl.tagName.length} remaining items left to be completed`;
		} else {
			completedTaskUL.style.textDecoration = 'line-through';
			completedTaskUL.innerHTML += `<li data-todoId='${myTask.id}'> ${myTask.name} <button class="removeBtn" onclick="deleteTask()">-</button></li>`;
		}
	});
}

//add todos

function addTask() {
	let userInput = document.querySelector('.userInput').value;

	const newTodoObj = {
		id: myList.length + 1,
		name: userInput,
		category: null,
		due_date: null,
		status: false
	};

	myList.push(newTodoObj);
	displayTodos(myList);
}

// create a function to complete todos
function editTask() {
	const clickedTodoId = event.target.dataset.todoid;
	const todoIdx = myList.findIndex((todo) => todo.id == clickedTodoId);
	myList[todoIdx].status = !myList[todoIdx].status;
	console.log(myList);
	displayTodos(myList);
	// function will take 1 parameter (input) an id of the todo to complete
	// find the todo to complete and then change the value of status in the todo object
	//use the .findIndex method to get the index
	//then edit the object directly using bracket notation
	//IE: myList[todoIDX].status
}

//create a function to delete todos
function deleteTask() {
	const todoIdx = myList.findIndex((todo) => todo.obj == removeBtn);
	myList.splice(todoIdx, 1);
	displayTodos(myList);
	//much the same as the complete todo function
	//instead of editing the object, you will need to remove it from the array
}

function deleteComplete() {
	myList.forEach((todo, index, array) => {
		if (todo.status) {
			array.splice(index, 1);
		}
	});
}

function remaining() {
	let todoTaskUl = document.querySelector('.todoTasks').getElementsByTagName('li').length;

	remainingTasks.textContent = `You have ${todoTaskUl} remaining items left to be completed`;
}

remaining();

//for complete and delete event listeners you will need to listen for events on the UL

addBtn.addEventListener('click', (event) => {
	addTask();
});

todoTaskUl.addEventListener('click', (event) => {
	editTask();
});

completedTaskUL.addEventListener('click', (event) => {
	editTask();
});

clearBtn.addEventListener('click', (event) => {
	deleteComplete();
	displayTodos(myList);
});

//on page load, show the todos
displayTodos(myList);
